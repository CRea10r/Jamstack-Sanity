import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    defineField({
      name: 'logoName',
      title: 'Logo Name',
      type: 'string',
    }),
    defineField({
      name: 'logoImage',
      title: 'Logo Image',
      type: 'image',
    }),
    defineField({
      name: 'navigationItems',
      title: 'Navigation Items',
      type: 'array',
      of: [
        defineField({
          name: 'navItem',
          title: 'Navigation Item',
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
})
