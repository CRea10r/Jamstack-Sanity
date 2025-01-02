import { defineField, defineType } from "sanity";

export default defineType({
    name: "page",                       
    title: "Page",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 12,
            },
        }),
        defineField({
            name: "sectionsList",
            title: "Sections List",
            type: "array",
            of: [
              {
                name: "sectionReference",
                type: "reference",
                to: [{ type: "section" }],
              }
            ],
        }),
    ],
});