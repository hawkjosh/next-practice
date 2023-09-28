'use client'

import Image from 'next/image'
import Link from 'next/link'
import * as logo from '@/utils/useMediaUrl'
import { usePathname } from 'next/navigation'
import { useStringFormat } from '@/utils/useStringFormat'

export default function TeamPagesHeader({ teamId, teamName, clubName, color }) {
	const pathname = usePathname()

	return (
		<div className='py-4'>
			{pathname.length > 4 ? (
				<div className='flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8'>
					<Link href={`/${teamId}`}>
					<Image
						src={logo.logoUrlPrimDrk(teamId)}
						width={100}
						height={100}
						alt={`${clubName} Logo`}
						priority
						className='h-[4rem] w-auto sm:h-[4.75rem] md:h-[5.5rem] lg:h-[6.25rem] xl:h-[7rem]'
					/>
					</Link>
					<div style={{color: color}} className='flex items-center gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-4 xl:gap-5'>
						<div className='text-2xl font-bold uppercase sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>
							{clubName}
						</div>
						<div className='text-2xl font-bold uppercase sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>
							{pathname === `/${teamId}`
								? 'dashboard'
								: useStringFormat(pathname).convertPathname}
						</div>
					</div>
				</div>
			) : (
				<div className='flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8'>
					<Image
						src={logo.logoUrlPrimDrk(teamId)}
						width={100}
						height={100}
						alt={`${clubName} Logo`}
						priority
						className='h-[4rem] w-auto sm:h-[4.75rem] md:h-[5.5rem] lg:h-[6.25rem] xl:h-[7rem]'
					/>
					<div style={{color: color}} className='text-2xl font-bold uppercase sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>
						{teamName}
					</div>
				</div>
			)}
		</div>
	)
}
