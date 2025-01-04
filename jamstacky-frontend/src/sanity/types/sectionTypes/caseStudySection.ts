import { content } from "../pageType";

export interface CaseStudySection {
    _type: "caseStudySection";
    sectionHeading: string; 
    contentTitle: string;
    contentContext?: content[];
    caseStudyImage?: {
      asset: {
        url: string;
      };
    };
    title?: string; 
  }