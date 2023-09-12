import Link from 'next/link'
import Image from 'next/image'
import { getAllTeams } from '@/lib/getMlbData'
import * as logo from '@/utils/useMediaUrl'

export default async function HomePage() {
	const teams = await getAllTeams()
	
	return (
		<main>
			<div className='page-container'>
				<div className='page-content'>
					{teams.map((team) => (
						<Link
							key={team.id}
							href={`/${team.id}`}
							className='team-link'>
							<Image
								src={logo.logoUrlCapLt(team.id)}
								width={1}
								height={1}
								alt={`${team.clubName} Logo`}
							/>
							<div className='team-tooltip'>{team.clubName}</div>
						</Link>
					))}
				</div>
			</div>
		</main>
	)
}
