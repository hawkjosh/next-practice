import Link from 'next/link'

export default function TeamPage() {
	return (
		<main>
			<div className='page-container'>
				<div className='page-title'>Team Dashboard</div>
				<div className='team'>
					<Link href='/team/schedule'>Schedule</Link>
					<Link href='/team/roster'>Roster</Link>
				</div>
			</div>
		</main>
	)
}
