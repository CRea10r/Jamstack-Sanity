export interface HeroSection {
  _type: "heroSection";
  title: string;
  description: string;
  logo: {
    asset: {
      _id: string;
      url: string;
    };
  };
  button?: string[];
  heroImage?: {
    asset: {
      url: string;
    };
  };
  info?: string;
}