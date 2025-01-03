"use client"
import { SliderSection } from '@/app/sanity/types/sectionTypes/sliderSection';
import Image from 'next/image';
import { urlFor } from '@/app/utils/imageUtils'
import '@/app/globals.css'

export default function InfiniteSlider({ data }: { data: { sectionContent: SliderSection[] } }) {

    const infiniteItems = [...data.sectionContent, ...data.sectionContent];

    return (
        <div className="relative overflow-hidden w-full my-4">
            {data?.sectionContent?.map((slider, index) => (
                <div key={index} className="flex w-full">
                    
                    <div
                        className="flex animate-slide gap-4"
                        style={{
                            width: `${infiniteItems.length * 300}px`,
                        }}
                    >
                        {slider.sliderImage.map((image, idx) => (
                            <Image
                                key={idx}
                                width={400}
                                height={400}
                                src={urlFor(image.asset)}
                                alt={`Image ${idx + 1}`}
                                className="object-cover"
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
