import { PortableText } from '@portabletext/react';
import { customComponents } from '@/components/CustomComponent';
import Image from 'next/image';
import { CaseStudySection } from '@/sanity/types/sectionTypes/caseStudySection';
import { urlFor } from '@/utils/imageUtils';

export default function CaseStudy({ data }: { data: { sectionContent: CaseStudySection[] } }) {
  return (
    <div className="py-8 px-2 sm:px-6 lg:px-[15%] flex items-center justify-center">
      {data.sectionContent?.map((caseStudySection, index) => (
        <div key={index}>
          {caseStudySection.sectionHeading && (
            <h1 className="text-lg md:text-xl font-semibold text-[#4a3aff] mb-2">--{caseStudySection.sectionHeading}--</h1>
          )}

          {caseStudySection?.title && (
            <h1 className="text-3xl font-medium mb-8">{caseStudySection.title}</h1>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2 flex flex-col justify-center space-y-6">
              {caseStudySection?.contentTitle && (
                <h2 className="text-2xl font-bold">{caseStudySection.contentTitle}</h2>
              )}
              {caseStudySection?.contentContext && (
                <PortableText value={caseStudySection.contentContext} components={customComponents} />
              )}
            </div>

            <div className="md:order-1 flex flex-col justify-center items-center md:items-start space-y-4">


              {caseStudySection?.caseStudyImage?.asset && (
                <div className="flex flex-col items-center w-full gap-5 sm:gap-10">
                  <div className="relative w-full sm:w-96 md:w-[500px] lg:w-[600px] h-[400px]">
                    <Image
                      width={600}
                      height={400}
                      src={urlFor(caseStudySection.caseStudyImage.asset)}
                      alt="Case Study Image"
                      priority
                      loading="eager"
                    />
                  </div>

                  <div className="p-4 rounded-lg">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">VOLZ - Core Web Vitals Assessment</h2>

                    {/* First Contentful Paint */}
                    <div className="mb-4">
                      <h3 className="text-lg font-medium text-gray-700 mb-1">First contentful paint</h3>
                      <div className="w-full bg-gray-300 rounded-full h-3 flex">
                        <div className="bg-green-500 h-3 rounded-l-full" style={{ width: '90%' }}></div>
                        <div className="bg-orange-500 h-3" style={{ width: '5%' }}></div>
                        <div className="bg-red-500 h-3 rounded-r-full" style={{ width: '5%' }}></div>
                      </div>
                    </div>

                    {/* Cumulative Layout Shift */}
                    <div className="mb-4">
                      <h3 className="text-lg font-medium text-gray-700 mb-1">Cumulative layout shift score</h3>
                      <div className="w-full bg-gray-300 rounded-full h-3 flex">
                        <div className="bg-green-500 h-3 rounded-l-full" style={{ width: '85%' }}></div>
                        <div className="bg-orange-500 h-3" style={{ width: '8%' }}></div>
                        <div className="bg-red-500 h-3 rounded-r-full" style={{ width: '7%' }}></div>
                      </div>
                    </div>

                    {/* First Input Delay */}
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
              )}



            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
