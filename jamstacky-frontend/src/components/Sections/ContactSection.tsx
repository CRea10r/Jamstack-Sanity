import Image from "next/image";
import { ContactSection } from "@/sanity/types/sectionTypes/contactSection";
import { urlFor } from "@/utils/imageUtils";
import Link from "next/link";

export default function Contact({ data }: { data: { sectionContent: ContactSection[] } }) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12">

      {data.sectionContent?.map((contactSection, index) => (
        <div key={index} className="flex flex-col md:flex-row items-center gap-5 w-full max-w-4xl">

          <div className="max-w-lg text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              {contactSection.title}
            </h2>
            <p className="text-gray-700 mb-4">
              {contactSection.description}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start mt-8 md:mt-0">
            <div className="flex items-center space-x-2 mb-4">
              {contactSection.contactAvtar?.asset?.url ? (
                <div className="w-10 h-10 overflow-hidden">
                  <Image
                    src={urlFor(contactSection.contactAvtar.asset.url)}
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
              className="bg-[#222549] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#da3654] transition"
            >
              {`⚡${contactSection.buttonText}`}
            </Link>
            <p className="mt-4 text-gray-500">
              {contactSection.contactText}{" "}
              <Link
                href={`mailto:${contactSection.contactEmail}`}
                className="text-[#da3654] underline hover:text-[#222549] duration-300 transition"
              >
                {contactSection.contactEmail}
              </Link>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
