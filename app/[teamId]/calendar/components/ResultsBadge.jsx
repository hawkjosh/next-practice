import { twMerge } from "tailwind-merge";

export default function ResultsBadge({
  gameIdGm2,
  result,
  resultGm2,
  isComplete,
}) {

  let bgColor = "";
  result === "W" ? (bgColor = "green") : (bgColor = "rebeccapurple");
  resultGm2 === "W" ? (bgColor = "green") : (bgColor = "rebeccapurple");

  return (
    <>
      {isComplete && (
        <div className="flex w-3/4 items-center justify-center gap-1 px-2">
          <span className={twMerge(`text-xs md:text-sm xl:text-base `, `bg-[${bgColor}]`)}>
            {result}
          </span>
          {gameIdGm2 && (
            <>
              <span className="text-xs md:text-sm xl:text-base ">|</span>
              <span className={twMerge(`text-xs md:text-sm xl:text-base `, `bg-[${bgColor}]`)}>
                {resultGm2}
              </span>
            </>
          )}
        </div>
      )}
    </>
  );
}
