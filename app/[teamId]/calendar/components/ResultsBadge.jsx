import { twMerge } from "tailwind-merge";

export default function ResultsBadge({ gameIdGm2, result, resultGm2 }) {
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
    <div className="absolute bottom-[2.5%] right-[5%] flex items-center justify-center space-x-[0.25rem]">
      <span
        className={twMerge(`text-[11px] md:text-sm xl:text-base font-extrabold`, color)}
      >
        {result}
      </span>
      {gameIdGm2 && (
        <>
          <span className="text-[11px] font-semibold text-slate-500 md:text-sm xl:text-base">
            |
          </span>
          <span className={twMerge(`text-[11px] md:text-sm xl:text-base font-extrabold`, colorTwo)}>
            {resultGm2}
          </span>
        </>
      )}
    </div>
  );
}
