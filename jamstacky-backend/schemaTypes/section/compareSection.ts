import { defineField, defineType } from "sanity";

export default defineType({
    name: "compareSection",
    title: "Compare-Section",   
    type: "object",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "description",
            title: "Description",
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
                            name: "contentName",
                            title: "Content Name",
                            type: "string",
                        }),
                        defineField({
                            name: "contentContext",
                            title: "Content Context",
                            type: "string",
                        }),
                        defineField({
                            name: "dropDownList",
                            title: "Drop Down List",
                            type: "array",
                            of: [{ type: "string" }]
                        }),
                        defineField({
                            name: "buttonText",
                            title: "Button Text",
                            type: "string",
                        })
                    ],
                }
            ]
        })
    ]
})