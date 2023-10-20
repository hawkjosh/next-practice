import { twMerge } from "tailwind-merge";

export default function ResultsBadge({
  gameIdGm2,
  result,
  resultGm2,
  rescheduled,
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
      {rescheduled && (
        <div className="absolute bottom-[2%] w-full bg-[yellow] text-center text-[11px] font-bold tracking-tighter text-rose-500 md:text-sm xl:text-base">
          Rain Out
        </div>
      )}
      <div className="absolute bottom-[2%] right-[5%] flex items-center justify-center space-x-[0.25rem]">
        <span
          className={twMerge(
            `text-[11px] font-extrabold md:text-sm xl:text-base`,
            color,
          )}
        >
          {rescheduled ? null : result}
        </span>
        {gameIdGm2 && (
          <>
            <span className="text-[11px] font-semibold text-slate-500 md:text-sm xl:text-base">
              |
            </span>
            <span
              className={twMerge(
                `text-[11px] font-extrabold md:text-sm xl:text-base`,
                colorTwo,
              )}
            >
              {resultGm2}
            </span>
          </>
        )}
      </div>
    </>
  );
}
