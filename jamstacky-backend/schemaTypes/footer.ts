import { defineField, defineType } from "sanity";

export default defineType({
    name: "footer",
    title: "Footer",
    type: "document",
    fields: [
        defineField({
            name: "contactTitle",
            title: "Contact Title",
            type: "string",
        }),
        defineField({
            name: "contactDescription",
            title: "Contact Description",
            type: "blockContent",
        }),
        defineField({
            name: "contactAvatar",
            title: "Contact Avatar",
            type: "image",
        }),
        defineField({
            name: "contactButtonText",
            title: "Contact Button Text",
            type: "string",
        }),
        defineField({
            name: "contactText",
            title: "Contact Text",
            type: "string",
        }),
        defineField({
            name: "contactEmail",
            title: "Contact Email",
            type: "string",
        }),
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
        })    
    ],
});
