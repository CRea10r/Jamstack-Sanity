import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { customComponents } from '@/components/CustomComponent';
import { EdgeCaseSection } from '@/sanity/types/sectionTypes/edgeCaseSection';
import Link from 'next/link';
import { urlFor } from '@/utils/imageUtils';

export default function EdgeCase({ data }: { data: { sectionContent: EdgeCaseSection[] } }) {
  return (
    <div className="py-4 px-2 sm:px-6 lg:px-[15%]">
      {data?.sectionContent?.map((edgeCase, index) => (
        <div key={index} className="relative">

          {edgeCase.sectionHeading && (
            <h1 className="-top-10 left-0 text-lg md:text-xl font-semibold text-blue-600 mb-2">
              --{edgeCase.sectionHeading}--
            </h1>
          )}

          <div className="mt-12 flex flex-col md:flex-row items-center">
            <div className=" w-full md:w-1/2 mb-8 md:mb-0">
              <div className='flex justify-center'>
                <div className="relative">
                  <Image
                    src={urlFor(edgeCase?.edgeCaseImage?.asset)}
                    width={500}
                    height={500}
                    alt="Edge Case Image"
                    className="object-cover animate-spin-slow"
                  />

                  <div className="absolute top-1/2 lg:left-[16rem] md:left-[12rem] sm:left-[14rem] left-[10rem] transform -translate-x-1/2 -translate-y-1/2">
                    <Image
                      src={urlFor(edgeCase?.edgeCaseLogo?.asset)}
                      width={70}
                      height={100}
                      alt="Logo"
                    />
                  </div>
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
                  className="inline-block text-lg md:text-xl font-semibold bg-[#da3654] text-white py-2 px-4 rounded-full hover:bg-[#222549]"
                >
                  {edgeCase?.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
