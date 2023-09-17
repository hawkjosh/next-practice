import Link from 'next/link'
import Image from 'next/image'
import { getTeam } from '@/lib/getMlbData'
import * as logo from '@/utils/useMediaUrl'

export default async function TeamDashboardPage({ params }) {
	// const data = await getTeam(params.teamId)
	// const {id: teamId, name: longName, teamName: shortName} = data[0]

	const {teams} = await getTeam(params.teamId)
	console.log(teams[0])

	return (
		<main>
			{/* <div className='page-container'>
				<div className='page-header'>
					<Image
						src={logo.logoUrlPrimLt(teamId)}
						width={1}
						height={1}
						alt={`${shortName} Logo`}
					/>
					<div className='page-title'>{longName} Dashboard</div>
				</div>
				<div>
					<Link href={`/${teamId}/schedule`}>Schedule</Link>
					<Link href={`/${teamId}/roster`}>Roster</Link>
					<Link href={`/${teamId}/calendar`}>Calendar</Link>
				</div>
			</div> */}
			<div className='page-container'>
				<div className='page-header'>
					{/* <Image
						src={logo.logoUrlPrimLt(teamId)}
						width={1}
						height={1}
						alt={`${shortName} Logo`}
					/> */}
					<div className='page-title'></div>
				</div>
				<div>
					<Link href='#'>Schedule</Link>
					<Link href='#'>Roster</Link>
					<Link href='#'>Calendar</Link>
				</div>
			</div>
		</main>
	)
}
