import { defineField, defineType } from "sanity";

export const whyUsBlock = defineType({
  name: "whyUsBlock",
  title: "Why Us",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string", initialValue: "Why Choose Us" }),
    defineField({ name: "heading", title: "Heading", type: "string", initialValue: "The Apex Difference" }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "icon", title: "Icon (lucide-react name)", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "title", subtitle: "description" } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare: ({ title }) => ({ title: "Why Us", subtitle: title }),
  },
});
