import dynamic from "next/dynamic";
import { client } from "@/sanity/lib/sanityClient";
import { PAGE_QUERY } from "@/sanity/sanityQueries/pageQueries";
import { Section } from "@/sanity/types/pageType";
import { CompareSection as Compare } from "@/sanity/types/sectionTypes/compareSection";


const ComparisonSection = dynamic(() => import("@/components/Sections/ComparisonSection"));


export default async function Home() {
  const comparePage = await client.fetch(PAGE_QUERY, { slug: 'comparison' });
  console.log('Compare Page Data:', comparePage);
  return (
    <>
      {comparePage.sectionsList.map((sectionItem: Section, sectionIndex: number) => {
        switch (sectionItem.type) {      
          case "compareSection":
            return <ComparisonSection key={sectionIndex} data={sectionItem as { sectionContent: Compare[] }} />;        
          default:
            console.warn(`Unknown section type: ${sectionItem.type}`);
            return null;
        }
      })}
    </>
  );
}
