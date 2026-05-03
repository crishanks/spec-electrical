import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Service Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "tagline", title: "Short Tagline", type: "string" }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({ name: "icon", title: "Icon Name (lucide-react)", type: "string" }),
    defineField({ name: "featured", title: "Show on Homepage", type: "boolean", initialValue: true }),
    defineField({ name: "order", title: "Display Order", type: "number", initialValue: 99 }),
  ],
  orderings: [{ title: "Display Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "name", subtitle: "tagline" },
  },
});
