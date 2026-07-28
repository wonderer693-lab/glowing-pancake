import { defineCollection, z } from "astro:content";

const guide = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().min(40).max(400),
    hub: z.enum(["basics", "buying", "cost", "install", "faq"]),
    publishedAt: z.coerce.date(),
    modifiedAt: z.coerce.date().optional(),
    faqs: z
      .array(z.object({ q: z.string(), a: z.string() }))
      .optional(),
    schemaType: z.enum(["Article", "HowTo", "FAQPage", "Product", "Review"]).default("Article"),
    brand: z.string().optional(),
    model: z.string().optional(),
    region: z.string().optional(),
    priceFrom: z.number().optional(),
    noindex: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { guide };