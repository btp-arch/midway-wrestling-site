import { defineCollection, z } from "astro:content";

const newsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.date(),
    author: z.string().optional(),
    cover: z.string().optional(),
    coverStyle: z.enum(["logo"]).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  news: newsCollection,
};
