import Link from 'next/link'
import { useDateFormat } from '@/utils/useDateFormat'

export default function GameSummaryCard({ teamId, games }) {
	return games.map((game, index) => {
		const {
			gamePk: gameId,
			gameDate,
			rescheduleDate,
			status: { detailedState: gameStatus },
			teams: {
				home: {
					score: homeScore,
					team: { id: homeId, name: homeTeam },
					isWinner: isHomeWin,
				},
				away: {
					score: awayScore,
					team: { id: awayId, name: awayTeam },
					isWinner: isAwayWin,
				},
			},
		} = game

		const isPostponed = Boolean(gameStatus === 'Postponed')
		const isScheduled = Boolean(gameStatus === 'Scheduled')
		const isHomeTeam = Boolean(homeId === parseInt(teamId))
		const isAwayTeam = Boolean(awayId === parseInt(teamId))
		const isWinner = Boolean(
			(isHomeWin && isHomeTeam) || (isAwayWin && isAwayTeam)
		)

		return (
			<div
				key={index}
				className='w-fit'>
				{isPostponed ? (
					<div className='flex flex-col gap-1 px-2 py-1 text-center text-red-600 bg-yellow-400 cursor-default rounded-2xl group'>
						<div className='text-sm font-bold md:text-base xl:text-lg group-hover:hidden'>
							Rain Out
						</div>
						<div className='hidden text-sm font-bold md:text-base xl:text-lg group-hover:block'>{`Moved to ${
							useDateFormat(rescheduleDate).monthDay
						}`}</div>
					</div>
				) : isScheduled ? (
					<div className='sm:text-lg lg:text-xl'>
						{useDateFormat(gameDate).gameStart}
					</div>
				) : (
					<Link
						href={`/${teamId}/results/${gameId}`}
						className={`flex px-2 py-1 text-center rounded-2xl group ${
							isWinner ? 'bg-green-500' : 'bg-red-500'
						}`}>
						<div className='text-sm font-bold md:text-base xl:text-lg group-hover:hidden'>
							{`${isHomeWin ? homeScore : awayScore} - ${
								isHomeWin ? awayScore : homeScore
							}`}
						</div>
						<div className='hidden text-sm font-bold md:text-base xl:text-lg group-hover:block'>
							{isWinner ? 'WIN' : 'LOSS'}
						</div>
					</Link>
				)}
			</div>
		)
	})
}
