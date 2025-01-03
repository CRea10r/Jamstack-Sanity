import { defineField,defineType } from "sanity";

export default defineType({
    name:'heroSection',
    title:'Hero-Section',
    type:'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'button',
            title: 'Button',
            type: 'array',
            of:[{type:'string'}]
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'info',
            title: 'Info',
            type: 'string',
        }),
    ]
})