import { defineField, defineType } from "sanity";

export const testimonialsBlock = defineType({
  name: "testimonialsBlock",
  title: "Testimonials",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string", initialValue: "Customer Reviews" }),
    defineField({ name: "heading", title: "Heading", type: "string", initialValue: "What Our Customers Say" }),
    defineField({ name: "description", title: "Description", type: "string" }),
  ],
  preview: {
    select: { title: "heading" },
    prepare: ({ title }) => ({ title: "Testimonials", subtitle: title }),
  },
});
