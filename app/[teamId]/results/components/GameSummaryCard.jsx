import Image from 'next/image'
import { useDateFormat } from '@/utils/useDateFormat'
import * as logo from '@/utils/useMediaUrl'

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
				className='flex flex-col items-center gap-3 p-1 relative'>
				<div className='font-semibold sm:text-lg'>
					{useDateFormat(gameDate).gameDate}
				</div>
				<div className='flex items-center gap-3'>
					<Image
						src={logo.logoUrlCapLt(awayId)}
						width={100}
						height={100}
						alt={`${awayTeam} Logo`}
						priority
						className='w-6 aspect-square sm:w-7 md:w-8 lg:w-9 xl:w-10'
					/>
					<div className='font-bold sm:text-lg'>@</div>
					<Image
						src={logo.logoUrlCapLt(homeId)}
						width={100}
						height={100}
						alt={`${isHomeWin ? homeTeam : awayTeam} Logo`}
						priority
						className='w-6 aspect-square sm:w-7 md:w-8 lg:w-9 xl:w-10'
					/>
				</div>
				<div className='w-fit'>
					{isPostponed ? (
						<div className='text-red-600 text-center bg-yellow-400 flex flex-col gap-1 px-2 py-1 rounded-2xl'>
							<div className='text-sm font-bold md:text-base xl:text-lg'>Rain Out</div>
							<div className='text-xs italic font-semibold md:text-sm xl:text-base'>{`(Moved to ${
								useDateFormat(rescheduleDate).monthDay
							})`}</div>
						</div>
					) : isScheduled ? (
						<div className='sm:text-lg lg:text-xl'>{useDateFormat(gameDate).gameStart}</div>
					) : (
						<div
							className={`text-white flex flex-col items-center px-2 py-1 rounded-2xl ${
								isWinner ? 'bg-green-500' : 'bg-red-500'
							}`}>
							<div className='font-bold md:text-lg  xl:text-xl'>{isWinner ? 'W' : 'L'}</div>
							<div className='text-sm font-semibold md:text-base  xl:text-lg'>
								{`${isHomeWin ? homeScore : awayScore} - ${
									isHomeWin ? awayScore : homeScore
								}`}
							</div>
						</div>
					)}
				</div>
			</div>
		)
	})
}
