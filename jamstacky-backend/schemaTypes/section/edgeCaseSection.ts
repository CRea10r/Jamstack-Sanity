import { defineField, defineType } from "sanity";

export default defineType({
    name: "edgeCaseSection",
    title: "Edge Case-Section",
    type: "object",
    fields: [
        defineField({
            name: "sectionHeading",
            title: "Section Heading",
            type: "string",
        }),
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "content",
            title: "Content",
            type: "blockContent",
        }),
        defineField({
            name: "edgeCaseImage",
            title: "Edge Case Image",
            type: "image",
        }), 
        defineField({
            name: "edgeCaseLogo",
            title: "Edge Case Logo",
            type: "image",
        }),
        defineField({
            name:"avtarImage",
            title:"Avtar Image",
            type:"image"
        }),
        defineField({
            name:"avtarName",
            title:"Avtar Name",
            type:"string"
        }),
        defineField({
            name: "buttonText",
            title: "Button Text",
            type: "string",
        })
    ],
    
});