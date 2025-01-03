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
              width={200}
              height={500}
              src={headerData.logoImage?.asset?.url || '/logo.svg'}
              alt="Jamstacky Logo"
            />
          </div>
        </Link>
        <nav className="flex items-center gap-8">
          {headerData.navigationItems?.map((item, index) => (
            <Link key={index} href={item.link}>
              <div className="text-gray-600 hover:text-gray-800 font-medium text-2xl">
                {item.label}
              </div>
            </Link>
          ))}
          <button className="bg-[#222549] hover:bg-blue-700 text-white font-bold py-6 px-6 rounded-full hidden sm:inline-flex items-center">
            <span className='text-xl'>⚡Lets chat</span>
          </button>

        </nav>
      </div>
    </header>
  );
}
