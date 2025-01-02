export interface ContactSection {
    _type: "contactSection";
    title: string;
    description: string;
    contactAvtar: {
      asset: {
        _id: string;
        url: string;
      };
    };
    buttonText: string;
    contactText: string;
    contactEmail: string;
  }
  