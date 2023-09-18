import Link from 'next/link'
import Image from 'next/image'
import { getTeams } from '@/lib/getMlbData'
import * as logo from '@/utils/useMediaUrl'

export default async function HomePage() {
	const teams = await getTeams()

	return (
		<div className='container max-w-screen-xl mx-auto'>
			<div className='flex flex-col items-center gap-8 mb-6 md:gap-10 xl:gap-12'>
				<div className="text-2xl font-semibold md:text-3xl lg:text-4xl xl:text-5xl">Choose a team...</div>
				<div
				className='grid w-2/3 grid-cols-3 gap-4 mx-auto grid-flow-dense place-items-center md:grid-cols-5 md:w-5/6 lg:grid-cols-6'>
					{teams.map((team, key) => {
						const { id: teamId, clubName: teamName } = team
						return (
							<Link
								key={key}
								href={`/${teamId}`}
								className='team-link flex items-center justify-center transition-all duration-300 bg-slate-500 rounded-full relative hover:scale-[117.5%] w-20 aspect-square sm:w-24 md:w-28 xl:w-32 hover:mb-4 sm:hover:mb-5 xl:hover:mb-6'>
								<Image
									src={logo.logoUrlCapLt(teamId)}
									width={100}
									height={100}
									alt={`${teamName} Logo`}
									className='w-12 aspect-square sm:w-16 md:w-20 xl:w-24'
								/>
								<div className='absolute hidden w-full text-xs text-center -translate-x-1/2 -bottom-4 team-tooltip left-1/2 sm:-bottom-5 sm:text-sm xl:-bottom-6 xl:text-base'>
									{teamName}
								</div>
							</Link>
						)
					})}
				</div>
			</div>
		</div>
	)
}
