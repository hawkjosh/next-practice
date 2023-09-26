import Image from 'next/image'
import Link from 'next/link'
import * as logo from '@/utils/useMediaUrl'

export default function TeamPagesHeader({ id, franchiseName, clubName }) {
	return (
		<Link
			href={`/${id}`}
			className='flex flex-col items-center gap-6 pb-6 border-b-4 justify-evenly sm:flex-row sm:gap-2 sm:px-4'>
			<Image
				src={logo.logoUrlPrimDrk(id)}
				width={100}
				height={100}
				alt={`${clubName} Logo`}
				priority
				className='w-1/3 h-auto max-w-xs min-w-[10rem] sm:w-1/4'
			/>
			<div className='flex items-center gap-2.5 sm:flex-col sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8'>
				<div className='text-2xl font-bold uppercase sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
					{franchiseName}
				</div>
				<div className='text-2xl font-bold uppercase sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
					{clubName}
				</div>
			</div>
		</Link>
	)
}
