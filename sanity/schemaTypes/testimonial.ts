import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "customerName",
      title: "Customer Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "location", title: "City / Neighborhood", type: "string" }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Rating (1–5)",
      type: "number",
      initialValue: 5,
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({ name: "featured", title: "Show on Homepage", type: "boolean", initialValue: true }),
  ],
  preview: {
    select: { title: "customerName", subtitle: "quote" },
  },
});
