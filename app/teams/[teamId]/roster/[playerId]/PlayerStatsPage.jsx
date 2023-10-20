import Image from "next/image";
import { getPlayer } from "@/lib/getMlbData";
import { useMedia } from "@/utils/useMedia";

export default async function PlayerStatsPage({ params }) {
  const playerId = params.playerId;
  const {
    people: [
      {
        fullName: playerName,
        primaryNumber: playerNumber,
        primaryPosition: { abbreviation: playerPosition },
      },
    ],
  } = await getPlayer(playerId);

  return (
    <div className="flex flex-col items-center gap-4 pb-4">
      <Image
        src={useMedia(playerId).headshot}
        width={100}
        height={100}
        alt={`${playerName} Headshot`}
        priority
        className="height-auto w-[12rem] rounded-2xl p-2 sm:w-[15rem] md:w-[18rem]"
      />
      <div className="flex flex-col items-center justify-center gap-6 text-3xl">
        <div>{playerName}</div>
        <div className="flex gap-6">
          <div># {playerNumber}</div>
          <div>•</div>
          <div>{playerPosition}</div>
        </div>
      </div>
    </div>
  );
}
