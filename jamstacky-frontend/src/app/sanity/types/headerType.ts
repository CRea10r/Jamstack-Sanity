interface NavigationItem {
    label: string;
    link: string;
  }
  
export interface HeaderData {
    logoName: string;
    logoImage: {
      asset: {
        url: string;
      };
    };
    navigationItems: NavigationItem[];
  }