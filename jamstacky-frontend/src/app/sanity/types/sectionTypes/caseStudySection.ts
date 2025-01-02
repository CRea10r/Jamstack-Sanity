import { content } from "../pageType";

export interface CaseStudySection {
    _type: "caseStudySection";
    content?: content[];
    caseStudyImage?: {
      asset: {
        url: string;
      };
    };
    title?: string; 
  }