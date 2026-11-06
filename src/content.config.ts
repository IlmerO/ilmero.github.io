import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Files starting with "_" are ignored, so _template.md never gets published.
const writing = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    short: z.string().optional(),
    summary: z.string(),
    org: z.string(),
    period: z.string(),
    stack: z.array(z.string()).default([]),
    order: z.number(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing, work };
