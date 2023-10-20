export default function PitchingStats({
  homeTeam,
  homePitching,
  awayTeam,
  awayPitching,
}) {
  return (
    <div className="flex flex-col items-center w-full gap-4 px-4 py-2 border-2 rounded-xl">
      <div className="text-2xl uppercase">Pitching Stats</div>

      <div className="flex items-end w-full">
        <div className="flex basis-[40%] flex-col items-start gap-0.5">
          <div className="truncate">Runs</div>
          <div className="truncate">Hits</div>
          <div className="truncate">Earned Runs</div>
          <div className="truncate">ERA</div>
          <div className="truncate">WHIP</div>
          <div className="truncate">Pitches</div>
          <div className="truncate">Strikes</div>
          <div className="truncate">Balls</div>
          <div className="truncate">Strike Outs</div>
          <div className="truncate">Walks</div>
        </div>
        <div className="flex basis-[30%] flex-col items-center gap-0.5">
          <div className="w-full border-b-[1px] pb-1 text-center">
            {awayTeam}
          </div>
          <div>{awayPitching.runs}</div>
          <div>{awayPitching.hits}</div>
          <div>{awayPitching.earnedRuns}</div>
          <div>{awayPitching.era}</div>
          <div>{awayPitching.whip}</div>
          <div>{awayPitching.numberOfPitches}</div>
          <div>{awayPitching.strikes}</div>
          <div>{awayPitching.balls}</div>
          <div>{awayPitching.strikeOuts}</div>
          <div>{awayPitching.baseOnBalls}</div>
        </div>
        <div className="flex basis-[30%] flex-col items-center gap-0.5 border-l-[1px]">
          <div className="w-full border-b-[1px] pb-1 text-center">
            {homeTeam}
          </div>
          <div>{homePitching.runs}</div>
          <div>{homePitching.hits}</div>
          <div>{homePitching.earnedRuns}</div>
          <div>{homePitching.era}</div>
          <div>{homePitching.whip}</div>
          <div>{homePitching.numberOfPitches}</div>
          <div>{homePitching.strikes}</div>
          <div>{homePitching.balls}</div>
          <div>{homePitching.strikeOuts}</div>
          <div>{homePitching.baseOnBalls}</div>
        </div>
      </div>
    </div>
  );
}
