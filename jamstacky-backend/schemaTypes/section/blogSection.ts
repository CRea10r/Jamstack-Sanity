import { defineType, defineField } from "sanity";

export default defineType({
    name: "blogSection",
    title: "Blog-Section",
    type: "object",
    fields: [
        defineField({
            name: "sectionHeading",
            title: "Section Heading",
            type: "string",
        }),
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "content",
            title: "Content",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({
                            name: "contentImage",
                            title: "Content Image",
                            type: "image",
                        }),
                        defineField({
                            name: "contentButtonText",
                            title: "Content Button Text",
                            type: "array",
                            of: [{ type: "string" }],
                        }),
                        defineField({
                            name: "contentName",
                            title: "Content Name",
                            type: "string",
                        }),
                        defineField({
                            name: "contentContext",
                            title: "Content Context",
                            type: "string",
                        }),
                    ],
                },
            ]
        }),
        defineField({
            name: "buttonText",
            title: "Button Text",
            type: "string",
        }),
    ],
});