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
