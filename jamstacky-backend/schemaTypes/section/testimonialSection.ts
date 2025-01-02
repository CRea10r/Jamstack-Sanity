import { defineField, defineType } from "sanity";

export default defineType({
    name:'testimonialSection',
    title:'Testimonial-Section',
    type:'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'contentContext',
                            title: 'Content Context',
                            type: 'blockContent',
                        }),
                        defineField({
                            name: 'authorName',
                            title: 'Author Name',
                            type: 'string',
                        }),
                        defineField({
                            name: 'authorImage',    
                            title: 'Author Image',
                            type: 'image',
                        }),
                        defineField({
                            name: 'authorAddress',
                            title: 'Author Address',
                            type: 'string',
                        }),
                    ],
                },
            ],
        }),
    ],
})