import { defineField, defineType } from "sanity";

export const trustBarBlock = defineType({
  name: "trustBarBlock",
  title: "Trust Bar",
  type: "object",
  fields: [
    defineField({
      name: "items",
      title: "Trust Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "icon", title: "Icon (lucide-react name)", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "detail", title: "Detail", type: "string" }),
          ],
          preview: { select: { title: "label", subtitle: "detail" } },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Trust Bar" }),
  },
});
