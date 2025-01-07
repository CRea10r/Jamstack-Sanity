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
          title,
          description,
          logo,
          button,
          heroImage,
          info,
        },
        _type == "caseStudySection" => {
          _type,
          sectionHeading,
          title,
          contentTitle,
          contentContext,
          caseStudyImage
        },
        _type == "technologySection" => {
          _type,
          sectionHeading,
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
          tableContent,
          content[] {
            contentName,
            contentContext,
            buttonText,
            dropDownList[] {
              dropDownItemName,
              dropDownItemNameSlug,
              dropDownItemContext,
              dropDownItemImage {
                asset->{
                  _id,
                  url
                }
              },
              dropDownItemFeatures,
              tableContentField[] {
                fieldName,
                fieldValue
              }
            }
          }
        },
        _type == "edgeCaseSection" => {
          _type,
          sectionHeading,
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
        }
      }
    }
  }
`);
