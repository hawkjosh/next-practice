import Link from 'next/link'

export default function Roster() {
	return (
		<div>
			<div>Team Roster</div>
			<div className='flex flex-col'>
			  <Link href='/team-dashboard'>Return to Team Dashboard</Link>
        <Link href='/'>Return to MLB Home</Link>
			</div>
		</div>
	)
}
