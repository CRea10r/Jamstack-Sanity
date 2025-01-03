import { defineField,defineType } from "sanity";

export default defineType({
    name:'caseStudySection',
    title:'CaseStudy-Section',
    type:'object',
    fields: [
        defineField({
            name: 'sectionHeading',
            title: 'Section Heading',
            type: 'string',
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'contentTitle',
            title: 'Content Title',
            type: 'string',
        }),
        defineField({
            name: 'contentContext',
            title: 'Content Context',
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