import React from "react";
import Image from "next/image";
import { HeroSection as HeroSectionType } from "@/app/sanity/types/sectionTypes/heroSection";
import { urlFor } from "@/app/utils/imageUtils";

interface HeroProps {
  data: { sectionContent: HeroSectionType[] };
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  if (!data.sectionContent || data.sectionContent.length === 0) {
    return null; // Fallback if no content exists
  }

  return (
    <div
      className="w-full bg-pink-50 flex items-center justify-center py-12 px-6 lg:px-12"
      style={{ minHeight: "500px" }} // Reserved height
    >
      {data.sectionContent.map((heroSection, index) => (
        <div
          key={index}
          className="container mx-auto py-8 px-6 lg:px-12 flex items-center justify-center"
          style={{ minHeight: "400px" }} // Reserve height to avoid layout shifts
        >
          {/* Text Section */}
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
            <div className="space-y-8 text-[#110462]">
              {heroSection?.title && (
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  {heroSection.title}
                </h1>
              )}

              {heroSection?.description && (
                <p className="text-lg md:text-xl">{heroSection.description}</p>
              )}

              {heroSection?.button?.length ? (
                <div className="mt-8 flex flex-wrap gap-4">
                  {heroSection.button.map((btnText, btnIndex) => (
                    <button
                      key={btnIndex}
                      className={`rounded-full px-6 py-3 text-lg md:text-xl font-semibold text-white transition-transform transform hover:scale-105 ${
                        btnIndex === 0
                          ? "bg-[#222549]"
                          : "bg-[rgba(216,34,68,0.85)]"
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
                    width={600} // Explicit width to avoid layout shifts
                    height={400} // Explicit height to avoid layout shifts
                    layout="intrinsic" // Ensures proper aspect ratio
                    priority // Ensures image is loaded early
                    loading="eager" // Eager loading for critical images
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    placeholder="blur" // Placeholder while loading
                    blurDataURL="data:image/png;base64,..." // Placeholder image
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
