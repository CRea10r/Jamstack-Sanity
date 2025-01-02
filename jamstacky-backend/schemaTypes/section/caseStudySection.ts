import { defineField,defineType } from "sanity";

export default defineType({
    name:'caseStudySection',
    title:'CaseStudy-Section',
    type:'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'blockContent',
        }),
        defineField({
            name: 'caseStudyImage',
            title: 'Case Study Image',
            type: 'image',
            validation: (Rule) => Rule.required(),
        }),
    ]
})