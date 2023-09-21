import Link from 'next/link'
import Image from 'next/image'
import { getTeam } from '@/lib/getMlbData'
import * as logo from '@/utils/useMediaUrl'

export default async function TeamDashboardPage({ params }) {
	const result = await getTeam(params.teamId)
	
	const {
		teams: [{ id, franchiseName, clubName }],
	} = result

	return (
		<div className='container max-w-screen-xl mx-auto'>
			<div className='flex flex-col w-11/12 gap-12 mx-auto'>
				<Link
					href={`/${id}`}
					className='flex flex-col items-center gap-6 pb-6 border-b-4 justify-evenly sm:flex-row sm:gap-2 sm:px-4'>
					<Image
						src={logo.logoUrlPrimDrk(id)}
						width={100}
						height={100}
						alt={`${clubName} Logo`}
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
				<div className='flex flex-col items-center w-full gap-12 md:flex-row md:gap-0 md:justify-evenly'>
					<Link
						href={`/${id}/roster`}
						className='text-xl transition-transform hover:scale-125 hover:text-yellow-400 md:text-2xl xl:text-3xl'>
						Roster
					</Link>
					<Link
						href={`/${id}/calendar`}
						className='text-xl transition-transform hover:scale-125 hover:text-yellow-400 md:text-2xl xl:text-3xl'>
						Calendar
					</Link>
					<Link
						href={`/${id}/results`}
						className='text-xl transition-transform hover:scale-125 hover:text-yellow-400 md:text-2xl xl:text-3xl'>
						Results
					</Link>
				</div>
			</div>
		</div>
	)
}
