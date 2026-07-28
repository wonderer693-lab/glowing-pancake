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
    image: z.string().default("/og-default.svg"),
    imageAlt: z.string().default("Heat Pump Wise article cover"),
    brand: z.string().optional(),
    model: z.string().optional(),
    region: z.string().optional(),
    priceFrom: z.number().optional(),
    rating: z.number().min(0).max(5).optional(),
    pros: z.array(z.string()).optional(),
    cons: z.array(z.string()).optional(),
    outbound: z.array(z.object({ label: z.string(), url: z.string() })).optional(),
    noindex: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { guide };