import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
	return (
		<div className='sticky top-0 z-10 mb-10 bg-blue-500 border-b-2 border-gray-200'>
			<div className='flex items-center justify-start w-full px-3 py-4 mx-auto gap-7 max-w-7xl'>
				<Link
					href='/'
					className='flex items-center gap-4 w-max group'>
					<Image
						src='https://www.mlbstatic.com/team-logos/league-on-dark/1.svg'
						width={100}
						height={100}
						alt='MLB Logo'
						priority
						className='w-[6.5rem] h-auto'
					/>
					<div className='text-xl font-bold text-white transition duration-300 group-hover:text-yellow-400 group-hover:scale-105'>
						MLB HQ
					</div>
				</Link>
			</div>
		</div>
	)
}
