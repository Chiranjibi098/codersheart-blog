import { defineCollection, z } from 'astro:content';

const authorSchema = z.object({
  name: z.string(),
  avatar: z.string(),
  bio: z.string(),
});

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    categories: z.array(z.string()).default(['others']),
    keywords: z.array(z.string()).default([]),
    tags: z.array(z.string()).default(['others']),
    authors: z.array(authorSchema).default([{ name: 'gndx', avatar: '/default-avatar.png', bio: '' }]),
  }),
});

export const collections = { blog };
