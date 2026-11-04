#!/usr/bin/env python3
"""Add a `description:` line to posts that lack one.

The description is taken faithfully from the post itself: the front-matter
`excerpt` if present, otherwise the first real prose paragraph of the body
(markdown stripped, notes like "**How we checked:**" skipped). It is cut to
~158 characters at a sentence or word boundary. Existing descriptions are
never touched. Run from the repo root:  python3 scripts/seo_descriptions.py
"""
import glob, json, re, sys

MAX = 158
SKIP_PREFIX = re.compile(r'^\*\*(how we checked|terms first|key terms|note|hinweis|sources?|quellen|disclaimer)', re.I)

def strip_md(s):
    s = re.sub(r'!\[[^\]]*\]\([^)]*\)', '', s)
    s = re.sub(r'\[([^\]]+)\]\([^)]*\)', r'\1', s)
    s = re.sub(r'<[^>]+>', '', s)
    s = re.sub(r'[*_`]+', '', s)
    s = re.sub(r'https?://\S+', '', s)
    return re.sub(r'\s+', ' ', s).strip()

def first_paragraphs(body):
    out = []
    for para in re.split(r'\n\s*\n', body):
        p = para.strip()
        if not p or p.startswith(('#', '-', '*  ', '>', '|', '<', '```', '!', '1.')):
            continue
        if SKIP_PREFIX.match(p):
            continue
        t = strip_md(p)
        if len(t) < 40:
            continue
        out.append(t)
        if sum(len(x) for x in out) > MAX:
            break
    return ' '.join(out)

def shorten(t):
    if len(t) <= MAX:
        return t
    # prefer whole sentences
    sents = re.split(r'(?<=[.!?])\s+', t)
    acc = ''
    for s in sents:
        cand = (acc + ' ' + s).strip()
        if len(cand) > MAX:
            break
        acc = cand
    if len(acc) >= 120:
        return acc
    cut = t[:MAX - 1].rsplit(' ', 1)[0].rstrip(',;:–- ')
    return cut + '…'

def main(paths):
    changed = 0
    for f in paths:
        src = open(f, encoding='utf-8').read()
        m = re.match(r'---\n(.*?)\n---\n(.*)', src, re.S)
        if not m:
            continue
        fm, body = m.group(1), m.group(2)
        if re.search(r'^description:', fm, re.M):
            continue
        ex = re.search(r'^excerpt:\s*"(.*)"\s*$', fm, re.M)
        text = strip_md(ex.group(1)) if ex else first_paragraphs(body)
        if not text:
            print('no text for', f, file=sys.stderr); continue
        desc = shorten(text)
        line = 'description: ' + json.dumps(desc, ensure_ascii=False)
        lines = fm.split('\n')
        idx = next((i for i, l in enumerate(lines) if l.startswith('image:')), len(lines))
        lines.insert(idx, line)
        open(f, 'w', encoding='utf-8').write('---\n' + '\n'.join(lines) + '\n---\n' + body)
        changed += 1
        print(f'{f}: {desc}')
    print(f'{changed} file(s) updated', file=sys.stderr)

if __name__ == '__main__':
    main(sys.argv[1:] or sorted(glob.glob('_posts/*.md')))
