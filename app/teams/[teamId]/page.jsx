import Link from 'next/link'
import Image from 'next/image'
import { getTeam } from '@/lib/getMlbData'
import { logoUrl } from '@/utils/useMediaUrl'

export default async function TeamDashboardPage({ params }) {
	const teams = await getTeam(params.teamId)
	const team = teams[0]
	return (
		<main>
			<div className='page-container'>
				<div className='page-title'>{team.name} Dashboard</div>
				<Image
					src={logoUrl(team.id)}
					width={50}
					height={50}
					alt={`${team.teamName} Logo`}
				/>
				<div>
					<Link href={`/teams/${team.id}/schedule`}>Schedule</Link>
					<Link href={`/teams/${team.id}/roster`}>Roster</Link>
				</div>
			</div>
		</main>
	)
}
