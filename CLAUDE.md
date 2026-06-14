# R-Type Tactics I • II Cosmos Guide Website

## Project Overview
Fan-made multilingual game guide site for R-Type Tactics I • II Cosmos (releases 2026-06-18).
**Live URL:** https://rtypetacticstools.online

## Tech Stack
- Pure static HTML + vanilla JS + inline CSS (no frameworks, no build step)
- 8-language i18n via `js/i18n.js` (en, zh-Hans, es, ar, pt, ja, fr, de)
- RTL support for Arabic
- All translatable text uses `data-i18n` attributes; JS-rendered content uses `window.__i18n.t(key)`
- Language switcher renders via `data-lang-switcher` attribute in header
- AdSense slots use `<div class="ad-slot">` placeholders (not yet wired to real ads)

## File Structure
```
F:\A_project\
├── index.html              # Homepage with countdown + content cards
├── beginner-guide.html     # 8-section new player guide
├── tips.html               # Advanced tips (fleet/hidden/cosmos/combat)
├── 404.html                # Custom error page
├── robots.txt              # SEO
├── sitemap.xml             # SEO with hreflang alternates
├── favicon.svg             # R logo on dark bg
├── js/
│   └── i18n.js             # All translations + lang detection + switcher
├── units/
│   └── index.html          # Filterable/sortable unit database (25 placeholder units)
├── walkthrough/
│   └── index.html          # 38 placeholder missions across 4 tabs
└── .gitignore              # Excludes .claude/, .DS_Store, Thumbs.db
```

## Deployment
- **Domain:** rtypetacticstools.online (purchased at Spaceship)
- **DNS:** Cloudflare (nameservers: dana.ns.cloudflare.com, elliott.ns.cloudflare.com)
- **Hosting:** Cloudflare Pages (auto-deploys from GitHub on push to main)
- **GitHub:** https://github.com/chenxiansheng0123/rtypetacticstools.online
- **Remote URL:** origin set with PAT token
- **CF Account ID:** 412c4c763e3375b8b7aee1ec00261b58
- **CF Zone ID:** e727f51939ea7a914f87cab32dc8dfa8

## What's Done
- [x] All 5 main pages created with full content (placeholder data for units/missions)
- [x] 8-language i18n with auto-detection + localStorage
- [x] RTL layout for Arabic
- [x] Responsive design (768px breakpoint)
- [x] SEO: canonical URLs, OG/Twitter tags, hreflang, robots.txt, sitemap.xml
- [x] Favicon and 404 page
- [x] Domain + DNS + Cloudflare Pages + GitHub auto-deploy

## TODO (Prioritized)
### Batch 2 - Important (do this week)
- [ ] Extract shared CSS from 5 files into `css/style.css` (currently ~150KB duplicated)
- [ ] Fix i18n flash (page shows English before JS translates) — add `style="visibility:hidden"` on `<html>` then show after i18n applies
- [ ] Wire up Google AdSense (replace all `<div class="ad-slot">` placeholders)
- [ ] Add analytics (Cloudflare Web Analytics is free, or GA4)

### Batch 3 - After Game Launch (Jun 18)
- [ ] Replace placeholder unit data with real stats from the game
- [ ] Replace placeholder mission names/descriptions with real ones
- [ ] Create individual unit detail pages (links currently 404)
- [ ] Create individual mission detail pages (links currently 404)

### Batch 4 - Nice to Have
- [ ] Actual site search (currently just redirects to /units/?q=)
- [ ] Unit comparison tool page
- [ ] Privacy policy page (linked in footer)
- [ ] Comment system (giscus or Disqus)
- [ ] Remove the unrelated Chinese .md file from repo root

## Key Notes
- Game is a niche product — total player base estimated 2-5k across all platforms
- Content is AI-translated; human review recommended before heavy traffic
- CSS variables in `:root` on each page control the entire color scheme
- The countdown timer auto-switches to "OUT NOW!" after Jun 18, 2026
- Unit names, mission titles, and platform names are kept in English (not translated)
