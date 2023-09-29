import Link from 'next/link'
import Image from 'next/image'
import { getTeams } from '@/lib/getMlbData'
import { useMediaRender } from '@/utils/useMediaRender'

export default async function HomePage() {
	const { teams } = await getTeams()

	teams.sort((a, b) => {
		if (a.name < b.name) return -1
		if (a.name > b.name) return 1
		return 0
	})

	return (
		<div className='py-4 min-h-screen bg-[#bababa]'>
			<div className='@container/home flex flex-col items-center max-w-screen-xl gap-4 mb-4 mx-auto md:gap-6 xl:gap-8'>
				<div className='text-2xl font-semibold md:text-3xl lg:text-4xl xl:text-5xl text-[#041e42]'>
					Choose a team...
				</div>
				<div className='w-[95%] mx-auto grid grid-cols-3 place-items-center gap-y-9 @md/home:w-[85%] @lg/home:grid-cols-4 @3xl/home:w-[90%] @3xl/home:grid-cols-5 @3xl/home:gap-y-10 @5xl/home:w-[85%] @5xl/home:grid-cols-6'>
					{teams.map((team, key) => {
						const { id: teamId, clubName: teamName } = team
						return (
							<Link
								key={key}
								href={`/${teamId}`}
								className='relative flex items-center justify-center w-[5rem] transition-all duration-500 rounded-full group border border-[#696969] aspect-square sm:w-[6rem] md:w-[6.5rem] xl:w-[7rem] hover:scale-125 hover:-translate-y-4 shadow-lg hover:shadow-2xl bg-[var(--white)]'>
								<Image
									src={useMediaRender(teamId).capLight}
									width={100}
									height={100}
									alt={`${teamName} Logo`}
									priority
									className='w-[3rem] transition-transform duration-500 aspect-square sm:w-[3.5rem] md:w-[4rem] xl:w-[4.5rem] group-hover:scale-110'
								/>
								<div className='absolute w-full text-xs text-center transition-opacity duration-500 -translate-x-1/2 opacity-0 -bottom-4 left-1/2 sm:-bottom-5 sm:text-sm xl:-bottom-6 xl:text-base group-hover:opacity-100 text-[#041e42]'>
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
