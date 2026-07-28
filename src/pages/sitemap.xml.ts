import { getCollection } from "astro:content";
import { SITE } from "../consts";

export async function GET() {
  const posts = await getCollection("guide", ({ data }) => !data.draft);
  const staticPages = [
    { url: "/", priority: 1.0 },
    { url: "/about/", priority: 0.6 },
    { url: "/contact/", priority: 0.3 },
    { url: "/privacy/", priority: 0.2 },
    { url: "/affiliate-disclosure/", priority: 0.4 },
  ];

  const urlset = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${staticPages.map((p) => `  <url>
    <loc>${SITE.url}${p.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${p.priority.toFixed(1)}</priority>
  </url>`).join("\n")}
${posts.map((p) => {
  const img = p.data.image ? `${SITE.url}${p.data.image}` : null;
  const lastmod = (p.data.modifiedAt ?? p.data.publishedAt).toISOString();
  return `  <url>
    <loc>${SITE.url}/guide/${p.slug}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>${img ? `
    <image:image>
      <image:loc>${img}</image:loc>
    </image:image>` : ""}
  </url>`;
}).join("\n")}
</urlset>`;

  return new Response(urlset, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}