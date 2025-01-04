import { defineQuery } from "next-sanity";

export const FOOTER_QUERY = defineQuery(`
  *[_type == "footer"][0]{
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
    footerCopyright
  }
`);
