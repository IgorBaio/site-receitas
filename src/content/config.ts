import { defineCollection, z } from 'astro:content';

const receitas = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    data: z.date(),
    categoria: z.enum(['entrada', 'prato-principal', 'massas', 'sobremesa', 'padaria', 'bebida']),
    dificuldade: z.enum(['fácil', 'médio', 'difícil']),
    tempoPreparo: z.number(), // minutos
    porcoes: z.number(),
    imagemCapa: z.string(),
    tags: z.array(z.string()).default([]),
    ingredientes: z.array(z.string()),
    destaque: z.boolean().default(false),
  }),
});

export const collections = { receitas };
