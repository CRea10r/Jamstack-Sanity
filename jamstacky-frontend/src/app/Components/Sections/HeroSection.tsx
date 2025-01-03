import React from 'react';
import { PortableText } from '@portabletext/react';
import { customComponents } from '@/app/Components/CustomComponent';
import Image from 'next/image';
import { HeroSection } from '@/app/sanity/types/sectionTypes/heroSection';
import { urlFor } from '@/app/utils/imageUtils';


export default function Hero({ data }: { data: { sectionContent: HeroSection[]}}) {
  return (
    <div className="mx-auto container px-6 lg:px-8 py-8">
      
      {data.sectionContent?.map((heroSection, index) => (
        <div key={index} className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          
          <div>
            <div className="space-y-6 text-[#110462]">
              {heroSection?.content && (
                <PortableText value={heroSection.content} components={customComponents} />
              )}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              {heroSection?.button?.map((btnText, btnIndex) => (
                <button
                  key={btnIndex}
                  className={`rounded-full px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-transform transform hover:scale-105 ${btnIndex === 0 ? 'bg-[#222549]' : 'bg-[rgba(216,34,68,0.85)]'
                    }`}
                >
                  {btnText}
                </button>
              ))}
            </div>
          </div>
       
          {heroSection?.heroImage?.asset && (
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                <Image
                  src={urlFor(heroSection.heroImage.asset)}
                  width={500}
                  height={500}
                  alt="Hero Section Image"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
