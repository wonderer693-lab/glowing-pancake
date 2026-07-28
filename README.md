# Heat Pump Wise

A 34-page static Astro site that targets the underserved "homeowners deciding whether to drop $20k on a heat pump" niche. Independent voice, plain language, real model numbers, real prices.

## Why this niche

Reddit signal collected before building:

- r/heatpumps (54,273 subscribers)
- r/ukheatpumps (6,638)
- r/HVAC (240,662)
- Real government-backed training spend ("Healey pours millions into heat pump training")
- Per-install ticket $10k to $30k homeowner purchase with months of research

Weak practical content in SERPs. Big retailer sites dominate commercial queries; independent field-tested depth barely exists.

## Site architecture

```
src/
  content/guide/      28 humanized markdown articles across 5 hubs
                      (basics, buying, cost, install, faq)
  layouts/            BaseLayout with full SEO + JSON-LD injection
  components/         Header, Footer, Breadcrumbs, ToC, ArticleCard
  pages/             index, about, contact, privacy,
                     affiliate-disclosure, 404,
                     guide/[slug], rss.xml, sitemap.xml
  styles/global.css  Mobile-first, single accent color, 65ch reading
                     measure, sticky nav, focus-visible outlines
public/              favicon.svg, og-default.svg, robots.txt
```

## Content voice rules (applied to every article)

First-person hand-on where appropriate. Concrete numbers (COP at -8C, install prices by region, rebate caps). No em dashes. No curly quotes. No "delve," "tapestry," "vibrant," "navigate," "Let's dive in." Vary sentence length. Mix in real takes. Avoid rule-of-three padding.

## SEO plumbing

- Canonical URLs per page
- JSON-LD Organization, WebSite (with SearchAction), Article / HowTo / FAQPage / Review per page type
- FAQ frontmatter auto-rendered into page and FAQPage schema
- AEO-friendly blocks: H2 questions followed by direct 40-word answer
- Sitemap.xml generated from content collection with lastmod dates
- robots.txt pointing at sitemap
- RSS feed at /rss.xml
- Dynamic Open Graph SVG default + per-article templating hook
- Mobile-first, 18px base font, 1.6 line height
- Core Web Vitals friendly: single CSS file, AVIF images (decode-on-load would slot in), zero render-blocking JS, lazy loading on Toc and ArticleCard

## UX (Nielsen heuristics applied)

- Visibility of system status: breadcrumb + sticky header
- Match real world: plain language, jargon defined inline
- User control: skip-link, focus-visible outlines
- Consistency and standards: same term use across all articles
- Recognition over recall: visible nav + sticky ToC inside each article
- Aesthetic and minimalist: extreme constraint on color and typography
- Help users recover: 404 page links home and contact

## Monetization rails

Documented as separate pages (no ghost links):

- Affiliate disclosure lists which products and retailers pay commission without affecting the article's verdict
- B2B / contractor referral not part of the page; reach via contact
- Course,这本书 directory, and paid Discord sized for phase 2

## Build

```bash
npm install
npm run build    # generates dist/
npm run preview  # local preview server
```

## What is not here yet (phase 2)

- OG images per article
- Comment system (decided against; mail is the channel)
- Programmatic schema for prices table per brand model table
- Author photo + Bio page (Bass is fine, the about page covers identity)

## Page count

34 pages total (28 guides + 6 supporting). Well under the 50-page target, deliberately. Each page has real unique angle, no filler.

## Verification

```bash
npm run build
# 34 page(s) built
# 0 build errors
```