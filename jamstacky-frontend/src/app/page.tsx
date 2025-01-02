import { client } from "./sanity/lib/sanityClient";
import { PAGE_QUERY } from "./sanity/sanityQueries/pageQueries";
import { Section } from "./sanity/types/pageType";
import CaseStudySection from "./Components/Sections/CaseStudySection";
import HeroSection from "./Components/Sections/HeroSection";
import TechnologySection from "./Components/Sections/TechnologySection";
import CompareSection from "./Components/Sections/CompareSection";
import EdgeCaseSecction from "./Components/Sections/EdgeCaseSection";
import TestimonialSection from "./Components/Sections/TestimonialSection";
import BlogSection from "./Components/Sections/BlogSection";
import SliderSection from "./Components/Sections/SliderSection";
import ContactSection from "./Components/Sections/ContactSection";
import { HeroSection as Hero } from "./sanity/types/sectionTypes/heroSection";
import { CaseStudySection as CaseStudy } from "./sanity/types/sectionTypes/caseStudySection";
import { TechnologySection as Technology } from "./sanity/types/sectionTypes/technologySection";
import { CompareSection as Compare } from "./sanity/types/sectionTypes/compareSection";
import { EdgeCaseSection as EdgeCase } from "./sanity/types/sectionTypes/edgeCaseSection";
import { TestimonialSection as Testimonial } from "./sanity/types/sectionTypes/customerReviewSection";
import { BlogSection as Blog } from "./sanity/types/sectionTypes/blogSection";
import { SliderSection as Slider } from "./sanity/types/sectionTypes/sliderSection";
import { ContactSection as Contact } from "./sanity/types/sectionTypes/contactSection";

export default async function Home() {
  const homePage = await client.fetch(PAGE_QUERY, { slug: 'home' });
  return (
    <div>
      {homePage.sectionsList.map((sectionItem: Section, sectionIndex: number) => {
        switch (sectionItem.type) {
          case "heroSection":
            return <HeroSection key={`${sectionIndex}`} data={sectionItem as { sectionContent: Hero[] }} />;
          case "caseStudySection":
            return <CaseStudySection key={`${sectionIndex}`} data={sectionItem as { sectionContent: CaseStudy[] }} />;
          case "technologySection":
            return <TechnologySection key={`${sectionIndex}`} data={sectionItem as { sectionContent: Technology[] }} />;
          case "compareSection":
            return <CompareSection key={`${sectionIndex}`} data={sectionItem as { sectionContent: Compare[] }} />;
          case "edgeCaseSection":
            return <EdgeCaseSecction key={`${sectionIndex}`} data={sectionItem as { sectionContent: EdgeCase[] }} />; 
          case "testimonialSection":
            return <TestimonialSection key={`${sectionIndex}`} data={sectionItem as { sectionContent: Testimonial[] }} />;
          case "blogSection":
            return <BlogSection key={`${sectionIndex}`} data={sectionItem as { sectionContent: Blog[] }} />;
          case "sliderSection":
            return <SliderSection key={`${sectionIndex}`} data={sectionItem as { sectionContent: Slider[] }} />;
          case "contactSection":
            return <ContactSection key={`${sectionIndex}`} data={sectionItem as { sectionContent: Contact[] }} />;
          default:
            console.warn(`Unknown section type: ${sectionItem.type}`);
            return null;
        }
      })}
    </div>
  );
}
