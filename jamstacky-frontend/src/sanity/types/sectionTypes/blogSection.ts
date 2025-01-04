export interface BlogSection {
    _type: "blogSection";
    sectionHeading: string; 
    title: string;
    content: BlogSectionContent[];
    buttonText: string
  }

export interface BlogSectionContent {
    contentImage: {
      asset: {
        url: string;
      };
    };
    contentButtonText: string[];
    contentName: string;
    contentContext: string;
  }