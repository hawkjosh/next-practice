import Link from "next/link";
import Image from "next/image";
import { useMedia } from "@/utils/useMedia";

import ResultsBadge from "./ResultsBadge";

export default function TeamCalendar({
  calendarTitle,
  calendarData,
  emptyCells,
  teamId,
}) {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="flex flex-col w-full gap-3 pb-4">
      <div className="text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
        {calendarTitle}
      </div>
      <div className="grid w-11/12 grid-cols-7 mx-auto place-items-center">
        {weekdays.map((day, index) => (
          <div key={index} className="font-semibold md:text-lg xl:text-xl">
            {day}
          </div>
        ))}
      </div>
      <div className="grid w-11/12 grid-cols-7 mx-auto">
        {emptyCells}
        {calendarData.map((day, index) => {
          let gameIds = "";
          if (day.info) {
            gameIds = day.info.gameId;
            if (day.info.gameIdGm2) {
              gameIds += `,${day.info.gameIdGm2}`;
            }
          }

          let result = null;
          if (day.info) {
            const winningTeam = day.info.homeWin
              ? day.info.homeId
              : day.info.awayId;
            winningTeam === parseInt(teamId) ? (result = "W") : (result = "L");
          }

          let resultGm2 = null;
          if (day.info && day.info.gameIdGm2) {
            const winningTeam = day.info.homeWinGm2
              ? day.info.homeId
              : day.info.awayId;
            winningTeam === parseInt(teamId)
              ? (resultGm2 = "W")
              : (resultGm2 = "L");
          }

          return (
            <div
              key={index}
              className="relative -mb-0.5 -mr-0.5 h-16 border-2 border-slate-500 bg-slate-100 md:h-20 lg:h-24 xl:h-28"
            >
              <div className="absolute right-[5%] top-[2.5%] text-xs text-slate-500 md:text-sm xl:text-base">
                {day.date}
              </div>
              {day.info && (
                <Link
                  href={day.info.rescheduled ? '#' : `/teams/${teamId}/${gameIds}`}
                  className="flex items-center justify-center w-full h-full"
                >
                  <div className="flex items-center justify-center gap-1 md:gap-2">
                    <div className="text-xs font-semibold text-slate-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
                      {day.info.homeId === parseInt(teamId) ? "vs" : "@"}
                    </div>
                    <Image
                      src={
                        day.info.homeId === parseInt(teamId)
                          ? useMedia(day.info.awayId).logo("cap", "light")
                          : useMedia(day.info.homeId).logo("cap", "light")
                      }
                      width={100}
                      height={100}
                      alt="team logo"
                      priority
                      className="w-4 aspect-square sm:w-6 md:w-8 lg:w-10 xl:w-12"
                    />
                  </div>
                  <div className="absolute left-[5%] top-0 p-[2px] text-xs font-extrabold text-slate-500 sm:text-sm">
                    {day.info.gameIdGm2 ? "DH" : null}
                  </div>
                  <ResultsBadge
                    result={result}
                    gameIdGm2={day.info.gameIdGm2}
                    resultGm2={resultGm2}
                    rescheduled={day.info.rescheduled}
                  />
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
