#!/usr/bin/env python3
"""
make_audio.py - generate a read-aloud MP3 for Jekyll posts with free edge-tts.

USAGE (run from anywhere; paths are resolved relative to the repo):

    # one post (the daily routine uses this for each new post)
    /workspace/.venv-tts/bin/python scripts/make_audio.py _posts/2026-11-03-my-post.md

    # several posts / all posts that have no audio yet, newest first
    /workspace/.venv-tts/bin/python scripts/make_audio.py --all

    # options
    --force          regenerate even if the post already has `audio:` and the MP3 exists
    --voice Guy      force a voice (Guy | Andrew | Ryan); default: random, seeded by slug
    --text-only      only print the extracted spoken text (no TTS, no file changes)
    --edge-tts PATH  edge-tts binary (default: /workspace/.venv-tts/bin/edge-tts or $EDGE_TTS)

WHAT IT DOES for each post file:
  1. Extracts the spoken text: the title, then the article body as plain prose
     (markdown, HTML, Liquid, URLs, images, image credits, "Sources" /
     "Original article(s)" link lists and footnotes are stripped).
  2. Picks one of three voices: en-US-GuyNeural, en-US-AndrewNeural, en-GB-RyanNeural
     (reproducible random choice seeded by the slug).
  3. Runs edge-tts (pitch -5Hz, rate -10% = speed 0.9) in ~6000-char paragraph chunks, retrying each
     chunk up to 3 times on errors, joins them losslessly with ffmpeg, and writes
     assets/audio/<slug>.mp3 as mono ~48 kbps (24 kHz). Re-encodes with ffmpeg only if
     the output is not already mono/48k.
  4. Adds/updates front matter keys `audio`, `audio_voice` and `audio_duration` (m:ss),
     leaving every other front matter line (dates etc.) byte-for-byte unchanged.

After running: git add assets/audio _posts && git commit && git push.
Only free services are used. Exit code is non-zero if any post failed.
"""
import argparse, html, os, random, re, shutil, subprocess, sys, tempfile, time, json
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
POSTS = REPO / "_posts"
AUDIO_DIR = REPO / "assets" / "audio"
VOICES = {"Guy": "en-US-GuyNeural", "Andrew": "en-US-AndrewNeural", "Ryan": "en-GB-RyanNeural"}
PITCH, RATE = "-5Hz", "-10%"
EDGE_TTS = os.environ.get("EDGE_TTS", "/workspace/.venv-tts/bin/edge-tts")

SKIP_HEADING = re.compile(r"^(sources?|references?|further reading|links?|original articles?|credits?|image credits?|photo credits?|footnotes?|notes)\b", re.I)
SKIP_LINE = re.compile(r"^(original (?:articles?|sources?)|sources?|source links?|image|image credit|photo|photo credit|header image|credit|illustration|links?)\s*:", re.I)


# ---------------------------------------------------------------- front matter
def split_front_matter(raw):
    m = re.match(r"^---[ \t]*\r?\n(.*?)\r?\n---[ \t]*\r?\n?", raw, re.S)
    if not m:
        raise ValueError("no YAML front matter")
    return m.group(1), raw[m.end():]


def fm_get(fm, key):
    m = re.search(r"^" + re.escape(key) + r":[ \t]*(.*)$", fm, re.M)
    if not m:
        return None
    v = m.group(1).strip()
    if len(v) >= 2 and v[0] == v[-1] and v[0] in "\"'":
        v = v[1:-1]
        v = v.replace('\\"', '"') if m.group(1).strip()[0] == '"' else v.replace("''", "'")
    return v


def slug_of(path, fm):
    s = fm_get(fm, "slug")
    if s:
        return s
    return re.sub(r"^\d{4}-\d{2}-\d{2}-", "", path.stem)


def set_audio_front_matter(path, slug, voice_short, duration):
    raw = path.read_text(encoding="utf-8")
    m = re.match(r"^(---[ \t]*\r?\n)(.*?)(\r?\n---[ \t]*\r?\n?)", raw, re.S)
    head, fm, tail = m.group(1), m.group(2), m.group(3)
    lines = [l for l in fm.split("\n") if not re.match(r"^(audio|audio_voice|audio_duration):", l)]
    lines += [f"audio: /assets/audio/{slug}.mp3", f"audio_voice: {voice_short}", f'audio_duration: "{duration}"']
    path.write_text(head + "\n".join(lines) + tail + raw[m.end():], encoding="utf-8")


# ---------------------------------------------------------------- text extraction
def inline_clean(s):
    s = re.sub(r"\{%.*?%\}|\{\{.*?\}\}", " ", s)                 # liquid
    s = re.sub(r"\{:[^}]*\}", " ", s)                              # kramdown attrs
    s = re.sub(r"\[\^[^\]]+\]", "", s)                             # footnote refs
    s = re.sub(r"!\[[^\]]*\]\([^)]*\)", " ", s)                    # images
    s = re.sub(r"!\[[^\]]*\]\[[^\]]*\]", " ", s)
    s = re.sub(r"<https?://[^>]+>", " ", s)                        # autolinks
    s = re.sub(r"\[([^\]]+)\]\((?:[^()]|\([^)]*\))*\)", r"\1", s)  # [text](url)
    s = re.sub(r"\[([^\]]+)\]\[[^\]]*\]", r"\1", s)                # [text][ref]
    s = re.sub(r"<(script|style)\b.*?</\1>", " ", s, flags=re.S | re.I)
    s = re.sub(r"<br\s*/?>", ". ", s, flags=re.I)
    s = re.sub(r"</?[A-Za-z][^>]*>", " ", s)                       # html tags
    s = re.sub(r"\bhttps?://\S+|\bwww\.\S+", " ", s)               # bare urls
    s = re.sub(r"`([^`]*)`", r"\1", s)                             # inline code
    s = re.sub(r"(\*\*|__)(.+?)\1", r"\2", s)                      # bold
    s = re.sub(r"(?<![\w*])[*_](?!\s)(.+?)(?<!\s)[*_](?![\w*])", r"\1", s)  # italic
    s = s.replace("**", "").replace("~~", "")
    s = re.sub(r"\((?:original )?sources?:[^)]*\)\.?", " ", s, flags=re.I)      # "(Sources: ...)"
    s = re.sub(r"(?<=[.!?])\s+(?:original )?sources?:[^\n]*$", " ", s, flags=re.I)  # trailing "Sources: a; b."
    s = re.sub(r"(?<!\w)\*+(?=\w)|(?<=[\w.%)])\*+(?!\w)", "", s)              # stray asterisks (footnote marks)
    s = re.sub(r"#(\d)", r"number \1", s)
    s = re.sub(r"(^|\s)>\s?(?=\d)", r"\1more than ", s)
    s = re.sub(r"(^|\s)<\s?(?=\d)", r"\1less than ", s)
    s = html.unescape(s)
    s = (s.replace("→", " to ").replace("←", " from ").replace("·", ",").replace("•", ",")
          .replace("&", " and ").replace("≈", "about ").replace("~", "about ")
          .replace("–", ", ").replace("—", ", ").replace("|", ", "))
    s = re.sub(r"\s+([,.;:!?])", r"\1", s)
    s = re.sub(r"([,;:])\s*(?=[,.;:])", "", s)
    s = re.sub(r"\(\s*[,.;:]?\s*\)", "", s)                        # empty parens after url removal
    s = re.sub(r"\s{2,}", " ", s).strip(" ,;")
    return s


def end_punct(s):
    s = s.rstrip()
    if s and s[-1] not in ".!?:;\"'”’)":
        s += "."
    elif s and s[-1] == ":":
        s = s[:-1] + "."
    return s


def extract_text(raw):
    fm, body = split_front_matter(raw)
    title = fm_get(fm, "title") or ""
    body = re.sub(r"<!--.*?-->", " ", body, flags=re.S)
    body = re.sub(r"\{%\s*comment\s*%\}.*?\{%\s*endcomment\s*%\}", " ", body, flags=re.S)
    out, para = [], []
    skip_level = None      # inside a "Sources"-type section until a heading of same/higher level
    in_code = False

    def flush():
        if para:
            t = inline_clean(" ".join(para))
            if re.search(r"[A-Za-z]{2}", t):
                out.append(end_punct(t))
            para.clear()

    for line in body.split("\n"):
        st = line.strip()
        if re.match(r"^(```|~~~)", st):
            in_code = not in_code; flush(); continue
        if in_code:
            continue
        h = re.match(r"^(#{1,6})\s+(.*?)\s*#*\s*$", st)
        if h:
            flush()
            level, text = len(h.group(1)), inline_clean(h.group(2))
            if skip_level is not None and level <= skip_level:
                skip_level = None
            if skip_level is None and SKIP_HEADING.match(text):
                skip_level = level
            if skip_level is None and text:
                out.append(end_punct(text))
            continue
        if skip_level is not None:
            continue
        if not st:
            flush(); continue
        if re.match(r"^\[\^[^\]]+\]:", st) or re.match(r"^\[[^\]]+\]:\s*\S+", st):   # footnote / link defs
            flush(); continue
        if re.match(r"^([-*_]\s*){3,}$", st):                                     # hr
            flush(); continue
        if re.match(r"^\|?\s*:?-{2,}", st) and set(st) <= set("|:- "):              # table separator
            continue
        plain = re.sub(r"^[>\s]*", "", st)
        plain = re.sub(r"^([-*+]|\d+[.)])\s+", "", plain)
        probe = re.sub(r"[*_]", "", plain).strip()
        if SKIP_LINE.match(probe):                                              # "Original article: ...", credits
            flush(); continue
        if not re.search(r"[A-Za-z]{2}", inline_clean(plain)):
            flush(); continue
        if st.startswith("|"):                                                  # table row -> sentence
            flush()
            cells = [inline_clean(c) for c in st.strip("|").split("|")]
            cells = [c for c in cells if c]
            if cells:
                out.append(end_punct(", ".join(cells)))
            continue
        if re.match(r"^\s*([-*+]|\d+[.)])\s+", line):                         # list item = own sentence
            flush()
            t = inline_clean(plain)
            if re.search(r"[A-Za-z]{2}", t):
                out.append(end_punct(t))
            continue
        para.append(plain)
    flush()
    text = end_punct(inline_clean(title)) + "\n\n" + "\n\n".join(out) + "\n"
    return text


# ---------------------------------------------------------------- audio
def probe(path):
    r = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration,bit_rate:stream=channels,sample_rate",
                        "-of", "json", str(path)], capture_output=True, text=True, check=True)
    j = json.loads(r.stdout)
    st = j["streams"][0]
    return float(j["format"]["duration"]), int(st.get("channels", 1)), int(j["format"].get("bit_rate", 0))


def fmt_dur(sec):
    sec = int(round(sec))
    h, rem = divmod(sec, 3600)
    m, s = divmod(rem, 60)
    return f"{h}:{m:02d}:{s:02d}" if h else f"{m}:{s:02d}"


def chunks_of(text, limit=6000):
    """Split at paragraph boundaries into pieces of at most ~limit chars (long single
    requests sometimes fail with NoAudioReceived; small pieces are reliable)."""
    out, cur = [], ""
    for para in [p for p in text.split("\n\n") if p.strip()]:
        if cur and len(cur) + len(para) + 2 > limit:
            out.append(cur); cur = ""
        cur = (cur + "\n\n" + para) if cur else para
    if cur:
        out.append(cur)
    return out


def tts_piece(text, voice, dst, tries=3):
    tf = dst.with_suffix(".txt"); tf.write_text(text, encoding="utf-8")
    last = ""
    for i in range(1, tries + 1):
        r = subprocess.run([EDGE_TTS, "--voice", voice, f"--pitch={PITCH}", f"--rate={RATE}", "-f", str(tf),
                            "--write-media", str(dst)], capture_output=True, text=True)
        if r.returncode == 0 and dst.exists() and dst.stat().st_size > 1000:
            return
        last = (r.stderr or r.stdout).strip().splitlines()[-1:] or [""]
        last = last[0][-300:]
        print(f"  edge-tts attempt {i}/{tries} failed: {last}", file=sys.stderr)
        time.sleep(5 * i)
    raise RuntimeError("edge-tts failed after %d attempts: %s" % (tries, last))


def tts(text, voice, out, tries=3):
    with tempfile.TemporaryDirectory() as td:
        td = Path(td)
        parts = []
        for n, piece in enumerate(chunks_of(text)):
            dst = td / f"part{n:03d}.mp3"
            tts_piece(piece, voice, dst, tries)
            parts.append(dst)
        lst = td / "list.txt"
        lst.write_text("".join(f"file '{p}'\n" for p in parts))
        joined = td / "joined.mp3"
        subprocess.run(["ffmpeg", "-y", "-v", "error", "-f", "concat", "-safe", "0", "-i", str(lst), "-c", "copy", str(joined)], check=True)
        dur, ch, br = probe(joined)
        if ch != 1 or br > 56000:
            enc = td / "e.mp3"
            subprocess.run(["ffmpeg", "-y", "-v", "error", "-i", str(joined), "-ac", "1", "-b:a", "48k", str(enc)], check=True)
            joined = enc
        out.parent.mkdir(parents=True, exist_ok=True)
        shutil.move(str(joined), out)
    return probe(out)[0]


def pick_voice(slug, forced=None):
    if forced:
        return forced
    return random.Random("coffee-and-newspaper:" + slug).choice(sorted(VOICES))


def process(path, force=False, voice=None, text_only=False):
    raw = path.read_text(encoding="utf-8")
    fm, _ = split_front_matter(raw)
    if (fm_get(fm, "published") or "").lower() == "false":
        print(f"skip (unpublished): {path.name}"); return None
    slug = slug_of(path, fm)
    text = extract_text(raw)
    if text_only:
        print(text); return None
    out = AUDIO_DIR / f"{slug}.mp3"
    if not force and fm_get(fm, "audio") and out.exists():
        print(f"skip (has audio): {path.name}"); return None
    v = pick_voice(slug, voice)
    t0 = time.time()
    dur = tts(text, VOICES[v], out)
    set_audio_front_matter(path, slug, v, fmt_dur(dur))
    print(f"ok  {path.name}  voice={v}  dur={fmt_dur(dur)}  size={out.stat().st_size//1024} KB  ({time.time()-t0:.0f}s)")
    return v


def post_sort_key(p):
    fm, _ = split_front_matter(p.read_text(encoding="utf-8"))
    return (p.name[:10], fm_get(fm, "date") or "", p.name)


def main():
    global EDGE_TTS
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("posts", nargs="*")
    ap.add_argument("--all", action="store_true")
    ap.add_argument("--force", action="store_true")
    ap.add_argument("--voice", choices=sorted(VOICES))
    ap.add_argument("--text-only", action="store_true")
    ap.add_argument("--edge-tts", default=EDGE_TTS)
    a = ap.parse_args()
    EDGE_TTS = a.edge_tts
    files = [Path(p).resolve() for p in a.posts]
    if a.all:
        files = sorted(POSTS.glob("*.md"), key=post_sort_key, reverse=True)
    if not files:
        ap.error("give post files or --all")
    failed = []
    for f in files:
        try:
            process(f, a.force, a.voice, a.text_only)
        except Exception as e:
            failed.append(f.name); print(f"FAIL {f.name}: {e}", file=sys.stderr)
    if failed:
        print("failed:", ", ".join(failed), file=sys.stderr); sys.exit(1)


if __name__ == "__main__":
    main()
