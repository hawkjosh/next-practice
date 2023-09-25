import Link from 'next/link'
import Image from 'next/image'
import { getTeam, getRoster } from '@/lib/getMlbData'
import * as logo from '@/utils/useMediaUrl'

export default async function TeamRosterPage({ params }) {
	const teamResult = await getTeam(params.teamId)
	const rosterResult = await getRoster(params.teamId)

	const {
		teams: [{ id, franchiseName, clubName }],
	} = teamResult

	const { roster } = rosterResult

	roster.sort(
		(a, b) => parseInt(a.jerseyNumber, 10) - parseInt(b.jerseyNumber, 10)
	)

	return (
		<div className='container max-w-screen-xl mx-auto'>
			<div className='flex flex-col w-11/12 gap-12 mx-auto'>
				<Link
					href={`/${id}`}
					className='flex flex-col items-center gap-6 pb-6 border-b-4 justify-evenly sm:flex-row sm:gap-2 sm:px-4'>
					<Image
						src={logo.logoUrlPrimDrk(id)}
						width={100}
						height={100}
						alt={`${clubName} Logo`}
						className='w-1/3 h-auto max-w-xs min-w-[10rem] sm:w-1/4'
					/>
					<div className='flex items-center gap-2.5 sm:flex-col sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8'>
						<div className='text-2xl font-bold uppercase sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
							{franchiseName}
						</div>
						<div className='text-2xl font-bold uppercase sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
							{clubName}
						</div>
					</div>
				</Link>
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
								href={`/${id}/roster/${playerId}`}
								className='flex items-center py-2 divide-x'>
								<div className='flex px-2'>Player Name: {playerName}</div>
								<Image
									src={logo.headshotUrl(playerId)}
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
		</div>
	)
}
