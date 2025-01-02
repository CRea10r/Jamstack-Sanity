import { defineField, defineType } from "sanity";

export default defineType({
    name: "contactSection",
    title: "Contact-Section",
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
            name: "contactAvtar",
            title: "Contact Avtar",
            type: "image",
        }),
        defineField({
            name: "buttonText",
            title: "Button Text",
            type: "string",
        }),
        defineField({
            name: "contactText",
            title: "Contact Text",
            type: "string",
        }),
        defineField({
            name: "contactEmail",
            title: "Contact Email",
            type: "string",
        }),
    ],
});