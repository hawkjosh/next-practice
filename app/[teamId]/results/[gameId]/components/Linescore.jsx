import Image from 'next/image'
import { useMediaRender } from '@/utils/useMediaRender'

export default function Linescore({
	innings,
	homeTeam,
	awayTeam,
	homeId,
	awayId,
	teams,
	homeRecord,
	awayRecord,
}) {
	const {
		home: { runs: homeTeamRuns, hits: homeTeamHits, errors: homeTeamErrors },
		away: { runs: awayTeamRuns, hits: awayTeamHits, errors: awayTeamErrors },
	} = teams

	const { homeWs, homeLs } = homeRecord

	const { awayWs, awayLs } = awayRecord

	return (
		<div className='grid grid-cols-12 grid-rows-3 place-items-center'>
			<div className='flex items-center col-span-1 row-start-2 row-end-2 gap-2 w-max justify-self-start'>
				<Image
					src={useMediaRender(awayId).capLight}
					width={100}
					height={100}
					alt={`${awayTeam} Logo`}
					className='w-[1rem] aspect-square sm:w-[1.25rem] md:w-[1.5rem] lg:w-[1.75rem] xl:w-[2rem]'
				/>
				<small className='hidden text-xs font-light md:block lg:text-sm'>
					({awayWs}-{awayLs})
				</small>
			</div>
			<div className='flex items-center col-span-1 row-start-3 row-end-3 gap-2 w-max justify-self-start'>
				<Image
					src={useMediaRender(homeId).capLight}
					width={100}
					height={100}
					alt={`${homeTeam} Logo`}
					className='w-[1rem] aspect-square sm:w-[1.25rem] md:w-[1.5rem] lg:w-[1.75rem] xl:w-[2rem]'
				/>
				<small className='hidden text-xs font-light md:block lg:text-sm'>
					({homeWs}-{homeLs})
				</small>
			</div>
			<div className='flex w-full col-span-8 col-start-2 row-span-3 gap-2 justify-evenly'>
				{innings.map((inning, index) => {
					const {
						num: inningNumber,
						home: { runs: homeInningRuns },
						away: { runs: awayInningRuns },
					} = inning

					return (
						<div key={index}>
							<div className='font-bold h-[1rem] sm:h-[1.25rem] md:h-[1.5rem] lg:h-[1.75rem] xl:h-[2rem]'>
								{inningNumber}
							</div>
							<div className='h-[1rem] sm:h-[1.25rem] md:h-[1.5rem] lg:h-[1.75rem] xl:h-[2rem]'>
								{awayInningRuns}
							</div>
							<div className='h-[1rem] sm:h-[1.25rem] md:h-[1.5rem] lg:h-[1.75rem] xl:h-[2rem]'>
								{homeInningRuns}
							</div>
						</div>
					)
				})}
			</div>
			<div className='font-bold col-start-10 col-span-1 row-start-1 row-span-1 h-[1rem] sm:h-[1.25rem] md:h-[1.5rem] lg:h-[1.75rem] xl:h-[2rem]'>
				R
			</div>
			<div className='col-start-10 col-span-1 row-start-2 row-span-1 h-[1rem] sm:h-[1.25rem] md:h-[1.5rem] lg:h-[1.75rem] xl:h-[2rem]'>
				{awayTeamRuns}
			</div>
			<div className='col-start-10 col-span-1 row-start-3 row-span-1 h-[1rem] sm:h-[1.25rem] md:h-[1.5rem] lg:h-[1.75rem] xl:h-[2rem]'>
				{homeTeamRuns}
			</div>
			<div className='font-bold col-start-11 col-span-1 row-start-1 row-span-1 h-[1rem] sm:h-[1.25rem] md:h-[1.5rem] lg:h-[1.75rem] xl:h-[2rem]'>
				H
			</div>
			<div className='col-start-11 col-span-1 row-start-2 row-span-1 h-[1rem] sm:h-[1.25rem] md:h-[1.5rem] lg:h-[1.75rem] xl:h-[2rem]'>
				{awayTeamHits}
			</div>
			<div className='col-start-11 col-span-1 row-start-3 row-span-1 h-[1rem] sm:h-[1.25rem] md:h-[1.5rem] lg:h-[1.75rem] xl:h-[2rem]'>
				{homeTeamHits}
			</div>
			<div className='font-bold col-start-12 col-span-1 row-start-1 row-span-1 h-[1rem] sm:h-[1.25rem] md:h-[1.5rem] lg:h-[1.75rem] xl:h-[2rem]'>
				E
			</div>
			<div className='col-start-12 col-span-1 row-start-2 row-span-1 h-[1rem] sm:h-[1.25rem] md:h-[1.5rem] lg:h-[1.75rem] xl:h-[2rem]'>
				{awayTeamErrors}
			</div>
			<div className='col-start-12 col-span-1 row-start-3 row-span-1 h-[1rem] sm:h-[1.25rem] md:h-[1.5rem] lg:h-[1.75rem] xl:h-[2rem]'>
				{homeTeamErrors}
			</div>
		</div>
	)
}
