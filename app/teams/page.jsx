import Link from 'next/link'
import Image from 'next/image'
import getTeams from '@/lib/getTeams'

const logoUrl = 'https://www.mlbstatic.com/team-logos/team-cap-on-light'

export default async function TeamsPage() {
	const teams = await getTeams()
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
								src={`${logoUrl}/${team.id}.svg`}
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
