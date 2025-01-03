import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { customComponents } from '@/app/Components/CustomComponent';
import { EdgeCaseSection } from '@/app/sanity/types/sectionTypes/edgeCaseSection';
import Link from 'next/link';
import { urlFor } from '@/app/utils/imageUtils';

export default function EdgeCase({ data }: { data: { sectionContent: EdgeCaseSection[] } }) {
  return (
    <div className="bg-white py-8 px-8">
      <div className="container mx-auto">
        {data?.sectionContent?.map((edgeCase, index) => (
          <div key={index} className="relative">
        
            {edgeCase.sectionHeading && (
              <h1 className="absolute -top-10 left-0 text-lg md:text-xl font-semibold text-blue-600 mb-10">
                --{edgeCase.sectionHeading}--
              </h1>
            )}

            <div className="mt-12 flex flex-col md:flex-row items-center">
              <div className="relative w-full md:w-1/2 mb-8 md:mb-0">
                <div className="relative">
                  <Image
                    src={urlFor(edgeCase?.edgeCaseImage?.asset)}
                    width={500}
                    height={500}
                    alt="Edge Case Image"
                    className="object-cover animate-spin-slow"
                  />

                  <div className="absolute top-1/2 lg:left-[16rem] md:left-[11rem] left-[8rem] transform -translate-x-1/2 -translate-y-1/2">
                    <Image
                      src={urlFor(edgeCase?.edgeCaseLogo?.asset)}
                      width={70}
                      height={100}
                      alt="Logo"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 px-4 text-center md:text-left">
                <div className="mt-8">
                  {edgeCase?.content && (
                    <PortableText value={edgeCase.content} components={customComponents} />
                  )}
                </div>

                <div className="mt-8 flex gap-4 justify-center md:justify-start items-center">
                  <Image
                    src={urlFor(edgeCase?.avtarImage?.asset).toString()}
                    width={80}
                    height={80}
                    alt="Avatar Icon"
                    className="rounded-full border-4 border-gray-300"
                  />
                  <span className="font-semibold mt-2">{edgeCase?.avtarName}</span>
                </div>

                <div className="mt-8">
                  <Link
                    href="#"
                    className="inline-block bg-[#da3654] text-white py-2 px-4 rounded-full hover:bg-[#222549]"
                  >
                    {edgeCase?.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
