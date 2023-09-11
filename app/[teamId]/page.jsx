import Link from 'next/link'
import Image from 'next/image'
import { getTeam } from '@/lib/getMlbData'
import * as logo from '@/utils/useMediaUrl'

export default async function TeamDashboardPage({ params }) {
	const teams = await getTeam(params.teamId)
	const team = teams[0]
	return (
		<main>
			<div className='page-container'>
				<div className='page-title'>{team.name} Dashboard</div>
				<Image
					src={logo.logoUrlPrimLt(team.id)}
					width={150}
					height={150}
					alt={`${team.teamName} Logo`}
				/>
				<div>
					<Link href={`/${team.id}/schedule`}>Schedule</Link>
					<Link href={`/${team.id}/roster`}>Roster</Link>
				</div>
			</div>
		</main>
	)
}
