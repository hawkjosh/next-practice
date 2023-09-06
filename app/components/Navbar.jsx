'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
	const currentRoute = usePathname()
	const showBackLink =
		currentRoute !== '/' && currentRoute !== '/team-dashboard'

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
				{showBackLink && (
					<Link
						href='/team-dashboard'
						className='nav-back'>
						(Return to Team Dashboard)
					</Link>
				)}
			</div>
		</nav>
	)
}
