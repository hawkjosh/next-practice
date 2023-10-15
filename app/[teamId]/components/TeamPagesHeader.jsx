"use client";

import Image from "next/image";
import Link from "next/link";
import { useMedia } from "@/utils/useMedia";
import { usePathname } from "next/navigation";

export default function TeamPagesHeader({ teamId, teamName, clubName, color }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-8 py-4">
      {pathname.length > 4 ? (
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
          <Link href={`/${teamId}`}>
            <Image
              src={
                teamId === "135"
                  ? useMedia(teamId).logo("primary", "light")
                  : useMedia(teamId).logo("primary", "dark")
              }
              width={100}
              height={100}
              alt={`${clubName} Logo`}
              priority
              className="h-[4rem] w-auto sm:h-[4.75rem] md:h-[5.5rem] lg:h-[6.25rem] xl:h-[7rem]"
            />
          </Link>
          <div
            style={{ color: color }}
            className="flex items-center gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-4 xl:gap-5"
          >
            <div className="text-2xl font-bold uppercase sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              {clubName}
            </div>
            <div className="text-2xl font-bold uppercase sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              {/* {pathname === `/${teamId}`
                ? "dashboard"
                : pathname.replace(`/${teamId}/`, "")} */}
              {pathname === `/${teamId}`
                ? "dashboard"
                : pathname.includes("calendar")
                ? "schedule"
                : pathname.includes("roster")
                ? "roster"
                : null}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
          <Image
            src={
              teamId === "135"
                ? useMedia(teamId).logo("primary", "light")
                : useMedia(teamId).logo("primary", "dark")
            }
            width={100}
            height={100}
            alt={`${clubName} Logo`}
            priority
            className="h-[4rem] w-auto sm:h-[4.75rem] md:h-[5.5rem] lg:h-[6.25rem] xl:h-[7rem]"
          />
          <div
            style={{ color: color }}
            className="text-2xl font-bold uppercase sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
          >
            {teamId === "114" ? "cleveland guardians" : teamName}
          </div>
        </div>
      )}
      <div className="mx-auto flex w-full items-center justify-evenly sm:w-11/12 md:w-5/6 lg:w-3/4">
        {pathname.length <= 4 && (
          <>
            <Link
              href={`/${teamId}/calendar`}
              className="text-xl transition-transform hover:scale-125 hover:text-yellow-400 md:text-2xl xl:text-3xl"
            >
              Calendar
            </Link>
            <Link
              href={`/${teamId}/roster`}
              className="text-xl transition-transform hover:scale-125 hover:text-yellow-400 md:text-2xl xl:text-3xl"
            >
              Roster
            </Link>
          </>
        )}
        {pathname.length > 4 && (
          <>
            <Link
              href={`/${teamId}`}
              className="text-xl transition-transform hover:scale-125 hover:text-yellow-400 md:text-2xl xl:text-3xl"
            >
              {clubName} HQ
            </Link>
            <Link
              href={
                pathname.includes("roster")
                  ? `/${teamId}/calendar`
                  : pathname.includes("calendar")
                  ? `/${teamId}/roster`
                  : "#"
              }
              className="text-xl transition-transform hover:scale-125 hover:text-yellow-400 md:text-2xl xl:text-3xl"
            >
              {pathname.includes("roster")
                ? "Calendar"
                : pathname.includes("calendar")
                ? "Roster"
                : null}
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
