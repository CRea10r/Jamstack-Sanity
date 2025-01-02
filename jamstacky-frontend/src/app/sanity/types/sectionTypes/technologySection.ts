export interface TechnologySection {
    title?: string; 
    _type: "technologySection";
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