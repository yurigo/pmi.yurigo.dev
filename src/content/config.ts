import { defineCollection, z } from 'astro:content';

const course = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    section: z.string(),
    order: z.number(),
    description: z.string().optional(),
  }),
});

export const collections = { course };
