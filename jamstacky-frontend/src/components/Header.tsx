import Link from 'next/link';
import { HEADER_QUERY } from '../sanity/sanityQueries/headerQueries';
import { client } from '../sanity/lib/sanityClient';
import { HeaderData } from '../sanity/types/headerType';
import Image from 'next/image';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default async function Header() {
  const headerData: HeaderData = await client.fetch(HEADER_QUERY);

  return (
    <header className="py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
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

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-8">
          {headerData.navigationItems?.map((item, index) => (
            <Link key={index} href={item.link}>
              <div className="text-gray-600 hover:text-gray-800 font-medium text-2xl">
                {item.label}
              </div>
            </Link>
          ))}
          <button className="bg-[#222549] hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
            <span className='text-xl'>⚡Lets chat</span>
          </button>
        </div>

        {/* Mobile Menu - Sheet */}
        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="bg-[#222549] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                ☰
              </button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Navigate through the sections</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-4">
                {headerData.navigationItems?.map((item, index) => (
                  <Link key={index} href={item.link}>
                    <div className="text-gray-600 hover:text-gray-800 font-medium text-lg">
                      {item.label}
                    </div>
                  </Link>
                ))}
                <button className="bg-[#222549] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4">
                  <span className='text-lg'>⚡Lets chat</span>
                </button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
