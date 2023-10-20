import Image from "next/image";
import { useMedia } from "@/utils/useMedia";
import TeamNavIcons from "./TeamNavIcons";

export default function TeamNavbar({
  teamId,
  teamName,
  color1,
  color2,
  color3,
  color4,
}) {
  return (
    <div
      style={{
        background:
          teamId === "139" || teamId === "140" || teamId === "146"
            ? color3
            : teamId === "135" || teamId === "137"
            ? color2
            : color1,
        borderColor: color4,
      }}
      className="sticky top-0 z-10 border-b-2 @container/teamNav"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-4 px-3 py-2 @[80.75rem]/teamNav:px-0 md:flex-row md:justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={
              teamId === "135"
                ? useMedia(teamId).logo("primary", "light")
                : useMedia(teamId).logo("primary", "dark")
            }
            width={100}
            height={100}
            alt={`${teamName} Logo`}
            priority
            className="h-[4rem] w-auto sm:h-[4.75rem] md:h-[5.5rem] lg:h-[6.25rem] xl:h-[7rem]"
          />
          <div
            style={{ color: color4 }}
            className="text-xl font-bold uppercase sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl"
          >
            {teamId === "114" ? "cleveland guardians" : teamName}
          </div>
        </div>
        <TeamNavIcons teamId={teamId} color3={color3} />
      </div>
    </div>
  );
}
