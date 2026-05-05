import { defineField, defineType } from "sanity";

export const servicesGridBlock = defineType({
  name: "servicesGridBlock",
  title: "Services Grid",
  type: "object",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow Label",
      type: "string",
      initialValue: "What We Do",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "Electrical Services for Every Need",
    }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "ctaLabel", title: "CTA Button Label", type: "string", initialValue: "View All Services" }),
    defineField({ name: "ctaHref", title: "CTA Button Link", type: "string", initialValue: "/services" }),
  ],
  preview: {
    select: { title: "heading" },
    prepare: ({ title }) => ({ title: "Services Grid", subtitle: title }),
  },
});
