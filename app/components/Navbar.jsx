import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
	return (
		<nav>
			<div className='nav-container'>
				<Link
					href='/'
					className='nav-brand'>
					<Image
						src='https://www.mlbstatic.com/team-logos/league-on-dark/1.svg'
						width={1}
						height={1}
						alt='MLB Logo'
						priority
					/>
					<span>MLB HQ</span>
				</Link>
			</div>
		</nav>
	)
}
