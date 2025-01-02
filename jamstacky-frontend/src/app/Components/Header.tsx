import Link from 'next/link';
import { HEADER_QUERY } from '../sanity/sanityQueries/headerQueries';
import { client } from '../sanity/lib/sanityClient';
import { HeaderData } from '../sanity/types/headerType';
import Image from 'next/image';

export default async function Header() {
  const headerData: HeaderData = await client.fetch(HEADER_QUERY);

  return (
    <header className="py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center">
            <Image
              width={150}
              height={150}
              src={headerData.logoImage?.asset?.url || '/logo.svg'}
              alt="Jamstacky Logo"
              className="h-8"
            />
          </div>
        </Link>
        <nav className="flex items-center gap-8">
          {headerData.navigationItems?.map((item, index) => (
            <Link key={index} href={item.link}>
              <div className="text-gray-600 hover:text-gray-800 font-medium">
                {item.label}
              </div>
            </Link>
          ))}
          <button className="bg-[#222549] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full hidden sm:inline-flex items-center">
            <span className="inline-block mr-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v 7l9-11h-7z"
                />
              </svg>
            </span>
            <span>Get Started</span>
          </button>

        </nav>
      </div>
    </header>
  );
}
