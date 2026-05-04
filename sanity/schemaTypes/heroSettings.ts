import { defineField, defineType } from "sanity";

export const heroSettings = defineType({
  name: "heroSettings",
  title: "Hero",
  type: "document",
  fields: [
    defineField({
      name: "badgeText",
      title: "Badge Text",
      type: "string",
      description: 'Small badge above the headline. E.g. "Licensed & Insured · 24/7 Emergency Service"',
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      description: "Main heading on the homepage.",
    }),
    defineField({
      name: "accentWord",
      title: "Accent Word",
      type: "string",
      description: "The word in the headline that appears in amber/gold. Must match a word in the headline exactly.",
    }),
    defineField({
      name: "subheading",
      title: "Subheading",
      type: "text",
      rows: 3,
      description: "Paragraph of text below the headline.",
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
      description: "Optional background photo. A dark overlay is applied automatically.",
    }),
  ],
  preview: {
    select: { title: "headline", subtitle: "subheading" },
  },
});
