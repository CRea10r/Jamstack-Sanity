import Image from "next/image";
import { FooterData } from "../sanity/types/footerType";
import { client } from "../sanity/lib/sanityClient";
import { FOOTER_QUERY } from "../sanity/sanityQueries/footerQueries";

export default async function Footer() {
  const footerData: FooterData = await client.fetch(FOOTER_QUERY);

  return (
    <footer className="bg-[#222549] text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            {footerData.footerLogo && (
              <Image
                src={footerData.footerLogo.asset.url}
                alt="Footer Logo"
                width={40}
                height={40}
              />
            )}
          </div>
        </div>

        <ul className="flex space-x-6 mt-4 md:mt-0 text-sm">
          {footerData.footerItems.map((item, index) => (
            <li key={index} className="hover:underline">
              {item.label}
            </li>
          ))}
        </ul>

        {/* Footer Email and Copyright */}
        <div className="text-center md:text-right mt-4 md:mt-0 text-sm">
          <a
            href={`mailto:${footerData.footerEmail}`}
            className="text-white underline hover:text-gray-300"
          >
            {footerData.footerEmail}
          </a>
          <p className="text-gray-400 mt-2">{footerData.footerCopyright}</p>
        </div>
      </div>
    </footer>
  );
}