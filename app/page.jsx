import Link from 'next/link'

export default function Home() {
	return (
		<main>
			<div className='page-container'>
				<div className='page-title'>My MLB HQ</div>
				<div className='home'>
					<Link href='/team-dashboard'>Atlant Braves</Link>
					<Link href='https://www.mlb.com/phillies' target='_blank'>Philadelphia Phillies</Link>
				</div>
			</div>
		</main>
	)
}
