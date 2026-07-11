import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const contentBlock = z.object({
  _name: z.string(),
  _id: z.string().optional(),
});

const seoSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  canonical_url: z.string().optional(),
  featured_image: z.string().optional(),
  open_graph_type: z
    .enum(["website", "article", "product"])
    .default("website"),
  no_index: z.boolean().default(false),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),

    slug: z.string().optional(),

    excerpt: z.string().optional(),

    published: z.boolean().default(true),

    content_blocks: z.array(z.any()).default([]),

    seo: seoSchema.optional(),
  })
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    author: z.string().optional(),
    date: z.coerce.date(),
    image: z.string().optional(),
    image_alt: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    draft: z.boolean().optional().default(false),
    seo: seoSchema.optional(),
  }),
});

export const collections = { pages, posts };
