"use client"
import { CompareSection } from '@/sanity/types/sectionTypes/compareSection';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import slugify from 'slugify';

export default function Compare({ data }: { data: { sectionContent: CompareSection[] } }) {
  const router = useRouter();

  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: { first: string, second: string } }>({});

  const handleSelectionChange = (contentName: string, type: 'first' | 'second', value: string) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [contentName]: {
        ...prevState[contentName],
        [type]: value,
      },
    }));
  };

  const handleCompareClick = (contentName: string) => {
    const { first, second } = selectedOptions[contentName] || {};
    
    if (first && second) {
       
      const formattedFirst = slugify(first, { lower: true, strict: true }); 
      const formattedSecond = slugify(second, { lower: true, strict: true });
      const slug = `${formattedFirst}-vs-${formattedSecond}`;
      console.log('Selected Slug:', slug);
      router.push(`/comparison/${slug}`);
    } else {
      alert('Please select both options before comparing.');
    }
  };

  return (
    <div className="py-4 px-2 sm:px-6 lg:px-[15%]">
      {data?.sectionContent?.map((section, index) => (
        <div key={index} className="mb-8">
          <div className='bg-[#da3654] px-4 py-8 rounded-md'>
            <h2 className="text-2xl font-bold mb-4 text-white">{section?.title}</h2>
            <p className=" mb-8 text-white">{section?.description}</p>
          </div>

          <div className='bg-custom-gradient rounded-md'>
            {section?.content?.map((content, idx) => (
              <div key={idx} className="mb-8 px-4 py-8">
                <h3 className="text-xl font-bold mb-2 text-[#da3654]">{content.contentName}</h3>

                <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  
                  <div className="sm:w-1/4">
                    <p className="text-gray-700">{content.contentContext}</p>
                  </div>

                  <div className="sm:w-1/4">
                    <select
                      aria-label={`Select ${content.contentName}`}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:outline-none"
                      value={selectedOptions[content.contentName]?.first || ''}
                      onChange={(e) => handleSelectionChange(content.contentName, 'first', e.target.value)}
                    >
                      <option value="">Select {content.contentName}</option>
                      {content.dropDownList?.map((item, optionIdx) => (
                        <option key={optionIdx} value={item.dropDownItemName}>
                          {item.dropDownItemName}
                        </option>
                      ))}
                    </select>
                  </div>
              
                  <div className="sm:w-1/4 text-center text-lg font-semibold text-[#da3654]">
                    VS
                  </div>

                  <div className="sm:w-1/4">
                    <select
                      aria-label={`Select ${content.contentName}`}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:outline-none"
                      value={selectedOptions[content.contentName]?.second || ''}
                      onChange={(e) => handleSelectionChange(content.contentName, 'second', e.target.value)}
                    >
                      <option value="">Select {content.contentName}</option>
                      {content.dropDownList?.map((item, optionIdx) => (
                        <option key={optionIdx} value={item.dropDownItemName}>
                          {item.dropDownItemName}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:w-1/4 flex justify-center">
                    <button onClick={() => handleCompareClick(content.contentName)} className="w-full sm:w-auto bg-[#222549] text-white py-2 px-4 rounded-md hover:bg-[#da3654]">
                      {content?.buttonText}
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
