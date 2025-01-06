import { defineQuery } from "next-sanity";

export const FOOTER_QUERY = defineQuery(`*[_type == "footer"][0]{
    contactTitle,
    contactDescription,
    contactAvatar {
      asset->{
        _id,
        url
      }
    },
    contactButtonText,
    contactText,
    contactEmail,
    footerLogo {
      asset->{
        _id,
        url
      }
    },
    footerItems[] {
      label
    },
    footerEmail,
    footerCopyright,
  }
`);
