import Image from 'next/image'
import { getPlayer } from '@/lib/getMlbData'
import { headshotUrl } from '@/utils/useMediaUrl'

export default async function PlayerInfo({ params }) {
	const people = await getPlayer(params.playerId)
	const player = people[0]
	return (
		<div>
			<div className='flex flex-col divide-y'>
				<div className='flex px-2'>Player Name: {player.fullName}</div>
				<Image
					src={headshotUrl(player.id)}
					width={100}
					height={100}
					alt={`${player.fullName} Headshot`}
					className='w-32 height-auto lg:w-48 xl:w-64'
				/>
				<div className='flex px-2'>Number: {player.primaryNumber}</div>
				<div className='flex px-2'>
					Position: {player.primaryPosition.abbreviation}
				</div>
			</div>
		</div>
	)
}
