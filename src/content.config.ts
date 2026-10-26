import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		draft: z.boolean().optional().default(false),
		tags: z.array(z.string()).optional().default([]),
	}),
});

const portfolio = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/portfolio' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		year: z.union([z.number(), z.string()]),
		link: z.string().url().optional(),
		github: z.string().url().optional(),
		stack: z.array(z.string()).optional().default([]),
		featured: z.boolean().optional().default(false),
	}),
});

const shop = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/shop' }),
	schema: z.object({
		title: z.string(),
		category: z.string().default('Umum'),
		description: z.string(),
		price: z.string().optional(),
		shopeeUrl: z.string().url(),
		featured: z.boolean().optional().default(false),
	}),
});

const tutorials = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/tutorials' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		youtubeUrl: z.string().url(),
		duration: z.string().optional(),
		category: z.string().default('Teknologi'),
		tags: z.array(z.string()).optional().default([]),
		pubDate: z.coerce.date().optional(),
		featured: z.boolean().optional().default(false),
	}),
});

export const collections = { blog, portfolio, shop, tutorials };
