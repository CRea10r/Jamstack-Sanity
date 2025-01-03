import React from 'react';
import Image from 'next/image';
import { HeroSection } from '@/app/sanity/types/sectionTypes/heroSection';
import { urlFor } from '@/app/utils/imageUtils';

export default function Hero({ data }: { data: { sectionContent: HeroSection[] } }) {
  return (
    <div className="w-full bg-pink-50 min-h-screen flex items-center">
      {data.sectionContent?.map((heroSection, index) => (
        <div
          key={index}
          className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 py-12 px-6 lg:px-12"
        >
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

            <div className="mt-8 flex flex-wrap gap-4">
              {heroSection?.button?.map((btnText, btnIndex) => (
                <button
                  key={btnIndex}
                  className={`rounded-full px-6 py-3 text-lg md:text-xl font-semibold text-white shadow-lg transition-transform transform hover:scale-105 ${btnIndex === 0 ? 'bg-[#222549]' : 'bg-[rgba(216,34,68,0.85)]'}`}
                >
                  {btnText}
                </button>
              ))}
            </div>
          </div>

          {heroSection?.heroImage?.asset && (
            <div className="hidden lg:flex justify-center items-center h-full">
              <div className="relative w-full sm:w-96 md:w-[500px] lg:w-[600px] h-80 sm:h-96 md:h-[500px] lg:h-[600px] flex items-center justify-center">
                <Image
                  src={urlFor(heroSection.heroImage.asset)}
                  alt="Hero Section Image"
                  width={400}
                  height={400}
                  className="object-cover"
                  priority
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
