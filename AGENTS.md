# Heat Pump Wise — Agent notes

## Build commands
```bash
npm run build      # static output to dist/
npm run dev        # dev server on localhost:4321
npm run preview    # serve built dist/ locally
```

## Site config
- `src/consts.ts` — SITE.url must be changed to real domain before deploy
- `astro.config.mjs` — site URL also needs updating
- `public/robots.txt` — references the site URL

## Content conventions
- 28 articles in `src/content/guide/` organized in 5 hubs
- Frontmatter: title, description (40-400 chars), hub, publishedAt, schemaType, image, faqs, brand/model/rating/pros/cons/outbound
- 3 Review schemas: mitsubishi, daikin, lg (each has rating, pros, cons, outbound)
- Per-article image field defaults to `/og-default.svg`

## Schema support
- Every page: Organization + WebSite (SearchAction) + Person (author)
- Articles: Article schema with headline, description, image, articleSection, mainEntityOfPage, isPartOf, author, publisher
- Reviews: Review schema with itemReviewed (Product), reviewRating, positiveNotes, negativeNotes, outbound sources
- Static pages: BreadcrumbList schema on every article
- FAQ pages: FAQPage schema auto from frontmatter

## SEO plumbing
- Sitemap at /sitemap.xml (image:image entries for guide pages)
- RSS at /rss.xml
- robots.txt at /robots.txt
- OG + Twitter tags in BaseLayout
- Noindex toggle per article via frontmatter

## Key files
| File | Purpose |
|---|---|
| src/content/config.ts | Zod schema for articles |
| src/content/guide/*.md | 28 articles |
| src/layouts/BaseLayout.astro | HTML shell, all schema injected |
| src/pages/guide/[slug].astro | Dynamic article page with schema builder |
| src/components/Header.astro | Sticky nav with active-state highlighting |
| src/components/Breadcrumbs.astro | Visible breadcrumb |
| src/components/Toc.astro | Sticky table of contents |
| src/components/ArticleCard.astro | Card used on homepage + related |
| src/styles/global.css | Full design system |

## Phase 2 candidates
- Per-article OG image generation (satori + @resvg/resvg-js)
- Hub index pages (currently homepage filters by hub)
- Image gallery for installs/equipment
- Author photo + expanded bio
- Comment system (decided against; mail preferred)
