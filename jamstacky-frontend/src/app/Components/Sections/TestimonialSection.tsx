"use client";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef } from "react";
import { urlFor } from "@/app/utils/imageUtils";
import { TestimonialSection } from "@/app/sanity/types/sectionTypes/customerReviewSection";
import { PortableText } from "@portabletext/react";
import { customComponents } from "../CustomComponent";

export default function Testimonial({ data }: {data: { sectionContent: TestimonialSection[] }}) {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className="container mx-auto bg-gradient-to-r from-[#222549] via-[#da3654] to-[#da3654] ">
      {data.sectionContent?.map((reviewSection, sectionIndex) => (
        <div
          key={sectionIndex}
          className="flex flex-col lg:flex-row items-center lg:items-start p-16 sm:p-8 space-y-8 lg:space-y-0 lg:space-x-16"
        >
          
          <div className="lg:w-1/3 flex-1 flex flex-col items-start">
            
            {reviewSection?.title && (
              <h2 className="text-3xl font-bold text-white text-center lg:text-left">
                {reviewSection.title}
              </h2>
            )}
         
            <p className="mt-4 text-lg text-gray-400 text-center lg:text-left">
              {reviewSection?.description}
            </p>
          </div>
 
          <div className="w-full flex-1">
            <Carousel
              plugins={[plugin.current]}
              className="w-full max-w-4xl"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {reviewSection.content?.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="p-4">
                      <Card>
                        <CardContent className="flex flex-col p-0 sm:p-6 space-y-6 md:space-y-0">
                          
                          <div className="w-3/4 flex justify-center ">
                            <PortableText
                              value={testimonial.contentContext}
                              components={customComponents}
                            />
                          </div>

                          <div className="items-center">
                            <Image
                              width={80}
                              height={80}
                              className="rounded-full"
                              src={urlFor(testimonial.authorImage.asset)}
                              alt={`${testimonial.authorName}'s Image`}
                            />
                            <p className="mt-4 font-bold">
                              {testimonial.authorName}
                            </p>
                            <p>{testimonial.authorAddress}</p>
                          </div>

                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />    
            </Carousel>
          </div>
        </div>
      ))}
    </div>
  );
}
