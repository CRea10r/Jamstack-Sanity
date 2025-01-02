import { defineQuery } from "next-sanity";

export const HEADER_QUERY =  defineQuery( `*[_type == "header"][0]{
    logoName,
    logoImage {
      asset->{
        url
      }
    },
    navigationItems[] {
      label,
      link
    }
  }`);