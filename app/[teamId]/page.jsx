import Link from 'next/link'
import Image from 'next/image'
import { getTeam } from '@/lib/getMlbData'
import * as logo from '@/utils/useMediaUrl'

export default async function TeamDashboardPage({ params }) {
	const teams = await getTeam(params.teamId)
	return (
		<main>
			<div className='page-container'>
				<div className='page-header'>
					<Image
						src={logo.logoUrlPrimLt(teams[0].id)}
						width={1}
						height={1}
						alt={`${teams[0].teamName} Logo`}
					/>
					<div className='page-title'>{teams[0].name} Dashboard</div>
				</div>
				<div>
					<Link href={`/${teams[0].id}/schedule`}>Schedule</Link>
					<Link href={`/${teams[0].id}/roster`}>Roster</Link>
					<Link href={`/${teams[0].id}/calendar`}>Calendar</Link>
				</div>
			</div>
		</main>
	)
}
