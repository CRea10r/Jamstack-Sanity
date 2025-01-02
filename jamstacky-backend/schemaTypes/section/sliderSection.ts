import { defineType, defineField } from "sanity";

export default defineType({
    name: "sliderSection",
    title: "Slider-Section",
    type: "object",
    fields: [
        defineField({
            name: "sliderImage",
            title: "Slider Image",
            type: "array",
            of: [{ type: "image" }],
        }),
    ],
});