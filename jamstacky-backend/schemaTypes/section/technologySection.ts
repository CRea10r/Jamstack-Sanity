import { defineField, defineType } from "sanity";

export default defineType({
    name: 'technologySection',
    title: 'Technology-Section',
    type: 'object',
    fields: [
        defineField({
            name: 'sectionHeading',
            title: 'Section Heading',
            type: 'string',
        }),
        defineField({
            name: 'fieldContent',
            title: 'Field Content',
            type: 'object',
            fields: [
                defineField({
                    name: 'fieldName',
                    title: 'Field Name',
                    type: 'string',
                }),
                defineField({
                   name: 'buttonText',
                   title: 'Button Text', 
                   type: 'string',
                }),
                defineField({
                    name: 'technologies',
                    type: 'array',
                    title: 'Technologies',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                defineField({
                                    name: 'fieldContentType',
                                    title: 'Field ContentType',
                                    type: 'string',
                                }),
                                defineField({
                                    name: 'image',
                                    title: 'Image',
                                    type: 'array',
                                    of: [{ type: 'image' }],
                                }),
                            ],
                        },
                    ],
                }),
            ],
        }),
    ],
})