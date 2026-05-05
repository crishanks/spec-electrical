import { defineField, defineType } from "sanity";

export const contactCtaBlock = defineType({
  name: "contactCtaBlock",
  title: "Contact CTA",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "Ready to get started?",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      initialValue: "Call us today or request a free estimate online. We respond within 1 hour.",
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare: ({ title }) => ({ title: "Contact CTA", subtitle: title }),
  },
});
