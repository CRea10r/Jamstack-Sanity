import { content } from "./pageType";

export interface FooterData {
  contactTitle: string;
  contactDescription: content[];
  contactAvatar: {
    asset: {
      _id: string;
      url: string;
    };
  };
  contactButtonText: string;
  contactText: string;
  contactEmail: string;
  footerLogo: {
    asset: {
      _id: string;
      url: string;
    };
  };
  footerItems: FooterItem[];
  footerEmail: string;
  footerCopyright: string;
}

export interface FooterItem {
  label: string;
}