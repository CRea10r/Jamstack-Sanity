import { BlogSection } from "@/sanity/types/sectionTypes/blogSection";
import { urlFor } from "@/utils/imageUtils";
import Image from "next/image";

export default function Blogs({ data }: { data: { sectionContent: BlogSection[] } }) {
    return (
        <div className="container mx-auto px-4 py-12">
            {data.sectionContent?.map((blogSection, index) => (
                <div key={index}>

                    {blogSection.sectionHeading && (
                        <h1 className="text-lg md:text-xl font-semibold text-blue-600 mb-2">--{blogSection.sectionHeading}--</h1>
                    )}
                 
                    {blogSection.title && (
                        <h2 className="text-3xl font-semibold text-gray-800 mb-8">{blogSection.title}</h2>
                    )}
                 
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {blogSection.content?.map((content, contentIndex) => (
                            <div key={contentIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                                {content.contentImage?.asset && (
                                    <Image
                                        src={urlFor(blogSection.content[contentIndex].contentImage.asset)}
                                        width={500}
                                        height={500}
                                        loading="lazy"
                                        alt="Hero Section Image"
                                        style={{ objectFit: 'cover' }}
                                    />
                                )}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{content.contentName}</h3>
                                    <p className="text-gray-600 text-base mb-4">{content.contentContext}</p>
                                   
                                    {content.contentButtonText?.map((buttonText, btnIndex) => (
                                        <button
                                            key={btnIndex}
                                            className="mr-2 bg-[#f4fbff] py-2 px-4 rounded-md hover:bg-gray-600"
                                        >
                                            {buttonText}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                   
                    {blogSection.buttonText && (
                        <button className="mt-8 bg-[#da3654] text-white py-2 px-4 hover:bg-[#222549] rounded-full">{blogSection.buttonText}
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
}
