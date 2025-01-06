import dynamic from "next/dynamic";
import { client } from "../sanity/lib/sanityClient";
import { PAGE_QUERY } from "../sanity/sanityQueries/pageQueries";
import { Section } from "../sanity/types/pageType";
import { HeroSection as Hero } from "../sanity/types/sectionTypes/heroSection";
import { CaseStudySection as CaseStudy } from "../sanity/types/sectionTypes/caseStudySection";
import { TechnologySection as Technology } from "../sanity/types/sectionTypes/technologySection";
import { CompareSection as Compare } from "../sanity/types/sectionTypes/compareSection";
import { EdgeCaseSection as EdgeCase } from "../sanity/types/sectionTypes/edgeCaseSection";
import { TestimonialSection as Testimonial } from "../sanity/types/sectionTypes/customerReviewSection";
import { BlogSection as Blog } from "../sanity/types/sectionTypes/blogSection";
import { SliderSection as Slider } from "../sanity/types/sectionTypes/sliderSection";
import HeroSection from "../components/Sections/HeroSection";


const CaseStudySection = dynamic(() => import("../components/Sections/CaseStudySection"));
const TechnologySection = dynamic(() => import("../components/Sections/TechnologySection"));
const CompareSection = dynamic(() => import("../components/Sections/CompareSection"));
const EdgeCaseSection = dynamic(() => import("../components/Sections/EdgeCaseSection"));
const TestimonialSection = dynamic(() => import("../components/Sections/TestimonialSection"));
const BlogSection = dynamic(() => import("../components/Sections/BlogSection"));
const SliderSection = dynamic(() => import("../components/Sections/SliderSection"));

export default async function Home() {
  const homePage = await client.fetch(PAGE_QUERY, { slug: 'home' });
  return (
    <>
      {homePage.sectionsList.map((sectionItem: Section, sectionIndex: number) => {
        switch (sectionItem.type) {
          case "heroSection":
            return <HeroSection key={sectionIndex} data={sectionItem as { sectionContent: Hero[] }} />;
          case "caseStudySection":
            return <CaseStudySection key={sectionIndex} data={sectionItem as { sectionContent: CaseStudy[] }} />;
          case "technologySection":
            return <TechnologySection key={sectionIndex} data={sectionItem as { sectionContent: Technology[] }} />;
          case "compareSection":
            return <CompareSection key={sectionIndex} data={sectionItem as { sectionContent: Compare[] }} />;
          case "edgeCaseSection":
            return <EdgeCaseSection key={sectionIndex} data={sectionItem as { sectionContent: EdgeCase[] }} />;
          case "testimonialSection":
            return <TestimonialSection key={sectionIndex} data={sectionItem as { sectionContent: Testimonial[] }} />;
          case "blogSection":
            return <BlogSection key={sectionIndex} data={sectionItem as { sectionContent: Blog[] }} />;
          case "sliderSection":
            return <SliderSection key={sectionIndex} data={sectionItem as { sectionContent: Slider[] }} />;
          default:
            console.warn(`Unknown section type: ${sectionItem.type}`);
            return null;
        }
      })}
    </>
  );
}
