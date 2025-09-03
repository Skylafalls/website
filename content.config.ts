import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "blogs/**/*.md",
      schema: z.object({
        date: z.string(),
        title: z.string(),
        description: z.string(),
      }),
    }),
    changelogs: defineCollection({
      type: "page",
      source: "changelog/**/*.md",
      schema: z.strictObject({
        date: z.string(),
        title: z.string(),
        version: z.string().regex(/^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$/mu),
      }),
    }),
  },
})