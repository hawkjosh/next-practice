import Link from 'next/link'

export default function TeamDashboard() {
	return (
		<div className='container mx-auto text-center'>
			<div className='text-xl uppercase'>Team Dashboard</div>
			<div className='flex flex-col'>
				<Link href='/team-dashboard/schedule' className='hover:text-red'>Schedule</Link>
				<Link href='/team-dashboard/roster'>Roster</Link>
			</div>
		</div>
	)
}
