import * as React from "react";
import Image from "next/image";
import { useMedia } from "@/utils/useMedia";

export default function Linescore({
  innings,
  homeTeam,
  awayTeam,
  homeId,
  awayId,
  teams,
  homeRecord,
  awayRecord,
}) {
  const {
    home: { runs: homeTeamRuns, hits: homeTeamHits, errors: homeTeamErrors },
    away: { runs: awayTeamRuns, hits: awayTeamHits, errors: awayTeamErrors },
  } = teams;

  const { homeWs, homeLs } = homeRecord;

  const { awayWs, awayLs } = awayRecord;

  const awayLogo = useMedia(awayId).logo("cap", "light");
  const homeLogo = useMedia(homeId).logo("cap", "light");

  const logoHeight = "clamp(2.5rem, 0.705rem + 6.711vw, 5rem)";
  const rowHeight = "clamp(3rem, 0.846rem + 8.054vw, 6rem)";
  const textSize = "clamp(1rem, 0.82rem + 0.671vw, 1.25rem)";
  const textHeight = "clamp(1.5rem, 1.32rem + 0.671vw, 1.75rem)";

  return (
    <div className="mx-auto grid w-11/12 max-w-4xl grid-cols-[20%_60%_20%] rounded-xl bg-slate-500 py-4">
      <div className="grid grid-rows-[20%_40%_40%]">
        <div className="row-start-2 row-end-4">
          <div
            style={{ height: rowHeight }}
            className="flex items-center justify-end pe-2 md:gap-3"
          >
            <div
              style={{ width: logoHeight }}
              className="relative aspect-square"
            >
              <Image
                src={awayLogo}
                alt={`${awayTeam} Logo`}
                fill
                className="absolute inset-0"
              />
            </div>
            <span className="hidden text-xs font-light md:flex lg:text-sm xl:text-base">
              ({awayWs}-{awayLs})
            </span>
          </div>
          <div
            style={{ height: rowHeight }}
            className="flex items-center justify-end pe-2 md:gap-3"
          >
            <div
              style={{ width: logoHeight }}
              className="relative aspect-square"
            >
              <Image
                src={homeLogo}
                alt={`${homeTeam} Logo`}
                fill
                className="absolute inset-0"
              />
            </div>
            <span className="hidden text-xs font-light md:flex lg:text-sm xl:text-base">
              ({homeWs}-{homeLs})
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-rows-[20%_40%_40%]">
        {innings.map((inning, index) => {
          const {
            num: number,
            home: { runs: runsHome },
            away: { runs: runsAway },
          } = inning;

          return (
            <React.Fragment key={index}>
              <div className="row-start-1">
                <div
                  style={{ fontSize: textSize, lineHeight: textHeight }}
                  className="flex items-center justify-center font-bold"
                >
                  <div>{number}</div>
                </div>
              </div>
              <div className="row-start-2 row-end-4">
                <div
                  style={{
                    height: rowHeight,
                    fontSize: textSize,
                    lineHeight: textHeight,
                  }}
                  className="flex items-center justify-center"
                >
                  <div>{runsAway}</div>
                </div>
                <div
                  style={{
                    height: rowHeight,
                    fontSize: textSize,
                    lineHeight: textHeight,
                  }}
                  className="flex items-center justify-center"
                >
                  <div>{runsHome}</div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <div className="grid grid-rows-[20%_40%_40%] rounded-s-xl bg-slate-600 px-1">
        <div className="row-start-1">
          <div
            style={{ fontSize: textSize, lineHeight: textHeight }}
            className="flex items-center justify-around font-bold"
          >
            <div>R</div>
            <div>H</div>
            <div>E</div>
          </div>
        </div>
        <div className="row-start-2 row-end-4">
          <div
            style={{
              height: rowHeight,
              fontSize: textSize,
              lineHeight: textHeight,
            }}
            className="flex items-center justify-around"
          >
            <div>{awayTeamRuns}</div>
            <div>{awayTeamHits}</div>
            <div>{awayTeamErrors}</div>
          </div>
          <div
            style={{
              height: rowHeight,
              fontSize: textSize,
              lineHeight: textHeight,
            }}
            className="flex items-center justify-around"
          >
            <div>{homeTeamRuns}</div>
            <div>{homeTeamHits}</div>
            <div>{homeTeamErrors}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
