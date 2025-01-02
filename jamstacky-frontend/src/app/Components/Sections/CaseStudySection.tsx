import { PortableText } from '@portabletext/react';
import { customComponents } from '@/app/Components/CustomComponent';
import Image from 'next/image';
import { CaseStudySection } from '@/app/sanity/types/sectionTypes/caseStudySection';
import { urlFor } from '@/app/utils/imageUtils';


export default function CaseStudy({ data }: { data: { sectionContent: CaseStudySection[] } }) {

  return (
     <div className="rounded-lg p-6 py-8 container mx-auto">
      {data.sectionContent?.map((caseStudySection, index) => (
        <div key={index} className="space-y-8">     
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            <div className="md:order-2 space-y-6">
              {caseStudySection?.content && (
                <PortableText value={caseStudySection.content} components={customComponents} />    
              )}
            </div>
           
            <div className="md:order-1 flex flex-col justify-center items-center md:items-start space-y-4">
              
              {caseStudySection?.title && (
                <h2 className="text-xl font-bold text-center md:text-left">
                  {caseStudySection.title}
                </h2>
              )}
             
              {caseStudySection?.caseStudyImage?.asset && (
                <div className="flex justify-center md:justify-start">
                  <Image
                    width={600}
                    height={400}
                    src={urlFor(caseStudySection.caseStudyImage.asset)}
                    alt="Sanity Image"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
