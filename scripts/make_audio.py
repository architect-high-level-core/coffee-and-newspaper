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
    --chapters       (use for every post) synthesize section by section (one part per H2 heading, H3 if the post has
                     no H2), join the parts, measure each section's exact start time and write
                     them to front matter as `audio_chapters:` (list of {t: seconds, title: "..."}).
                     Without this flag the behaviour is unchanged (and any stale `audio_chapters`
                     is removed when audio is regenerated). Titles are auto-shortened; edit or
                     delete entries by hand afterwards if you want fewer/shorter chapters.

WHAT IT DOES for each post file:
  1. Extracts the spoken text: the title, then the article body as plain prose
     (markdown, HTML, Liquid, URLs, images, image credits, "Sources" /
     "Original article(s)" link lists and footnotes are stripped).
  2. Picks one of three voices: en-US-GuyNeural, en-US-AndrewNeural, en-GB-RyanNeural
     (reproducible random choice seeded by the slug).
  3. Runs edge-tts (pitch -5Hz, rate -10% = speed 0.9) in ~6000-char paragraph chunks, retrying each
     chunk up to 3 times on errors (then paragraph by paragraph as a fallback), joins them losslessly with ffmpeg, and writes
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
# Opt-in only (never picked at random): German male voice for German-language posts
EXTRA_VOICES = {"Conrad": "de-DE-ConradNeural", "Killian": "de-DE-KillianNeural"}
ALL_VOICES = {**VOICES, **EXTRA_VOICES}
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


def yaml_str(t):
    return '"' + t.replace("\\", "\\\\").replace('"', '\\"') + '"'


def set_audio_front_matter(path, slug, voice_short, duration, chapters=None):
    raw = path.read_text(encoding="utf-8")
    m = re.match(r"^(---[ \t]*\r?\n)(.*?)(\r?\n---[ \t]*\r?\n?)", raw, re.S)
    head, fm, tail = m.group(1), m.group(2), m.group(3)
    lines, skipping = [], False
    for l in fm.split("\n"):
        if re.match(r"^audio_chapters:", l):          # block list: drop it and its indented items
            skipping = True; continue
        if skipping and re.match(r"^\s+\S|^-\s", l):
            continue
        skipping = False
        if not re.match(r"^(audio|audio_voice|audio_duration):", l):
            lines.append(l)
    lines += [f"audio: /assets/audio/{slug}.mp3", f"audio_voice: {voice_short}", f'audio_duration: "{duration}"']
    if chapters:
        lines.append("audio_chapters:")
        lines += [f"  - {{t: {c['t']}, title: {yaml_str(c['title'])}}}" for c in chapters]
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
    s = re.sub(r"(?<=\w)\s?km²", " square kilometres", s)          # spoken units
    s = re.sub(r"(?<=\w)\s?m²", " square metres", s)
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


def extract_text(raw, sections=False):
    """Spoken text. With sections=True returns [(chapter_title, text), ...] instead: the first
    entry is the intro (title + text before the first split heading), then one per H2 (H3 if no H2)."""
    fm, body = split_front_matter(raw)
    title = fm_get(fm, "title") or ""
    body = re.sub(r"<!--.*?-->", " ", body, flags=re.S)
    body = re.sub(r"\{%\s*comment\s*%\}.*?\{%\s*endcomment\s*%\}", " ", body, flags=re.S)
    out, para = [], []
    skip_level = None      # inside a "Sources"-type section until a heading of same/higher level
    in_code = False
    split_level = 2 if re.search(r"^##\s+\S", body, re.M) else 3
    marks = []             # (index into `out`, heading text) where a chapter starts

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
                if level == split_level:
                    marks.append((len(out), text))
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
    head = end_punct(inline_clean(title))
    if sections:
        bounds = [0] + [i for i, _ in marks] + [len(out)]
        names = ["Intro"] + [t for _, t in marks]
        res = []
        for k, name in enumerate(names):
            chunk = "\n\n".join(out[bounds[k]:bounds[k + 1]])
            if k == 0:
                chunk = head + ("\n\n" + chunk if chunk else "")
            if chunk.strip():
                res.append((name, chunk + "\n"))
        return res
    text = head + "\n\n" + "\n\n".join(out) + "\n"
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
        try:
            r = subprocess.run([EDGE_TTS, "--voice", voice, f"--pitch={PITCH}", f"--rate={RATE}", "-f", str(tf),
                                "--write-media", str(dst)], capture_output=True, text=True,
                               timeout=120 + len(text) // 20)
            if r.returncode == 0 and dst.exists() and dst.stat().st_size > 1000:
                return
            last = (r.stderr or r.stdout).strip().splitlines()[-1:] or [""]
            last = last[0][-300:]
        except subprocess.TimeoutExpired:
            last = "timeout"
        print(f"  edge-tts attempt {i}/{tries} failed: {last}", file=sys.stderr)
        time.sleep(5 * i)
    raise RuntimeError("edge-tts failed after %d attempts: %s" % (tries, last))


def tts(text, voice, out, tries=3):
    with tempfile.TemporaryDirectory() as td:
        td = Path(td)
        parts = []
        for n, piece in enumerate(chunks_of(text)):
            dst = td / f"part{n:03d}.mp3"
            try:
                tts_piece(piece, voice, dst, tries)
                parts.append(dst)
                continue
            except RuntimeError:
                print(f"  chunk {n} failed; retrying paragraph by paragraph", file=sys.stderr)
            # fallback: one request per paragraph; a paragraph that still fails is retried
            # once more with only letters, digits and basic punctuation
            for k, para in enumerate(p for p in piece.split("\n\n") if p.strip()):
                pd = td / f"part{n:03d}_{k:03d}.mp3"
                try:
                    tts_piece(para, voice, pd, 2)
                except RuntimeError:
                    clean = re.sub(r"[^A-Za-z0-9 .,;:!?'()%-]+", " ", para)
                    clean = re.sub(r"\s{2,}", " ", clean).strip()
                    tts_piece(clean, voice, pd, tries)
                parts.append(pd)
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


def short_title(h, limit=40):
    """'4. Why would Tesla build it? Purposes and motives' -> 'Why would Tesla build it?'"""
    t = re.sub(r"^\d+(\.\d+)*[.)]?\s+", "", h).strip()
    for sep in ("? ", ": ", ". ", " - "):
        i = t.find(sep)
        if 8 <= i:
            t = t[:i + (1 if sep == "? " else 0)]
    if len(t) > limit:
        t = t[:limit].rsplit(" ", 1)[0].rstrip(",;:-") + "…"
    return t


def merge_chapters(chs, min_len=60, max_n=10):
    """Keep only main chapters: a section shorter than `min_len` seconds is merged into the
    previous chapter, and if more than `max_n` remain the shortest ones are merged away."""
    chs = [dict(c) for c in chs]
    def drop(i):
        chs[i - 1]["d"] += chs[i]["d"]; del chs[i]
    i = 1
    while i < len(chs):
        if chs[i]["d"] < min_len: drop(i)
        else: i += 1
    while len(chs) > max_n:
        i = min(range(1, len(chs)), key=lambda k: chs[k]["d"]); drop(i)
    return [{"t": c["t"], "title": c["title"]} for c in chs]


def tts_chapters(sections, voice, out):
    """Synthesize every section separately, join losslessly, return (duration, chapters).
    Start times are the cumulative durations of the parts measured with ffprobe."""
    with tempfile.TemporaryDirectory() as td:
        td = Path(td)
        parts, chapters, t = [], [], 0.0
        for n, (name, text) in enumerate(sections):
            dst = td / f"sec{n:02d}.mp3"
            d = tts(text, voice, dst)
            chapters.append({"t": int(round(t)), "title": "Intro" if n == 0 else short_title(name), "d": d})
            parts.append(dst); t += d
            print(f"  section {n}: start {fmt_dur(chapters[-1]['t'])} ({d:.0f}s) {chapters[-1]['title']}", file=sys.stderr)
        chapters = merge_chapters(chapters)
        lst = td / "list.txt"
        lst.write_text("".join(f"file '{p}'\n" for p in parts))
        joined = td / "joined.mp3"
        subprocess.run(["ffmpeg", "-y", "-v", "error", "-f", "concat", "-safe", "0", "-i", str(lst), "-c", "copy", str(joined)], check=True)
        out.parent.mkdir(parents=True, exist_ok=True)
        shutil.move(str(joined), out)
    total = probe(out)[0]
    print(f"  sum of parts {t:.1f}s, joined file {total:.1f}s", file=sys.stderr)
    return total, chapters


def pick_voice(slug, forced=None):
    if forced:
        return forced
    return random.Random("coffee-and-newspaper:" + slug).choice(sorted(VOICES))


def process(path, force=False, voice=None, text_only=False, chapters=False):
    raw = path.read_text(encoding="utf-8")
    fm, _ = split_front_matter(raw)
    if (fm_get(fm, "published") or "").lower() == "false":
        print(f"skip (unpublished): {path.name}"); return None
    slug = slug_of(path, fm)
    text = extract_text(raw)
    if text_only:
        if chapters:
            for name, t in extract_text(raw, sections=True):
                print(f"===== [{name}] =====\n{t}")
        else:
            print(text)
        return None
    out = AUDIO_DIR / f"{slug}.mp3"
    if not force and fm_get(fm, "audio") and out.exists():
        print(f"skip (has audio): {path.name}"); return None
    v = voice or fm_get(fm, "audio_voice") if chapters else None
    v = v or pick_voice(slug, voice)
    t0 = time.time()
    chs = None
    if chapters:
        dur, chs = tts_chapters(extract_text(raw, sections=True), ALL_VOICES[v], out)
    else:
        dur = tts(text, ALL_VOICES[v], out)
    set_audio_front_matter(path, slug, v, fmt_dur(dur), chs)
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
    ap.add_argument("--voice", choices=sorted(ALL_VOICES))
    ap.add_argument("--text-only", action="store_true")
    ap.add_argument("--chapters", action="store_true")
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
            process(f, a.force, a.voice, a.text_only, a.chapters)
        except Exception as e:
            failed.append(f.name); print(f"FAIL {f.name}: {e}", file=sys.stderr)
    if failed:
        print("failed:", ", ".join(failed), file=sys.stderr); sys.exit(1)


if __name__ == "__main__":
    main()
