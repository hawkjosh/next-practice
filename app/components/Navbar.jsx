'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
	const pathname = usePathname()

	return (
		<div className='@container/nav sticky top-0 z-10 bg-[#696969] border-b-2 border-b-white'>
			<div className='flex items-center justify-center w-full py-2 mx-auto gap-7 max-w-7xl md:justify-start md:ps-3 @[80.75rem]/nav:ps-0'>
				<Link
					href='/'
					className='flex items-center gap-4 w-max group'>
					<Image
						src='/mlb_logo.svg'
						width={100}
						height={100}
						alt='MLB Logo'
						priority
						className='w-[6.5rem] h-auto'
					/>
					<div className='text-xl font-bold text-white transition duration-300 group-hover:text-[#041e42] group-hover:scale-110 group-hover:font-extrabold'>
						{pathname !== '/' ? 'All Teams' : 'MY MLB HQ'}
					</div>
				</Link>
			</div>
		</div>
	)
}
