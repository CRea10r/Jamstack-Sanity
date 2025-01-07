import React from "react";
import Image from "next/image";
import { HeroSection as HeroSectionType } from "@/sanity/types/sectionTypes/heroSection";
import { urlFor } from "@/utils/imageUtils";

interface HeroProps {
  data: { sectionContent: HeroSectionType[] };
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  if (!data.sectionContent || data.sectionContent.length === 0) {
    return null; 
  }

  return (
    <div>
      {data.sectionContent.map((heroSection, index) => (
        <div
          key={index}
          className="py-8 px-2 sm:px-6 lg:px-[15%] flex items-center justify-center bg-custom-gradient"
          style={{ minHeight: "400px" }}
        >
          {/* Text Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
            <div className="space-y-8 text-[#110462]">
              {heroSection?.title && (
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  {heroSection.title}
                </h1>
              )}

              {heroSection?.description && (
                <h2 className="text-lg md:text-xl">{heroSection.description}</h2>
              )}

              {heroSection?.button?.length ? (
                <div className="mt-8 flex flex-wrap gap-4">
                  {heroSection.button.map((btnText, btnIndex) => (
                    <button
                      key={btnIndex}
                      className={`rounded-full px-6 py-3 text-lg md:text-xl font-semibold text-white transition-transform transform hover:scale-105 ${
                        btnIndex === 0
                          ? "bg-[#222549]"
                          : "bg-[#da3654]"
                      }`}
                    >
                      {btnText}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>

            {/* Image Section */}
            {heroSection?.heroImage?.asset && (
              <div className="hidden lg:flex justify-center items-center w-full">
                <div className="relative w-full sm:w-96 md:w-[500px] lg:w-[600px] flex items-center justify-center">
                  <Image
                    src={urlFor(heroSection.heroImage.asset)}
                    alt={heroSection?.title || "Hero Section Image"}
                    width={640} 
                    height={658} 
                    layout="intrinsic" 
                    priority 
                    loading="eager" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,..."
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
