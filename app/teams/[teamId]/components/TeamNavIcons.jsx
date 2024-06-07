"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as navIcon from "./IconComponents";

export default function TeamNavIcons({ teamId }) {
  const pathname = usePathname();

  return (
    <div className="flex items-center w-full justify-evenly md:w-max md:justify-center md:gap-8">
      {pathname !== `/teams/${teamId}` && (
        <Link href={`/teams/${teamId}`} className="group">
          <navIcon.TeamHomeIcon className="h-[1.375rem] w-auto fill-transparent stroke-white stroke-1 [stroke-linejoin:rounded] [stroke-linecap:rounded] opacity-60 transition-all group-hover:scale-110 group-hover:opacity-100 xl:h-[2rem]" />
        </Link>
      )}
      {pathname !== `/teams/${teamId}/schedule` && (
        <Link href={`/teams/${teamId}/schedule`} className="group">
          <navIcon.TeamScheduleIcon className="h-[2.5rem] w-auto fill-white opacity-60 transition-all group-hover:scale-110 group-hover:opacity-100 xl:h-[3.5rem]" />
        </Link>
      )}
      {pathname !== `/teams/${teamId}/roster` && (
        <Link href={`/teams/${teamId}/roster`} className="group">
          <navIcon.TeamRosterIcon className="h-[2.5rem] w-auto fill-white opacity-60 transition-all group-hover:scale-110 group-hover:opacity-100 xl:h-[3.5rem]" />
        </Link>
      )}
      <Link href={`/teams`} className="group">
        <navIcon.MlbMonoIcon className="h-[2rem] w-auto fill-white opacity-60 transition-all group-hover:scale-110 group-hover:opacity-100 xl:h-[3rem]" />
      </Link>
    </div>
  );
}
