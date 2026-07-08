import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const seoSchema = z.object({
  description: z.string().default(''),
  canonical: z.string().optional(),
  featured_image: z.string().optional(),
  image_alt: z.string().optional(),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    seo: seoSchema,
    content_blocks: z
      .array(
        z.object({
          component: z.string(),
        }).passthrough()
      )
      .default([]),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string().default(''),
    author: z.string().default('Lumière Skin'),
    category: z.string().default('Routines'),
    hero_image: z.string().optional(),
    image_alt: z.string().optional(),
    seo: seoSchema,
  }),
});

export const collections = { pages, posts };
