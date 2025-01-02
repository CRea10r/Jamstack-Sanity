import { defineQuery } from "next-sanity";

export const PAGE_QUERY = defineQuery(`
  *[_type == "page" && slug.current == $slug][0]{
    title,
    slug,
    sectionsList[]->{
      type,
      title,
      sectionContent[] {
        ...,
        _type == "heroSection" => {
          _type,
          content,
          button,
          heroImage,
          info,
        },
        _type == "caseStudySection" => {
          _type,
          title,
          content,
          caseStudyImage
        },
        _type == "technologySection" => {
          _type,
          fieldContent {
            fieldName,
            technologies[] {
              fieldContentType,
              image[] {
                asset->{
                  _id,
                  url
                }
              }
            }
          }
        },
        _type == "compareSection" => {
          _type,
          title,
          description,
          content[] {
            contentName,
            contentContext,
            dropDownList,
            buttonText
          }
        },
        _type == "edgeCaseSection" => {
          _type,
          title,
          content,
          edgeCaseImage,
          edgeCaseLogo,
          avtarImage,
          edgeCaseDescription
        },
        _type == "testimonialSection" => {
          _type,
          title,
          description,
          content[] {
            contentContext,
            authorName,
            authorImage {
              asset->{
                _id,
                url
              }
            },
            authorAddress
          }
        },
        _type == "blogSection" => {
          _type,
          sectionHeading,
          title,
          content[] {
            contentImage,
            contentButtonText,
            contentName,
            contentContext
          },
          buttonText
        },
        _type == "sliderSection" => {
          _type,
          sliderImage[] {
            asset->{
              _id,
              url
            }
          }
        },
        _type == "contactSection" => {
          _type,
          title,
          description,
          contactAvtar {
            asset->{
              _id,
              url
            }
          },
          buttonText,
          contactText,
          contactEmail
        }
      }
    }
  }
`);
