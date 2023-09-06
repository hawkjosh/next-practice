import Link from 'next/link'

export default function TeamDashboard() {
	return (
		<main>
			<div className='page-container'>
				<div className='page-title'>Team Dashboard</div>
				<div className='team-dashboard'>
					<Link href='/team-dashboard/schedule'>Schedule</Link>
					<Link href='/team-dashboard/roster'>Roster</Link>
				</div>
			</div>
		</main>
	)
}
