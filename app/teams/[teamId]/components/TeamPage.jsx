import { getTeam } from "@/lib/getMlbData";
import TeamNavbar from "./TeamNavbar";

export default async function TeamPage({ teamId, children }) {
  const {
    teams: [
      {
        deviceProperties: {
          teamNameDisplay,
          style: {
            basePalette: {
              headerMastheadBackgroundColor: color1,
              headerNavigationBackgroundColor: color2,
              headerNavigationBorderColor: color3,
              footerTitleColor: color4,
            },
          },
        },
      },
    ],
  } = await getTeam(teamId);

  return (
    <div
      style={{
        background:
          teamId === "135" || teamId === "137" || teamId === "146"
            ? color1
            : color2,
      }}
      className="min-h-screen pb-4 @container/main"
    >
      <TeamNavbar teamId={teamId} teamName={teamNameDisplay} color1={color1} color2={color2} color3={color3} color4={color4} />
      <div className="flex flex-col items-center max-w-screen-xl gap-2 py-4 mx-auto">
        {children}
      </div>
    </div>
  );
}
