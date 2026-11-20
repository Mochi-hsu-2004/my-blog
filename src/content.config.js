import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Blog Posts
const posts = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/posts",
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string(),
    coverImage: z.string().optional(),
  }),
});

// Website Pages
const pages = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/pages",
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroTitle: z.string().optional(),
    heroDescription: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
    body: z.string().optional(),
  }),
});

export const collections = {
  posts,
  pages,
};