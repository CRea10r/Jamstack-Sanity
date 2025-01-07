import Image from "next/image";
import { FooterData } from "../sanity/types/footerType";
import { client } from "../sanity/lib/sanityClient";
import { FOOTER_QUERY } from "../sanity/sanityQueries/footerQueries";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { customComponents } from "./CustomComponent";
import { urlFor } from "@/utils/imageUtils";

export default async function Footer() {
  const footerData: FooterData = await client.fetch(FOOTER_QUERY);

  return (
    <footer>
      <div className="py-4 px-2 sm:px-6 lg:px-[15%] flex flex-col justify-center">
        <div className="flex flex-col md:flex-row items-center gap-5 ">

          <div className="max-w-5xl text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              {footerData.contactTitle}
            </h2>
            <div className="[&>p]:text-base sm::text-xl [&>p]:text-[#646680]">
              <PortableText value={footerData.contactDescription} components={customComponents} />
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start mt-8 md:mt-0">
            <div className="flex items-center space-x-2 mb-4">
              {footerData.contactAvatar.asset?.url ? (
                <div className="w-28 overflow-hidden">
                  <Image
                    src={urlFor(footerData.contactAvatar?.asset?.url || '/logo.svg')}
                    alt="Contact Avatar"
                    width={500}
                    height={500}
                  />
                </div>
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">N/A</span>
                </div>
              )}
            </div>
            <Link
              href="#"
              className="bg-[#222549] text-lg md:text-xl font-semibold text-white py-3 px-6 rounded-lg hover:bg-[#da3654] transition"
            >
              {`⚡${footerData.contactButtonText}`}
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              {footerData.contactText}{" "}
              <Link
                href={`mailto:${footerData.contactEmail}`}
                className="text-[#da3654] underline hover:text-[#222549] duration-300 transition"
              >
                {footerData.contactEmail}
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#222549] text-white flex flex-col md:flex-row items-center justify-around py-4">
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

        <ul className="flex flex-wrap justify-center md:justify-start space-x-8 text-xl">
          {footerData.footerItems.map((item, index) => (
            <li key={index} className="hover:underline">
              {item.label}
            </li>
          ))}
        </ul>

        <div className="text-center md:text-right text-xl mt-4 md:mt-0">
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
