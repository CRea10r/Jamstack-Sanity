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
    <header>
      <div className="py-4 px-2 sm:px-6 lg:px-[15%] flex justify-between items-center bg-custom-gradient">

        <Link href="/">
          <Image
            width={200}
            height={50} 
            src={headerData.logoImage?.asset?.url || '/logo.svg'}
            alt="Jamstacky Logo"
            layout="intrinsic"
            priority 
          />
        </Link>
  
        <div className="hidden md:flex items-center gap-4 py-5">
          {headerData.navigationItems?.map((item, index) => (
            <Link key={index} href={item.link} className="text-gray-600 hover:text-gray-800 text-lg">
              {item.label}
            </Link>
          ))}
          <button className="bg-[#222549] text-white py-2 px-4 rounded-md">
            ⚡Lets chat
          </button>
        </div>

        <div className="md:hidden">
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
                  <Link key={index} href={`/${item.link}`}  className="text-gray-600 hover:text-gray-800 text-lg">
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
