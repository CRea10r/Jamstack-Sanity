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
            name: "tableContent",
            title: "Table Content",
            type: "array",
            of: [{ type: "string"}]
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
                            of: [
                                {
                                    name: "dropDownItem",
                                    title: "Drop Down Item",
                                    type: "object",
                                    fields: [
                                        defineField({
                                            name: "dropDownItemName",
                                            title: "Drop Down Item Name",
                                            type: "string",
                                        }),
                                        defineField({
                                            name: "dropDownItemNameSlug",
                                            title: "Drop Down Item Name Slug",
                                            type: "slug",
                                            options: {
                                                source: "dropDownItemName",
                                                maxLength: 12,
                                            },
                                        }),
                                        defineField({
                                            name: "dropDownItemContext",
                                            title: "Drop Down Item Context",
                                            type: "blockContent",
                                        }),
                                        defineField({
                                            name: "dropDownItemImage",
                                            title: "Drop Down Item Image",
                                            type: "image",
                                        }),
                                        defineField({
                                            name: "dropDownItemFeatures",
                                            title: "Drop Down Item Feartures",
                                            type: "blockContent",
                                        }),
                                        defineField({
                                            name: "tableContentField",
                                            title: "Table Content Field",
                                            type: "array",
                                            of: [
                                                {
                                                    type: "object",
                                                    fields: [
                                                        defineField({
                                                            name: "fieldName",
                                                            title: "Field Name",
                                                            type: "string",
                                                        }),
                                                        defineField({
                                                            name: "fieldValue",
                                                            title: "Field Value",
                                                            type: "string",
                                                        }),
                                                    ],
                                                },
                                            ], 
                                        })
                                    ]
                                },
                            ]
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