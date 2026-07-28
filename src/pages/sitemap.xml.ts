import { getCollection } from "astro:content";
import { SITE } from "../consts";

export async function GET() {
  const posts = await getCollection("guide", ({ data }) => !data.draft);
  const staticPages = [
    "/",
    "/about/",
    "/contact/",
    "/privacy/",
    "/affiliate-disclosure/",
  ];

  const all = [
    ...staticPages.map((p) => ({ url: p, lastmod: new Date().toISOString(), priority: 0.7 })),
    ...posts.map((p) => ({
      url: `/guide/${p.slug}/`,
      lastmod: (p.data.modifiedAt ?? p.data.publishedAt).toISOString(),
      priority: 0.8,
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all.map((u) => `  <url>
    <loc>${SITE.url}${u.url}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${u.priority.toFixed(1)}</priority>
  </url>`).join("\n")}
</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}