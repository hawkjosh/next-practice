import Image from 'next/image'
import { getPlayer } from '@/lib/getMlbData'
import * as logo from '@/utils/useMediaUrl'

export default async function PlayerStatsPage({ params }) {
	const playerId = params.playerId
	const {
		people: [
			{
				fullName: playerName,
				primaryNumber: playerNumber,
				primaryPosition: { abbreviation: playerPosition },
			},
		],
	} = await getPlayer(playerId)

	return (
		<div className='flex flex-col items-center gap-4 pb-4'>
			<Image
				src={logo.headshotUrl(playerId)}
				width={100}
				height={100}
				alt={`${playerName} Headshot`}
				priority
				className='w-[12rem] height-auto sm:w-[15rem] md:w-[18rem] p-2 rounded-2xl'
			/>
			<div className='flex flex-col justify-center items-center gap-6 text-3xl'>
				<div>{playerName}</div>
				<div className='flex gap-6'>
					<div># {playerNumber}</div>
					<div>•</div>
					<div>{playerPosition}</div>
				</div>
			</div>
		</div>
	)
}
