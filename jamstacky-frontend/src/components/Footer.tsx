import Image from "next/image";
import { FooterData } from "@/app/sanity/types/footerType";
import { client } from "@/app/sanity/lib/sanityClient";
import { FOOTER_QUERY } from "@/app/sanity/sanityQueries/footerQueries";
import Link from "next/link";

export default async function Footer() {
  const footerData: FooterData = await client.fetch(FOOTER_QUERY);

  return (
    <footer className="bg-[#222549] text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
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

        {/* Footer Links Section */}
        <ul className="flex flex-wrap justify-center space-x-6 mt-4 md:mt-0 text-sm">
          {footerData.footerItems.map((item, index) => (
            <li key={index} className="hover:underline mb-2 md:mb-0">
              {item.label}
            </li>
          ))}
        </ul>

        {/* Contact Section */}
        <div className="text-center md:text-right mt-4 md:mt-0 text-sm">
          <Link
            href={`mailto:${footerData.footerEmail}`}
            className="text-white underline hover:text-gray-300"
          >
            {footerData.footerEmail}
          </Link>
          <p className="text-gray-400 mt-2">{footerData.footerCopyright}</p>
        </div>
      </div>
    </footer>
  );
}
