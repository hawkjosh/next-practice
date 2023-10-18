"use client";

import Image from "next/image";
import Link from "next/link";
import { useMedia } from "@/utils/useMedia";
import { usePathname } from "next/navigation";
import { BsCalendar3 } from "react-icons/bs";
import { BsFillPersonLinesFill } from "react-icons/bs";

const NavIcons = ({ teamId }) => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <>
      {segments.length === 1 ? (
        <Link
          href={`/${teamId}/roster`}
          className="text-xl transition-transform hover:scale-125 hover:text-yellow-400 md:text-2xl xl:text-3xl"
        >
          <BsFillPersonLinesFill size="2rem" />
        </Link>
      ) : segments.length === 2 && segments[1] === "roster" ? (
        <Link
          href={`/${teamId}`}
          className="text-xl transition-transform hover:scale-125 hover:text-yellow-400 md:text-2xl xl:text-3xl"
        >
          <BsCalendar3 size="2rem" />
        </Link>
      ) : segments.length === 2 && segments[1] !== "roster" ? (
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
          <Link
            href={`/${teamId}/roster`}
            className="text-xl transition-transform hover:scale-125 hover:text-yellow-400 md:text-2xl xl:text-3xl"
          >
            <BsFillPersonLinesFill size="2rem" />
          </Link>

          <Link
            href={`/${teamId}`}
            className="text-xl transition-transform hover:scale-125 hover:text-yellow-400 md:text-2xl xl:text-3xl"
          >
            <BsCalendar3 size="2rem" />
          </Link>
        </div>
      ) : segments.length > 2 && segments[1] === "roster" ? (
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
          <Link
            href={`/${teamId}/roster`}
            className="text-xl transition-transform hover:scale-125 hover:text-yellow-400 md:text-2xl xl:text-3xl"
          >
            <BsFillPersonLinesFill size="2rem" />
          </Link>

          <Link
            href={`/${teamId}`}
            className="text-xl transition-transform hover:scale-125 hover:text-yellow-400 md:text-2xl xl:text-3xl"
          >
            <BsCalendar3 size="2rem" />
          </Link>
        </div>
      ) : null}
    </>
  );
};

const TeamHeader = ({ teamId, teamName, clubName, color }) => {
  return (
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
  );
};

export default function TeamPagesHeader({ teamId, teamName, clubName, color }) {
  return (
    <div className="flex items-center py-4 justify-evenly">
      <TeamHeader
        teamId={teamId}
        teamName={teamName}
        clubName={clubName}
        color={color}
      />
      <NavIcons teamId={teamId} />
    </div>
  );
}
