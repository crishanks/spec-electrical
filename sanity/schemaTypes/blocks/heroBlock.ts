import { defineField, defineType } from "sanity";

export const heroBlock = defineType({
  name: "heroBlock",
  title: "Hero",
  type: "object",
  fields: [
    defineField({
      name: "badgeText",
      title: "Badge Text",
      type: "string",
      description: 'Small badge above the headline. E.g. "Licensed & Insured · 24/7 Emergency Service"',
    }),
    defineField({ name: "headline", title: "Headline", type: "string" }),
    defineField({
      name: "accentWord",
      title: "Accent Word",
      type: "string",
      description: "Word in the headline that appears in amber. Must match exactly.",
    }),
    defineField({ name: "subheading", title: "Subheading", type: "text", rows: 3 }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: "headline" },
    prepare: ({ title }) => ({ title: "Hero", subtitle: title }),
  },
});
