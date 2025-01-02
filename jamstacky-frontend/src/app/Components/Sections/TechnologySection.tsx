import React from 'react'
import Image from 'next/image';
import { TechnologySection } from '@/app/sanity/types/sectionTypes/technologySection';
import { urlFor } from '@/app/utils/imageUtils';

export default function Technology({ data }: { data: { sectionContent: TechnologySection[] } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-bold mb-8">
        TECHNOLOGY WE WORK WITH
      </h2>

      {data.sectionContent?.map((technologySection, index) => (
        <div key={index} className="mb-12">
          
          {technologySection?.title && (
            <h3 className="text-2xl font-bold text-center mb-8">
              {technologySection.title}
            </h3>
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
                        width={96}
                        height={96}
                        className="w-24 h-24"
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
