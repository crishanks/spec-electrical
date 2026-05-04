import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "companyName", title: "Company Name", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "phone", title: "Phone Number", type: "string" }),
    defineField({ name: "email", title: "Email Address", type: "string" }),
    defineField({ name: "address", title: "Street Address", type: "string" }),
    defineField({ name: "city", title: "City, State, ZIP", type: "string" }),
    defineField({
      name: "serviceAreas",
      title: "Service Areas",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "licenseNumber", title: "License Number", type: "string" }),
    defineField({ name: "founded", title: "Year Founded", type: "string" }),
    defineField({
      name: "heroBadgeText",
      title: "Hero Badge Text",
      type: "string",
      description: 'Small badge above the headline. E.g. "Licensed & Insured · 24/7 Emergency Service"',
    }),
    defineField({
      name: "heroHeadline",
      title: "Hero Headline",
      type: "string",
      description: "Main heading on the homepage.",
    }),
    defineField({
      name: "heroAccentWord",
      title: "Hero Accent Word",
      type: "string",
      description: "The word in the headline that appears in amber/gold. Must match a word in the headline exactly.",
    }),
    defineField({
      name: "heroSubheading",
      title: "Hero Subheading",
      type: "text",
      rows: 3,
      description: "Paragraph of text below the headline.",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Background Image",
      type: "image",
      options: { hotspot: true },
      description: "Optional background photo behind the hero. A dark overlay is applied automatically.",
    }),
    defineField({ name: "seoTitle", title: "Default SEO Title", type: "string" }),
    defineField({
      name: "seoDescription",
      title: "Default SEO Description",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    select: { title: "companyName", subtitle: "tagline" },
  },
});
