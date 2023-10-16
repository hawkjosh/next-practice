"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-10 border-b-2 border-b-white bg-[#696969] @container/nav">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-center gap-7 py-2 @[80.75rem]/nav:ps-0 md:justify-start md:ps-3">
        <Link href="/" className="group flex w-max items-center gap-4">
          <Image
            src="/mlb_logo.svg"
            width={100}
            height={100}
            alt="MLB Logo"
            priority
            className="h-auto w-[6.5rem]"
          />
          <div className="text-xl font-bold text-white transition duration-300 group-hover:scale-110 group-hover:text-[#041e42]">
            {pathname !== "/" ? "Return to All Teams" : "MY MLB HQ"}
          </div>
        </Link>
      </div>
    </div>
  );
}
