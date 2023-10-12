import Image from 'next/image'
import { getSchedule } from '@/lib/getMlbData'
import { useDate } from '@/utils/useDate'
import { useMedia } from '@/utils/useMedia'

// Components
import GameSummaryCard from './components/GameSummaryCard'

export default async function TeamResultsPage({ params }) {
	const teamId = params.teamId
	const { dates } = await getSchedule(teamId)

	return (
		<>
			<div className='text-2xl font-semibold text-center md:text-3xl lg:text-4xl xl:text-5xl'>
				Click on score for details...
			</div>
			<div className='grid grid-cols-2 gap-4 pb-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
				{dates.map((date, index) => {
					const {
						games: [
							{
								gameDate,
								teams: {
									away: {
										team: { id: awayId, name: awayTeam },
									},
									home: {
										team: { id: homeId, name: homeTeam },
									},
								},
								doubleHeader,
							},
						],
					} = date

					const isDoubleHeader = Boolean(
						doubleHeader === 'Y' || doubleHeader === 'S'
					)

					return (
						<div
							key={index}
							className='grid grid-rows-4 gap-2 p-2 border rounded-lg'>
							<div className='row-start-1 row-end-2 font-semibold text-center sm:text-lg'>
								{useDate(gameDate).gameDate}
							</div>
							<div
								className={`flex items-center justify-center row-start-2 gap-3 ${
									isDoubleHeader ? 'row-end-3' : 'row-end-4'
								}`}>
								<Image
									src={useMedia(awayId).logo('cap', 'light')}
									width={100}
									height={100}
									alt={`${awayTeam} Logo`}
									priority
									className='w-6 aspect-square sm:w-7 md:w-8 lg:w-9 xl:w-10'
								/>
								<div className='font-bold sm:text-lg'>@</div>
								<Image
									src={useMedia(homeId).logo('cap', 'light')}
									width={100}
									height={100}
									alt={`${homeTeam} Logo`}
									priority
									className='w-6 aspect-square sm:w-7 md:w-8 lg:w-9 xl:w-10'
								/>
							</div>
							{isDoubleHeader && (
								<div className='row-start-3 row-end-4 text-sm italic font-bold text-center'>
									(DH)
								</div>
							)}
							<div className='relative flex w-full row-start-4 row-end-5 justify-evenly'>
								<GameSummaryCard
									teamId={teamId}
									games={date.games}
									isDoubleHeader={isDoubleHeader}
								/>
							</div>
						</div>
					)
				})}
			</div>
		</>
	)
}
