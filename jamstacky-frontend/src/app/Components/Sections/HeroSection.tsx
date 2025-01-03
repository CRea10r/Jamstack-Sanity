import React from 'react';
import Image from 'next/image';
import { HeroSection } from '@/app/sanity/types/sectionTypes/heroSection';
import { urlFor } from '@/app/utils/imageUtils';

export default function Hero({ data }: { data: { sectionContent: HeroSection[] } }) {
  return (
    <div className="mx-auto container px-6 lg:px-12 py-12 min-h-screen">
      {data.sectionContent?.map((heroSection, index) => (
        <div
          key={index}
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 min-h-[80vh] py-12"
        >
          {/* Content Section */}
          <div className="space-y-8 text-[#110462]">
            {heroSection?.title && (
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                {heroSection.title}
              </h1>
            )}

            {heroSection?.description && (
              <p className="text-lg md:text-xl">
                {heroSection.description}                
              </p>
            )}

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              {heroSection?.button?.map((btnText, btnIndex) => (
                <button
                  key={btnIndex}
                  className={`rounded-full px-6 py-3 text-lg md:text-xl font-semibold text-white shadow-lg transition-transform transform hover:scale-105 ${
                    btnIndex === 0 ? 'bg-[#222549]' : 'bg-[rgba(216,34,68,0.85)]'
                  }`}
                >
                  {btnText}
                </button>
              ))}
            </div>
          </div>

          {/* Hero Image Section */}
          {heroSection?.heroImage?.asset && (
            <div className="flex justify-center items-center">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px]">
                <Image
                  src={urlFor(heroSection.heroImage.asset)}
                  alt="Hero Section Image"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          )}
        </div>

      ))}
    </div>
  );
}
