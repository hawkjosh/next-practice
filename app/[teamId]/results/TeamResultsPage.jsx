import Link from 'next/link'
import { getSchedule } from '@/lib/getMlbData'

// Components
import GameSummaryCard from './components/GameSummaryCard'

export default async function TeamResultsPage({ params }) {
	const teamId = params.teamId
	const { dates } = await getSchedule(teamId)

	return (
		<div className='grid grid-cols-3 gap-4 pb-4 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
			{dates.map((date, index) => {
				const {
					games: [{ gamePk: gameId }],
				} = date

				return (
					<Link
						href={`/${teamId}/results/${gameId}`}
						key={index}
						className='border rounded-lg'>
						<GameSummaryCard
							teamId={teamId}
							games={date.games}
						/>
					</Link>
				)
			})}
		</div>
	)
}
