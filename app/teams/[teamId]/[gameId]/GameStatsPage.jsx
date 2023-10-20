import { getBoxscore, getLinescore, getGameDate } from "@/lib/getMlbData";
import Linescore from "./components/Linescore";
import OffensiveStats from "./components/OffensiveStats";
import PitchingStats from "./components/PitchingStats";

export default async function GameStatsPage({ params }) {
  const gameIds = params.gameId.split("%2C");

  const gameData = await Promise.all(
    gameIds.map(async (gameId) => {
      const [linescore, boxscore] = await Promise.all([
        getLinescore(gameId),
        getBoxscore(gameId),
      ]);

      const gameDate = await getGameDate(gameId);

      return { linescore, boxscore, gameDate };
    }),
  );

  return (
    <div className="flex flex-col w-11/12 gap-20 mx-auto">
      {gameData.map((game, index) => {
        const { innings, teams } = game.linescore;
        const {
          teams: { home, away },
        } = game.boxscore;

        const homeWin =
          home.teamStats.batting.runs > away.teamStats.batting.runs;
        const winningTeam = homeWin ? home.team.teamName : away.team.teamName;
        const winningRuns = homeWin
          ? home.teamStats.batting.runs
          : away.teamStats.batting.runs;
        const losingRuns = homeWin
          ? away.teamStats.batting.runs
          : home.teamStats.batting.runs;

        return (
          <div key={index} className="flex flex-col gap-10">
            <>
              <div className="text-3xl font-bold text-center sm:text-4xl md:text-5xl">
                {`${winningTeam} win ${winningRuns} - ${losingRuns}`}
              </div>
            </>
            <Linescore
              innings={innings}
              teams={teams}
              homeId={home.team.id}
              awayId={away.team.id}
              homeTeam={home.team.teamName}
              awayTeam={away.team.teamName}
              homeRecord={{
                homeWs: home.team.record.wins,
                homeLs: home.team.record.losses,
              }}
              awayRecord={{
                awayWs: away.team.record.wins,
                awayLs: away.team.record.losses,
              }}
            />
            <div className="flex flex-col gap-6 sm:flex-row">
              <OffensiveStats
                homeTeam={home.team.teamName}
                homeOffense={home.teamStats.batting}
                awayTeam={away.team.teamName}
                awayOffense={away.teamStats.batting}
              />
              <PitchingStats
                homeTeam={home.team.teamName}
                homePitching={home.teamStats.pitching}
                awayTeam={away.team.teamName}
                awayPitching={away.teamStats.pitching}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
