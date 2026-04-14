import { defineCollection, z } from 'astro:content';

const exerciseSchema = z.object({
  title: z.string(),
  description: z.string(),
});

const course = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    section: z.string(),
    order: z.number(),
    description: z.string().optional(),
    duration: z.number().optional(),
    objectives: z.array(z.string()).optional(),
    exercises: z.array(exerciseSchema).optional(),
    checklist: z.array(z.string()).optional(),
    commonErrors: z.array(z.string()).optional(),
  }),
});

export const collections = { course };
