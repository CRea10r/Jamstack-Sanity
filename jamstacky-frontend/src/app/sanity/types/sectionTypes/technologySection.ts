export interface TechnologySection {
    title?: string; 
    _type: "technologySection";
    sectionHeading: string;
    fieldContent: {
      fieldName: string;
      technologies: {
        fieldContentType: string;
        image: {
          asset: {
            url: string;
          };
        }[]; 
      }[];
    };
  }