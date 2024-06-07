import Link from "next/link";
import Image from "next/image";
import { getTeams } from "@/lib/getMlbData";
import { useMedia } from "@/utils/useMedia";

export default async function TeamsPage() {
  const { teams } = await getTeams();

  teams.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  return (
    <div className="min-h-screen bg-[#bababa] py-4">
      <div className="mx-auto mb-4 flex max-w-screen-xl flex-col items-center gap-4 @container/home md:gap-6 xl:gap-8">
        <div className="mx-auto grid w-[95%] grid-cols-3 place-items-center gap-y-9 pt-6 @md/home:w-[85%] @lg/home:grid-cols-4 @3xl/home:w-[90%] @3xl/home:grid-cols-5 @3xl/home:gap-y-10 @5xl/home:w-[85%] @5xl/home:grid-cols-6">
          {teams.map((team, key) => {
            const { id: teamId, clubName: teamName } = team;
            return (
              <Link
                key={key}
                href={`/teams/${teamId}`}
                className="group relative flex aspect-square w-[5rem] items-center justify-center rounded-full border border-[#696969] bg-[var(--white)] shadow-lg transition-all duration-500 hover:-translate-y-4 hover:scale-125 hover:shadow-2xl sm:w-[6rem] md:w-[6.5rem] xl:w-[7rem]"
              >
                <Image
                  src={useMedia(teamId).logo("cap", "light")}
                  width={100}
                  height={100}
                  alt={`${teamName} Logo`}
                  priority
                  className="aspect-square w-[3rem] transition-transform duration-500 group-hover:scale-110 sm:w-[3.5rem] md:w-[4rem] xl:w-[4.5rem]"
                />
                <div className="absolute -bottom-4 left-1/2 w-full -translate-x-1/2 text-center text-xs text-[#041e42] opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:-bottom-5 sm:text-sm xl:-bottom-6 xl:text-base">
                  {teamName}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
