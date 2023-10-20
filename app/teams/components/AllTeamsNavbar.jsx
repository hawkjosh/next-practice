import Image from "next/image";

export default function AllTeamsNavbar() {
  return (
    <div className="sticky top-0 z-10 border-b-2 border-b-white bg-[#696969] @container/nav">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-center gap-7 py-2 @[80.75rem]/nav:ps-0 md:justify-start md:ps-3">
        <div className="flex items-center gap-4 group w-max">
          <Image
            src="/mlb_logo_color.svg"
            width={100}
            height={100}
            alt="MLB Logo"
            priority
            className="h-auto w-[6.5rem]"
          />
          <div className="text-xl font-bold text-white transition duration-300">
            MY MLB HQ
          </div>
        </div>
      </div>
    </div>
  );
}
