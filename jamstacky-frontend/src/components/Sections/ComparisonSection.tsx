"use client";

import { useParams } from "next/navigation";
import slugify from "slugify";
import { PortableText } from "@portabletext/react";
import { customComponents } from "@/components/CustomComponent";
import { CompareSection, DropDownItem } from "@/sanity/types/sectionTypes/compareSection";
import Image from "next/image";
import { urlFor } from "@/utils/imageUtils";

const Comparison = ({ data }: { data: { sectionContent: CompareSection[] } }) => {
    const { slug }: { slug: string } = useParams();

    const [firstSlug, secondSlug] = slug.split("-vs-").map((part) =>
        slugify(part, { lower: true, strict: true })
    );

    const filteredContent = data.sectionContent
        .map((section) => ({
            ...section,
            content: section.content
                .map((content) => {
                    const filteredDropDownList = (content.dropDownList || []).filter((item: DropDownItem) =>
                        [firstSlug, secondSlug].includes(
                            slugify(item.dropDownItemNameSlug?.current || "", {
                                lower: true,
                                strict: true,
                            })
                        )
                    );

                    return {
                        ...content,
                        dropDownList: filteredDropDownList,
                    };
                })
                .filter((content) => content.dropDownList.length > 0),
        }))
        .filter((section) => section.content.length > 0);

    if (!filteredContent || filteredContent.length === 0) {
        return <div>No comparison data available for this slug.</div>;
    }

    return (
        <div className="py-8 px-2 sm:px-6 lg:px-[15%]">
            <div className="flex items-center justify-center">
                <h1 className="text-2xl sm:text-3xl font-bold text-[#da3654] capitalize">
                    {firstSlug} vs {secondSlug}
                </h1>
            </div>

            {filteredContent.map((section, sectionIdx) => (
                <div key={sectionIdx}>

                    {section.content.map((content, contentIdx) => (
                        <div key={`content-${contentIdx}`}>
                            {content.dropDownList.map((item, itemIdx) => {
                                return (
                                    <div key={`item-${itemIdx}`} className="p-4">
                                        <span className="inline-block bg-[#da3654] text-white font-semibold py-2 px-4 rounded">
                                            {item.dropDownItemName}
                                        </span>

                                        <div className="flex flex-col md:flex-row items-center gap-4">
                                            <div className="[&>p]:text-base leading-3 flex flex-col gap-2 sm:[&>p]:text-xl">
                                                {item.dropDownItemContext && (
                                                    <PortableText
                                                        value={item.dropDownItemContext}
                                                        components={customComponents}
                                                    />
                                                )}
                                            </div>
                                            {item.dropDownItemImage && (
                                                <Image
                                                    src={urlFor(item.dropDownItemImage.asset)}
                                                    alt={item.dropDownItemName || "Drop Down Item"}
                                                    width={200}
                                                    height={200}
                                                    loading="lazy"
                                                    className="rounded-md"
                                                />
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}

                    {section.content.map((content, contentIdx) => (
                        <div key={`features-${contentIdx}`} className="mt-6 flex justify-center rounded-lg bg-[#f4fbff] border border-[#da3654] w-auto max-w-fit mx-auto">
                            {content.dropDownList.map((item, itemIdx) => (
                                <div key={`features-item-${itemIdx}`} className="p-5 sm:p-10 md:p-16 border border-[#da3654]">
                                    <h3 className="text-xl font-semibold text-[#da3654] mb-4 text-center">{item.dropDownItemName}</h3>
                                    <div className="[&>p]:text-base sm:[&>p]:text-lg leading-8 sm:leading-10">
                                        {item.dropDownItemFeatures && (
                                            <PortableText
                                                value={item.dropDownItemFeatures}
                                                components={customComponents}
                                            />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}

                    <div className="mt-6">
                        <table className="min-w-full table-auto border-collapse bg-compare-custom-gradient">
                            <thead>
                                <tr className="border-b">
                                    <th className="py-2 px-4 text-left text-white font-medium text-lg">FrameWorks</th>
                                    <th className="py-2 px-4 text-left text-white font-medium text-lg capitalize">{firstSlug}</th>
                                    <th className="py-2 px-4 text-left text-white font-medium text-lg capitalize">{secondSlug}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {section.tableContent.map((tableContentItem, idx) => (
                                    <tr key={`table-content-${idx}`}>
                                        <td className="py-2 px-4 font-medium text-white">{tableContentItem}</td>

                                        <td className="py-2 px-4">
                                            {section.content.flatMap((content) =>
                                                content.dropDownList.flatMap((item) =>
                                                    item.tableContentField
                                                        ?.filter((field) => field.fieldName === tableContentItem)
                                                        .map((field, fieldIdx) => {
                                                            if (slugify(item.dropDownItemNameSlug?.current || "", {
                                                                lower: true,
                                                                strict: true,
                                                            }) === firstSlug) {
                                                                return (
                                                                    <div key={`field-${idx}-${fieldIdx}`} className="text-white">
                                                                        {field.fieldValue}
                                                                    </div>
                                                                );
                                                            }
                                                            return null;
                                                        })
                                                )
                                            )}
                                        </td>

                                        <td className="py-2 px-4">
                                            {section.content.flatMap((content) =>
                                                content.dropDownList.flatMap((item) =>
                                                    item.tableContentField
                                                        ?.filter((field) => field.fieldName === tableContentItem)
                                                        .map((field, fieldIdx) => {
                                                            if (slugify(item.dropDownItemNameSlug?.current || "", {
                                                                lower: true,
                                                                strict: true,
                                                            }) === secondSlug) {
                                                                return (
                                                                    <div key={`field-${idx}-${fieldIdx}`} className="text-white">
                                                                        {field.fieldValue}
                                                                    </div>
                                                                );
                                                            }
                                                            return null;
                                                        })
                                                )
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default Comparison;
