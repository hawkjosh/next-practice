import Link from 'next/link'
import Image from 'next/image'
import { getAllTeams } from '@/lib/getMlbData'
import { logoUrl } from '@/utils/useMediaUrl'

export default async function AllTeamsPage() {
	const teams = await getAllTeams()
	return (
		<main>
			<div className='page-container'>
				<div className='page-title'>Teams</div>
				<div className='home'>
					{teams.map((team) => (
						<Link
							key={team.id}
							href={`/teams/${team.id}`}
							className='team-choice'>
							<Image
								src={logoUrl(team.id)}
								width={1}
								height={1}
								alt={`${team.clubName} Logo`}
							/>
							<div>{team.clubName}</div>
						</Link>
					))}
				</div>
			</div>
		</main>
	)
}
