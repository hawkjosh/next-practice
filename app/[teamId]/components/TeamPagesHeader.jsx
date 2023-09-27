'use client'

import Image from 'next/image'
import Link from 'next/link'
import * as logo from '@/utils/useMediaUrl'
import { usePathname } from 'next/navigation'
import { useStringFormat } from '@/utils/useStringFormat'

export default function TeamPagesHeader({ id, clubName }) {
	const pathname = usePathname()

	return (
		<div className='flex flex-col items-center gap-4 pb-4 border-b-4 border-b-[var(--borderColor)] sm:flex-row sm:justify-center sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24'>
			{pathname.length > 4 ? (
				<Link href={`/${id}`}>
					<Image
						src={logo.logoUrlCapLt(id)}
						width={100}
						height={100}
						alt={`${clubName} Logo`}
						priority
						className='w-[5rem] aspect-square sm:w-[5.75rem] md:w-[6.5rem] lg:w-[7.25rem] xl:w-[8rem]'
					/>
				</Link>
			) : (
				<Image
					src={logo.logoUrlCapLt(id)}
					width={100}
					height={100}
					alt={`${clubName} Logo`}
					priority
					className='w-[5rem] aspect-square sm:w-[5.75rem] md:w-[6.5rem] lg:w-[7.25rem] xl:w-[8rem]'
				/>
			)}
			<div className='flex items-center gap-2.5 sm:flex-col sm:gap-3 md:gap-3.5 lg:gap-4 xl:gap-5'>
				<div className='text-2xl font-bold uppercase md:text-3xl lg:text-4xl xl:text-5xl'>
					{clubName}
				</div>
				<div className='text-2xl font-bold uppercase md:text-3xl lg:text-4xl xl:text-5xl'>
					{pathname === `/${id}`
						? 'dashboard'
						: useStringFormat(pathname).convertPathname}
				</div>
			</div>
		</div>
	)
}
