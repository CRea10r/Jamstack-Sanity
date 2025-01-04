import Image from "next/image";
import { FooterData } from "../sanity/types/footerType";
import { client } from "../sanity/lib/sanityClient";
import { FOOTER_QUERY } from "../sanity/sanityQueries/footerQueries";
import Link from "next/link";

export default async function Footer() {
  const footerData: FooterData = await client.fetch(FOOTER_QUERY);

  return (
    <footer className="bg-[#222549] text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        
        <div className="flex items-center mb-4 md:mb-0">
          {footerData.footerLogo && (
            <Image
              src={footerData.footerLogo.asset.url}
              alt="Footer Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          )}
        </div>

      
        <ul className="flex flex-wrap justify-center md:justify-start space-x-4 text-sm">
          {footerData.footerItems.map((item, index) => (
            <li key={index} className="hover:underline">
              {item.label}
            </li>
          ))}
        </ul>

        
        <div className="text-center md:text-right text-sm mt-4 md:mt-0">
          <Link
            href={`mailto:${footerData.footerEmail}`}
            className="underline hover:text-gray-300"
          >
            {footerData.footerEmail}
          </Link>
          <p className="text-gray-400 mt-2">{footerData.footerCopyright}</p>
        </div>
      </div>
    </footer>
  );
}
