import { defineField, defineType } from "sanity";

export default defineType({
    name: "footer",
    title: "Footer",
    type: "document",
    fields: [
        defineField({
            name: "footerLogo",
            title: "Footer Logo",
            type: "image",
        }),
        defineField({
            name: "footerItems",
            title: "Footer Items",
            type: "array",
            of: [
                defineField({
                    name: "footerItem",
                    title: "Footer Item",
                    type: "object",
                    fields: [
                        defineField({
                            name: "label",
                            title: "Label",
                            type: "string",
                        }),
                    ],
                }),
            ],
        }),
        defineField({
            name: "footerEmail",
            title: "Footer Email",
            type: "string",
        }),
        defineField({
            name: "footerCopyright",
            title: "Footer Copyright",
            type: "string",
        }),
    ],
});