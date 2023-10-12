import Link from 'next/link'
import Image from 'next/image'
import { getRoster } from '@/lib/getMlbData'
import { useMedia } from '@/utils/useMedia'

export default async function TeamRosterPage({ params }) {
	const teamId = params.teamId
	const { roster } = await getRoster(teamId)

	roster.sort(
		(a, b) => parseInt(a.jerseyNumber, 10) - parseInt(b.jerseyNumber, 10)
	)

	return (
		<div className='flex flex-col divide-y'>
			{roster.map((player, index) => {
				const {
					person: { id: playerId, fullName: playerName },
					jerseyNumber: playerNumber,
					position: { abbreviation: playerPosition },
				} = player

				return (
					<Link
						key={index}
						href={`/${teamId}/roster/${playerId}`}
						className='flex items-center gap-4 py-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8'>
						<Image
							src={useMedia(playerId).headshot}
							width={100}
							height={100}
							alt={`${playerName} Headshot`}
							priority
							className='w-12 height-auto sm:w-14 md:w-16 lg:w-20 xl:w-24 rounded-2xl'
						/>
						<div className='flex items-center justify-center gap-2 sm:gap-3 sm:text-lg md:gap-4 md:text-xl lg:gap-5 lg:text-2xl xl:gap-6 xl:text-3xl'>
							<div className='flex px-2'># {playerNumber}</div>
							<div>•</div>
							<div className='flex px-2'>{playerName}</div>
							<div>•</div>
							<div className='flex px-2'>{playerPosition}</div>
						</div>
					</Link>
				)
			})}
		</div>
	)
}
