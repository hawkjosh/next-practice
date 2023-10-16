import { getTeam } from "@/lib/getMlbData";

// Components
import TeamRecords from "./components/TeamRecords";

export default async function TeamDashboardPage({ params }) {
  const teamId = params.teamId;
  const {
    teams: [
      {
        springLeague,
        venue: { name: stadiumName },
        locationName,
        firstYearOfPlay,
        league: { name: leagueName, abbreviation: leagueShortName },
        division: { name: divisionName, nameShort: divisionShortName },
        springVenue,
        record: {
          streak: { streakCode },
          divisionRank,
          leagueRank,
          gamesPlayed,
          wildCardGamesBack,
          leagueGamesBack,
          divisionGamesBack,
          leagueRecord: {
            wins: leagueWins,
            losses: leagueLosses,
            pct: leaguePct,
          },
          records,
          runsAllowed,
          runsScored,
          runDifferential,
        },
      },
    ],
  } = await getTeam(teamId);

  const {
    name: springStadiumName,
    location: { city: springStadiumCity, stateAbbrev: springStadiumState },
    fieldInfo: {
      capacity: springStadiumCapacity,
      turfType: springStadiumTurfType,
      roofType: springStadiumRoofType,
    },
  } = springVenue;

  const { name: springLeagueName } = springLeague;

  return (
    <div className="flex w-full flex-col gap-8">
      <TeamRecords leagueName={leagueShortName} records={records} />

      {/* <div className="mx-auto flex w-3/4 flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="mb-2 mt-3 text-2xl font-semibold uppercase">
            2023 General Info:
          </div>
          <div>
            Games Played: <strong className="text-lg">{gamesPlayed}</strong>
          </div>
          <div>
            Record:{" "}
            <strong className="text-lg">
              {leagueWins} - {leagueLosses}
            </strong>
          </div>
          <div>
            Win%: <strong className="text-lg">{leaguePct}</strong>
          </div>
          <div>
            Streak: <strong className="text-lg">{streakCode}</strong>
          </div>
          <div>
            Scored: <strong className="text-lg">{runsScored}</strong> | Allowed:{" "}
            <strong className="text-lg">{runsAllowed}</strong>
          </div>
          <div>
            Run Differential:{" "}
            <strong className="text-lg">{runDifferential}</strong>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="mb-2 mt-3 text-2xl font-semibold uppercase">
            2023 Standings Info:
          </div>
          <div>
            League: <strong className="text-lg">{leagueName}</strong>
          </div>
          <div>
            {leagueShortName} Rank:{" "}
            <strong className="text-lg">{leagueRank}</strong>
          </div>
          <div>
            {leagueShortName} Games Back:{" "}
            <strong className="text-lg">{leagueGamesBack}</strong>
          </div>
          <div>
            Division: <strong className="text-lg">{divisionName}</strong>
          </div>
          <div>
            {divisionShortName} Rank:{" "}
            <strong className="text-lg">{divisionRank}</strong>
          </div>
          <div>
            {divisionShortName} Games Back:{" "}
            <strong className="text-lg">{divisionGamesBack}</strong>
          </div>
          <div>
            Wild Card Games Back:{" "}
            <strong className="text-lg">{wildCardGamesBack}</strong>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="mb-2 mt-3 text-2xl font-semibold uppercase">
            Spring League Info:
          </div>
          <div>
            League Name -{" "}
            <strong className="text-lg">{springLeagueName}</strong>
          </div>
          <div>
            Stadium - <strong className="text-lg">{springStadiumName}</strong>
          </div>
          <div>
            Location -{" "}
            <strong className="text-lg">
              {springStadiumCity}, {springStadiumState}
            </strong>
          </div>
          <div>
            Capacity -{" "}
            <strong className="text-lg">{springStadiumCapacity}</strong>
          </div>
          <div>
            Turf Type -{" "}
            <strong className="text-lg">{springStadiumTurfType}</strong>
          </div>
          <div>
            Roof Type -{" "}
            <strong className="text-lg">{springStadiumRoofType}</strong>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="mb-2 mt-3 text-2xl font-semibold uppercase">
            Other Info:
          </div>
          <div>
            Stadium: <strong className="text-lg">{stadiumName}</strong>
          </div>
          <div>
            Location: <strong className="text-lg">{locationName}</strong>
          </div>
          <div>
            First Year of Play:{" "}
            <strong className="text-lg">{firstYearOfPlay}</strong>
          </div>
        </div>
      </div> */}
    </div>
  );
}
