# swpartner-clone

A dependency-free static rebuild of **[swpartner.com](http://www.swpartner.com/)** — the site of
SWPartner, a Santiago-based firm providing back-office services (legal representation, accountancy
and tax compliance, HR/payroll, administrative support) to foreign companies operating in Chile.

The original runs on WordPress 4.3 with the CSSIgniter *Medi* theme. This repo reproduces the
design and all of the site's content as plain HTML, CSS and ~50 lines of vanilla JS — no
WordPress, no PHP, no jQuery, no build step.

## Running it

There is nothing to build. Open `index.html`, or serve the folder:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Deploying

Any static host works. For GitHub Pages: **Settings → Pages → Source: Deploy from a branch →
`main` / `/ (root)`**. `.nojekyll` is committed so Pages serves the files verbatim.

## Structure

```
index.html                        Home (hero slider, intro, services, latest post)
services/                         Services overview (sidebar + all five services)
services/legal-representation/    ┐
services/human-resources/         ├ the three pages linked from the "Services" nav dropdown
services/accountancy/             ┘
service/<slug>/                   the five individual service pages
team/                             Our Team + one page per person
blog/                             Blog index + the "who we are" post
news/                             News
contact/                          Contact details + office map
assets/css/style.css              all styling
assets/js/main.js                 mobile menu + hero slider
assets/img/                       images pulled from the original site
```

`services/` and `service/` both exist because the original site distinguishes WordPress *pages*
(the nav dropdown) from *service* custom-post-type entries (the sidebar list). Their copy overlaps
but is not identical, so both sets are kept.

## Design tokens

Lifted from the original theme's red colour scheme:

| Token | Value | Use |
| --- | --- | --- |
| `--accent` | `#e74239` | links, active nav, buttons, rules |
| `--accent-dark` | `#ce3b33` | button borders and hover |
| `--ink` | `#282828` | headings, top bar, footer |
| `--body` | `#626262` | body copy |
| `--nav` | `#656565` | nav links |
| `--wash` | `#f7f6f6` | alternating section background |
| font | Oxygen 400/700 | via Google Fonts |
| grid | 1280px max, 15px gutters | `.row` |

## Differences from the live site

Deliberate, and easy to undo:

1. **Home page** — the live home page is empty below the slider apart from a single "posts"
   widget. This version adds an intro, a services grid and the latest post, using only copy that
   already exists elsewhere on the site.
2. **Third slide's button** pointed at `cssigniter.com/preview/medi/sample-page` — a leftover from
   the theme demo. It now points at `services/`.
3. **Duplicate slide removed** — the original slider repeated slide 1 as slide 4.
4. **"Administrative Suport" → "Administrative Support"** (typo in the original).
5. **`services/` shows all five services**; the original shows only the first.
6. **Map** — the original used the Google Maps JS API (needs a key). Replaced with an
   OpenStreetMap embed at the same coordinates (-33.441790, -70.647005).
7. **WordPress scaffolding dropped** — comment forms, RSS/meta widgets, `wp-login` links,
   `xmlrpc.php`, and the Google Analytics tag (`UA-70029907-1`).
8. **Email addresses** were Cloudflare-obfuscated on the original; they are plain `mailto:` links
   here.

## Known asset limitations

The originals are the largest versions the source server has:

- `assets/img/piedras.jpg` is only **240×240** but is used as a full-width hero slide. It is
  visibly soft. A high-resolution replacement (ideally 1920×550) would fix it.
- `assets/img/accounting-tax.jpg` is only **320×214**.
- There are **no team photographs** on the original site, so the team pages are text-only.

## Content

All copy and imagery belong to SWPartner. This repository is a rebuild of their site.
