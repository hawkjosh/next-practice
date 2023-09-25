import Link from 'next/link'
import Image from 'next/image'
import { getTeams } from '@/lib/getMlbData'
import * as logo from '@/utils/useMediaUrl'

export default async function HomePage() {
	const teamsResult = await getTeams()
	
	const { teams } = teamsResult
	
	teams.sort((a, b) => {
		if (a.name < b.name) return -1
		if (a.name > b.name) return 1
		return 0
	})

	return (
		<div className='container max-w-screen-xl mx-auto'>
			<div className='flex flex-col items-center gap-8 mb-6 md:gap-10 xl:gap-12'>
				<div className='text-2xl font-semibold md:text-3xl lg:text-4xl xl:text-5xl'>
					Choose a team...
				</div>
				<div className='grid w-[70%] grid-cols-3 mx-auto gap-x-1.5 gap-y-9 grid-flow-dense place-items-center md:grid-cols-5 md:w-11/12 lg:grid-cols-6 md:gap-y-10'>
					{teams.map((team, key) => {
						const { id: teamId, clubName: teamName } = team
						return (
							<Link
								key={key}
								href={`/${teamId}`}
								className='relative flex items-center justify-center w-[5rem] transition-transform duration-500 rounded-full group bg-slate-500 aspect-square sm:w-[6rem] md:w-[6.5rem] xl:w-[7rem] hover:scale-125 hover:-translate-y-4'>
								<Image
									src={logo.logoUrlCapLt(teamId)}
									width={100}
									height={100}
									alt={`${teamName} Logo`}
									className='w-[3rem] transition-transform duration-500 aspect-square sm:w-[3.5rem] md:w-[4rem] xl:w-[4.5rem] group-hover:scale-110'
								/>
								<div className='absolute w-full text-xs text-center transition-opacity duration-500 -translate-x-1/2 opacity-0 -bottom-4 left-1/2 sm:-bottom-5 sm:text-sm xl:-bottom-6 xl:text-base group-hover:opacity-100'>
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
