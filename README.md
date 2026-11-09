# letangphuquy.github.io

Personal homepage, built by GitHub Pages (Jekyll) on every push to `main`. No build step needed.

| What | File |
|---|---|
| Homepage (intro, links, Past) | `index.md` |
| Blog post | `_posts/YYYY-MM-DD-slug.md` → served at `/blog/slug` |
| Blog index (auto-lists posts) | `blog/index.md` |
| Post template / unpublished drafts | `_drafts/` |
| Style | `assets/style.css` |
| Private notes (local only, git-ignored) | `_private/` |

Static sub-sites (`lectures/`, `23bwd_vku/`) are served as-is.

New post front matter:

```yaml
---
title: My post
description: One-line summary for the blog index.
math: true   # optional, enables KaTeX ($...$, $$...$$)
---
```

Local preview (optional): `bundle install && bundle exec jekyll serve --drafts`, then open http://localhost:4000.
