export interface FooterData {
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