# scripts/

Helper scripts (excluded from the Jekyll build). Run from the repo root.

## SEO / GEO data – run after adding or changing a post

```sh
pip install pyyaml pillow              # once
python3 scripts/seo_descriptions.py    # adds `description:` to posts that lack one
python3 scripts/build_seo_data.py      # rewrites _data/related.yml and _data/images.yml
git add _posts _data && git commit -m "Update SEO data"
```

* `seo_descriptions.py` – takes the post's own `excerpt` or first prose paragraph
  (markdown stripped, notes like "**How we checked:**" skipped) and cuts it to
  ~158 characters. It never overwrites an existing `description`. Better: write a
  1–2 sentence `description:` in the front matter yourself when creating a post.
* `build_seo_data.py` – related posts (shared tags/title words) and image sizes.

**Nothing breaks if you skip these steps** for a new post: the meta description
falls back to Jekyll's auto excerpt, "Related posts" falls back to the most recent
posts, and images without a size entry are simply rendered without width/height.

## Other

* `make_audio.py` – read-aloud audio generation with chapters (free edge-tts, local). **Daily command
  for every new post** (always with `--chapters`):

  ```sh
  /workspace/.venv-tts/bin/python scripts/make_audio.py --chapters _posts/<date>-<slug>.md
  ```

  It speaks the post section by section (one per `##` heading), writes `audio:`, `audio_voice`,
  `audio_duration` and `audio_chapters:` (`{t: seconds, title: "..."}`) to the front matter and the MP3 to
  `assets/audio/`. Sections under 60 s are merged into the previous chapter and at most 10 chapters are
  kept. Add `--voice Conrad` for German posts and `--force` to regenerate an existing MP3. Run one TTS job
  at a time. Chapters feed the post player (ticks + collapsible list) and the homepage now-playing bar.
  Metric units and °C only in titles, descriptions and bodies.
* `test/search.test.js` – tests for the whole-word search (`node scripts/test/search.test.js`).

## What is generated automatically by Jekyll (no script needed)

`/sitemap.xml` (jekyll-sitemap), `/feed.xml` (jekyll-feed), `/robots.txt`,
`/llms.txt`, meta/Open Graph tags (`_includes/seo.html`) and JSON-LD
(`_includes/schema.html`). Search-engine verification codes go into
`_config.yml` (`google_site_verification:` / `bing_site_verification:`).
