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
import { urlFor } from "@/utils/imageUtils";
import { TestimonialSection } from "@/sanity/types/sectionTypes/customerReviewSection";
import { PortableText } from "@portabletext/react";
import { customComponents } from "../CustomComponent";

export default function Testimonial({ data }: { data: { sectionContent: TestimonialSection[] } }) {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className="py-4 px-2 sm:px-6 lg:px-[15%]">
      <div className="bg-gradient-to-r from-[#222549] via-[#da3654] to-[#da3654] ">
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

              <p className="mt-4 text-lg text-white text-center lg:text-left">
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
                        <Card>
                          <CardContent className="flex flex-col space-y-6 md:space-y-0">

                            <div className="w-full md:w-3/4 flex justify-center text-white font-semibold ">
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
                              <p className="mt-4 font-bold text-white">
                                {testimonial.authorName}
                              </p>
                              <p className="text-white">{testimonial.authorAddress}</p>
                            </div>

                          </CardContent>
                        </Card>
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
    </div>
  );
}
