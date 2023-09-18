import Link from 'next/link'
import Image from 'next/image'
import { getRoster } from '@/lib/getMlbData'
import { headshotUrl } from '@/utils/useMediaUrl'

export default async function TeamRoster({ params }) {
	const roster = await getRoster(params.teamId)

	return (
		<div>
			<div className='flex flex-col divide-y'>
				{roster.map((player, index) => {
					const {
						person: { id: playerId, fullName: playerName },
						jerseyNumber: playerNumber,
						position: { name: playerPosition },
					} = player
					return (
						<Link
							key={index}
							href={`/${params.teamId}/roster/${playerId}`}
							className='flex items-center py-2 divide-x'>
							<div className='flex px-2'>Player Name: {playerName}</div>
							<Image
								src={headshotUrl(playerId)}
								width={100}
								height={100}
								alt={`${playerName} Headshot`}
								className='w-12 height-auto sm:w-14 md:w-16 lg:w-20 xl:w-24'
							/>
							<div className='flex px-2'>Number: {playerNumber}</div>
							<div className='flex px-2'>Position: {playerPosition}</div>
						</Link>
					)
				})}
			</div>
		</div>
	)
}
