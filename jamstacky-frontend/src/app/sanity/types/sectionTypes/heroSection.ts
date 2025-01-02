import { content } from "../pageType";

export interface HeroSection {
    _type: "heroSection";
    content?: content[];
    button?: string[];
    heroImage?: {
      asset: {
        url: string;
      };
    };
    info?: string;
}