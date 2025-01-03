import { content } from "../pageType";

export interface EdgeCaseSection {
    _type: 'edgeCaseSection';
    sectionHeading: string;
    title: string;
    content: content[];
    edgeCaseImage: {
      asset: {
        _id: string;
        url: string;
      };
    };
    edgeCaseLogo: {
      asset: {
        _id: string;
        url: string;
      };
    };
    avtarImage: {
      asset: {
        _id: string;
        url: string;
      };
    };
    avtarName: string;
    buttonText: string;
  }
