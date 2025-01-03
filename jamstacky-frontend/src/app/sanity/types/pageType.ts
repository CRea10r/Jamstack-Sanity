import { CaseStudySection } from "./sectionTypes/caseStudySection";
import { CompareSection } from "./sectionTypes/compareSection";
import { TestimonialSection } from "./sectionTypes/customerReviewSection";
import { EdgeCaseSection } from "./sectionTypes/edgeCaseSection";
import { HeroSection } from "./sectionTypes/heroSection";
import { TechnologySection } from "./sectionTypes/technologySection";
import { BlogSection } from "./sectionTypes/blogSection";
import { SliderSection } from "./sectionTypes/sliderSection";
import { ContactSection } from "./sectionTypes/contactSection";

export interface MarkDef {
  _key: string;
  _type: string;
  href?: string;
}
export interface content {
  _key: string;
  _type: 'block';
  children: Array<{
    _key: string;
    _type: 'span';
    text: string;
    marks: string[];
  }>;
  markDefs: MarkDef[]; 
  style: string;
}

export interface Section {
  type: "heroSection" | "caseStudySection" | "technologySection" | "compareSection" | "edgeCaseSection" | "testimonialSection" | "blogSection" | "sliderSection" | "contactSection";
  title: string;
  sectionContent?: HeroSection[] | CaseStudySection[] | TechnologySection[] | CompareSection[] | EdgeCaseSection[] | TestimonialSection[] | BlogSection [] | SliderSection[] | ContactSection[];
}

export interface Page {
  title: string;
  slug: string;
  sectionsList?: Section[];
}



