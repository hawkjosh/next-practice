import { twMerge } from "tailwind-merge";

export default function ResultsBadge({
  isFutureGame,
  gameStart,
  rescheduled,
  result,
  gameIdGm2,
  isFutureGameGm2,
  gameStartGm2,
  rescheduledGm2,
  resultGm2,
}) {
  let color;
  result === "W"
    ? (color = "text-[green]")
    : result === "L"
    ? (color = "text-[red]")
    : null;

  let colorTwo;
  resultGm2 === "W"
    ? (colorTwo = "text-[green]")
    : resultGm2 === "L"
    ? (colorTwo = "text-[red]")
    : null;

  return (
    <>
      {isFutureGame && (
        <div className="absolute bottom-[2%] w-full text-center text-[10px] font-semibold tracking-tighter text-slate-700 md:text-sm xl:text-base">
          {gameStart}
        </div>
      )}
      {rescheduled && (
        <div className="absolute bottom-[2%] w-full bg-[yellow] text-center text-[10px] font-bold tracking-tighter text-rose-500 md:text-sm xl:text-base">
          Postponed
        </div>
      )}
      <div className="absolute bottom-[2%] right-[5%] flex items-center justify-center space-x-[0.25rem]">
        <span
          className={twMerge(
            `text-[11px] font-extrabold md:text-sm xl:text-base`,
            color,
          )}
        >
          {rescheduled || isFutureGame ? null : result}
        </span>
        {gameIdGm2 && (
          <>
            {isFutureGameGm2 && (
              <div className="absolute bottom-[2%] w-full text-center text-[10px] font-semibold tracking-tighter text-slate-700 md:text-sm xl:text-base">
                {gameStartGm2}
              </div>
            )}
            {rescheduledGm2 && (
              <div className="absolute bottom-[2%] w-full bg-[yellow] text-center text-[10px] font-bold tracking-tighter text-rose-500 md:text-sm xl:text-base">
                Postponed
              </div>
            )}
            <span className="text-[11px] font-semibold text-slate-500 md:text-sm xl:text-base">
              |
            </span>
            <span
              className={twMerge(
                `text-[11px] font-extrabold md:text-sm xl:text-base`,
                colorTwo,
              )}
            >
              {rescheduledGm2 || isFutureGameGm2 ? null : resultGm2}
            </span>
          </>
        )}
      </div>
    </>
  );
}
