import React from 'react'
import Image from 'next/image';
import { TechnologySection } from '@/app/sanity/types/sectionTypes/technologySection';
import { urlFor } from '@/app/utils/imageUtils';

export default function Technology({ data }: { data: { sectionContent: TechnologySection[] } }) {
  return (
    <div className="container mx-auto px-4 py-8">

      {data.sectionContent?.map((technologySection, index) => (
        <div key={index} className="mb-12">
          
          {technologySection.sectionHeading && (
            <h1 className="text-lg md:text-xl font-semibold text-blue-600 mb-2">--{technologySection.sectionHeading}--</h1>
          )}
          {technologySection?.fieldContent?.fieldName && (
            <h1 className="text-3xl font-medium mb-2">{technologySection.fieldContent.fieldName}</h1>
          )}

          
          <div className="space-y-12">
            {technologySection?.fieldContent?.technologies?.map((technology, techIndex) => (
              <div key={techIndex} className="mb-8">
                
                <p className="text-center text-lg font-medium mb-4 text-[#4a3aff]">
                  --{technology.fieldContentType}--
                </p>

                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
                  {technology.image?.map((img, imageIndex) => (
                    <div key={imageIndex} className="flex flex-col items-center justify-center rounded-md border-2 border-dashed border-pink-400 p-4">
                      <Image
                        src={urlFor(img.asset)}
                        alt={technology.fieldContentType || "Technology"}
                        loading="lazy"
                        width={200}
                        height={200}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}