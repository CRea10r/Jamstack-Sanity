"use client"
import { CompareSection } from '@/app/sanity/types/sectionTypes/compareSection';
import { useState } from 'react';

export default function Compare({ data }: { data: { sectionContent: CompareSection[] } }) {
  const [cmsSelected, setCmsSelected] = useState('');
  const [ssgSelected, setSsgSelected] = useState('');
  const [deploymentSelected, setDeploymentSelected] = useState('');

  const handleCmsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCmsSelected(event.target.value);
  };

  const handleSsgChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSsgSelected(event.target.value);
  };

  const handleDeploymentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDeploymentSelected(event.target.value);
  };

  return (
    <div className="py-8 px-4">
      <div className="container mx-auto p-8">
        {data?.sectionContent?.map((section, index) => (
          <div key={index} className="mb-8">
            <div className='bg-[#da3654] px-4 py-8 rounded-md'>
              <h2 className="text-2xl font-bold mb-4 text-white">{section?.title}</h2>
              <p className="text-gray-700 mb-8 text-white">{section?.description}</p>
            </div>

            <div className='bg-custom-gradient rounded-md'>
              {section?.content?.map((content, idx) => (
                <div key={idx} className="mb-8 px-4 py-8 ">
                  <h3 className="text-xl font-bold mb-2 text-[#da3654]">{content.contentName}</h3>

                  <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">

                    <div className="sm:w-1/4">
                      <p className="text-gray-700">{content.contentContext}</p>
                    </div>

                    <div className="sm:w-1/4">
                      <select
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:outline-none"
                        value={
                          content.contentName === "CMS"
                            ? cmsSelected
                            : content.contentName === "Static Site Generators(SSGs)"
                              ? ssgSelected
                              : deploymentSelected
                        }
                        onChange={
                          content.contentName === "CMS"
                            ? handleCmsChange
                            : content.contentName === "Static Site Generators(SSGs)"
                              ? handleSsgChange
                              : handleDeploymentChange
                        }
                      >
                        <option value="">Select {content.contentName}</option>
                        {content.dropDownList?.map((option: string, optionIdx: number) => (
                          <option key={optionIdx} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:w-1/4 text-center text-lg font-semibold text-[#da3654]">
                      VS
                    </div>

                    <div className="sm:w-1/4">
                      <select
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:outline-none"
                        value={
                          content.contentName === "CMS"
                            ? cmsSelected
                            : content.contentName === "Static Site Generators(SSGs)"
                              ? ssgSelected
                              : deploymentSelected
                        }
                        onChange={
                          content.contentName === "CMS"
                            ? handleCmsChange
                            : content.contentName === "Static Site Generators(SSGs)"
                              ? handleSsgChange
                              : handleDeploymentChange
                        }
                      >
                        <option value="">Select {content.contentName}</option>
                        {content.dropDownList?.map((option: string, optionIdx: number) => (
                          <option key={optionIdx} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:w-1/4 flex justify-center">
                      <button className="w-full sm:w-auto bg-[#222549] text-white py-2 px-4 rounded-md hover:bg-[#da3654]">
                        {content?.buttonText || 'Compare'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
