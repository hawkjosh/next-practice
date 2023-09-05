import Link from 'next/link'

export default function TeamDashboard() {
	return (
		<div>
			<div className='text-xl uppercase'>Team Dashboard</div>
			<div className='flex flex-col'>
				<Link href='/team-dashboard/schedule'>Schedule</Link>
				<Link href='/team-dashboard/roster'>Roster</Link>
        <Link href='/'>Return to MLB Home</Link>
			</div>
		</div>
	)
}
