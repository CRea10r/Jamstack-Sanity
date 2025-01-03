import React from "react";
import { PortableTextReactComponents } from "@portabletext/react";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { urlFor } from "../utils/imageUtils";
import Image from "next/image";

export const customComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: { value: { asset: SanityImageSource; alt?: string } }) => (
      <Image
        src={urlFor(value.asset)}
        alt={value.alt || "Sanity Image"}
        className="my-4 rounded-lg"
      />
    ),
  },
  block: {
    h1: ({ children }) => <h1 className="text-3xl font-bold my-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold my-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-bold my-4">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg font-bold my-4">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-400 pl-4 italic my-4 text-gray-600">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => <p className="text-base my-2">{children}</p>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }: { children: React.ReactNode; value?: { href: string } }) => (
      <a
        href={value?.href || "#"}
        className="text-blue-500 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-5">{children}</ul>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
  },
};
