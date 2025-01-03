import { defineType, defineField } from "sanity";

export default defineType({
  name: "section",
  title: "Section",
  type: "document",
  fields: [
    defineField({
      name: "type",
      title: "Section Type",
      type: "string",
      options: {
        list: [
          { title: "Hero Section", value: "heroSection" },
          { title: "Case Study Section", value: "caseStudySection" },
          { title: "Technology Section", value: "technologySection" },
          { title: "Compare Section", value: "compareSection" },
          { title: "Edge Case Section", value: "edgeCaseSection" },
          { title: "Testimonial Section", value: "testimonialSection" },
          { title: "Blog Section", value: "blogSection" },
          { title: "Slider Section", value: "sliderSection" },
          { title: "Contact Section", value: "contactSection" },
          { title: "Pricing Section", value: "pricingSection" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 12,
      },
    }),
    defineField({
      name: "sectionContent",
      title: "Section Content",
      type: "array",
      of: [
        { type: "heroSection" },
        { type: "caseStudySection" },
        { type: "technologySection" },
        { type: "compareSection" },
        { type: "edgeCaseSection" },
        { type: "testimonialSection" },
        { type: "blogSection" },
        { type: "sliderSection" },
        { type: "contactSection" },
        { type: "pricingSection" },
      ],
    }),
  ],
});
