import Link from 'next/link'
import Image from 'next/image'
import { getRoster } from '@/lib/getMlbData'
import { headshotUrl } from '@/utils/useMediaUrl'

export default async function TeamRoster({ params }) {
	const roster = await getRoster(params.teamId)

	return (
		<div>
			<div className='flex flex-col divide-y'>
				{roster.map((player) => (
					<Link
						key={player.person.id}
						href={`/${params.teamId}/roster/${player.person.id}`}
						className='flex divide-x py-2 items-center'>
						<div className='flex px-2'>
							Player Name: {player.person.fullName}
						</div>
						<Image
							src={headshotUrl(player.person.id)}
							width={25}
							height={25}
							alt={`${player.person.fullName} Headshot`}
						/>
						<div className='flex px-2'>Number: {player.jerseyNumber}</div>
						<div className='flex px-2'>Position: {player.position.name}</div>
					</Link>
				))}
			</div>
		</div>
	)
}
