import { PortableText } from '@portabletext/react';
import { customComponents } from '@/app/Components/CustomComponent';
import Image from 'next/image';
import { CaseStudySection } from '@/app/sanity/types/sectionTypes/caseStudySection';
import { urlFor } from '@/app/utils/imageUtils';


export default function CaseStudy({ data }: { data: { sectionContent: CaseStudySection[] } }) {
  return (
    <div className="rounded-lg p-6 py-8 container mx-auto min-h-screen flex items-center">
      {data.sectionContent?.map((caseStudySection, index) => (
        <div key={index} className="space-y-8 w-full">
          {caseStudySection.sectionHeading && (
            <h1 className="text-lg md:text-xl font-semibold text-blue-600 mb-2">--{caseStudySection.sectionHeading}--</h1>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
           
            <div className="md:order-2 flex flex-col justify-center space-y-6 min-h-full">
              {caseStudySection?.contentTitle && (
                <h3 className="text-2xl font-bold">{caseStudySection.contentTitle}</h3>
              )}
              {caseStudySection?.contentContext && (
                <PortableText value={caseStudySection.contentContext} components={customComponents} />
              )}
            </div>

         
            <div className="md:order-1 flex flex-col justify-center items-center md:items-start space-y-4 min-h-full">
              {caseStudySection?.title && (
                <h2 className="text-3xl font-medium mb-2">{caseStudySection.title}</h2>
              )}

              {caseStudySection?.caseStudyImage?.asset && (
                <div className="flex justify-center">
                  <Image
                    width={600}
                    height={400}
                    src={urlFor(caseStudySection.caseStudyImage.asset)}
                    alt="Sanity Image"
                  />
                </div>
              )}

              <div className="p-4 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">VOLZ - Core Web Vitals Assessment</h2>
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-gray-700 mb-1">First contentful paint</h3>
                  <div className="w-full bg-gray-300 rounded-full h-3 flex">
                    <div className="bg-green-500 h-3 rounded-l-full" style={{ width: '90%' }}></div>
                    <div className="bg-orange-500 h-3" style={{ width: '5%' }}></div>
                    <div className="bg-red-500 h-3 rounded-r-full" style={{ width: '5%' }}></div>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-medium text-gray-700 mb-1">Cumulative layout shift score</h3>
                  <div className="w-full bg-gray-300 rounded-full h-3 flex">
                    <div className="bg-green-500 h-3 rounded-l-full" style={{ width: '85%' }}></div>
                    <div className="bg-orange-500 h-3" style={{ width: '8%' }}></div>
                    <div className="bg-red-500 h-3 rounded-r-full" style={{ width: '7%' }}></div>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-medium text-gray-700 mb-1">First input delay</h3>
                  <div className="w-full bg-gray-300 rounded-full h-3 flex">
                    <div className="bg-green-500 h-3 rounded-l-full" style={{ width: '92%' }}></div>
                    <div className="bg-orange-500 h-3" style={{ width: '3%' }}></div>
                    <div className="bg-red-500 h-3 rounded-r-full" style={{ width: '5%' }}></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

