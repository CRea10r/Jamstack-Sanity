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
          <Image
            width={200}
            height={50} // Adjusted height for a consistent aspect ratio
            src={headerData.logoImage?.asset?.url || '/logo.svg'}
            alt="Jamstacky Logo"
            layout="intrinsic" // Helps with responsive image handling and avoids layout shifts
            priority // Make sure the logo image is loaded as soon as possible
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-4">
          {headerData.navigationItems?.map((item, index) => (
            <Link key={index} href={item.link} className="text-gray-600 hover:text-gray-800 text-lg">
              {item.label}
            </Link>
          ))}
          <button className="bg-[#222549] text-white py-2 px-4 rounded-md">
            ⚡Lets chat
          </button>
        </div>

        {/* Mobile Menu - Sheet */}
        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="bg-[#222549] text-white py-2 px-4 rounded-md">
                ☰
              </button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Navigate through the sections</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-2">
                {headerData.navigationItems?.map((item, index) => (
                  <Link key={index} href={item.link} className="text-gray-600 hover:text-gray-800 text-lg">
                    {item.label}
                  </Link>
                ))}
                <button className="bg-[#222549] text-white py-2 px-4 rounded-md mt-2">
                  ⚡Lets chat
                </button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
