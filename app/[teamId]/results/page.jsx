import Image from 'next/image'
import Link from 'next/link'
import { getSchedule } from '@/lib/getMlbData'
import { useDateFormat } from '@/utils/useDateFormat'
import * as logo from '@/utils/useMediaUrl'

// export default async function TeamSchedule({ params }) {
// 	const { title, games } = await getSchedule(params.teamId)

// 	return (
// 		<div className='container max-w-screen-xl mx-auto'>
// 			<div className='flex flex-col w-11/12 gap-12 mx-auto'>
// 				<div className='flex items-center gap-2 p-3 justify-evenly'>
// 					<Link href={`/${params.teamId}`}>
// 						<Image
// 							src={logo.logoUrlPrimLt(params.teamId)}
// 							width={100}
// 							height={100}
// 							alt='Team Logo'
// 							className='h-auto w-28 md:w-48 lg:w-72 xl:w-96'
// 						/>
// 					</Link>
// 					<div className='text-lg font-extrabold text-center uppercase md:text-2xl lg:text-4xl xl:text-6xl'>
// 						{`${useDateFormat(title).seasonYear} Results`}
// 					</div>
// 				</div>
// 				<div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
// 					{games.map((game, index) => {
// 						const {
// 							gamePk,
// 							gameDate,
// 							venue,
// 							status: { detailedState: gameStatus },
// 							teams: {
// 								home: {
// 									score: homeScore,
// 									team: { id: homeId },
// 									isWinner: homeTeamWin,
// 								},
// 								away: {
// 									score: awayScore,
// 									team: { id: awayId },
// 									isWinner: awayTeamWin,
// 								},
// 							},
// 						} = game

// 						const locationCheck = () =>
// 							homeId === parseInt(params.teamId) ? 'home' : 'away'

// 						const teamLocation = locationCheck()

// 						const gameComplete = game.teams.home.hasOwnProperty('isWinner')

// 						const teamWin =
// 							(homeTeamWin && teamLocation === 'home') ||
// 							(awayTeamWin && teamLocation === 'away')

// 						const winScore = Math.max(homeScore, awayScore)
// 						const loseScore = Math.min(homeScore, awayScore)

// 						return (
// 							<Link
// 								key={index}
// 								href={`/${params.teamId}/results/${gamePk}`}
// 								className='relative flex flex-col items-center gap-1 pt-2 pb-12 transition-transform duration-300 bg-white rounded-lg hover:scale-105'>
// 								<div className='mb-0 text-lg font-bold text-gray-700'>
// 									{useDateFormat(gameDate).gameDate}
// 								</div>
// 								<div
// 									className={`text-sm leading-relaxed text-gray-500 capitalize ${
// 										teamLocation === 'home'
// 											? 'text-emerald-400'
// 											: 'text-rose-500'
// 									}`}>
// 									{venue.name}
// 								</div>
// 								{gameStatus === 'Scheduled' && (
// 									<div className='mb-0 text-base font-semibold text-gray-600'>
// 										{useDateFormat(gameDate).gameStart}
// 									</div>
// 								)}
// 								<div className='flex items-center justify-center gap-3'>
// 									<Image
// 										src={logo.logoUrlCapLt(awayId)}
// 										width={100}
// 										height={100}
// 										alt='Team Logo'
// 										className='w-[2rem] h-[2rem]'
// 									/>
// 									<div className='font-bold text-slate-900'>
// 										@
// 									</div>
// 									<Image
// 										src={logo.logoUrlCapLt(homeId)}
// 										width={1}
// 										height={1}
// 										alt='Team Logo'
// 										className='w-[2rem] h-[2rem]'
// 									/>
// 								</div>
// 								{gameComplete && (
// 									<div
// 										className={`absolute bottom-0 right-0 rounded-tl-lg rounded-br-lg py-0.5 px-1.5 mt-3 flex flex-col items-center ${
// 											teamWin ? 'bg-green-700' : 'bg-red-600'
// 										}`}>
// 										<div className='text-sm font-bold'>
// 											{teamWin ? 'W' : 'L'}
// 										</div>
// 										<div className='text-xs font-semibold'>
// 											{winScore} - {loseScore}
// 										</div>
// 									</div>
// 								)}
// 								{gameStatus === 'Postponed' && (
// 									<div
// 										className={`absolute bottom-0 right-0 rounded-tl-lg rounded-br-lg py-0.5 px-1.5 mt-3 flex flex-col items-center bg-yellow-400 text-red-600`}>
// 										<div className='text-sm font-bold'>Rain</div>
// 										<div className='text-sm font-bold'>Out</div>
// 									</div>
// 								)}
// 							</Link>
// 						)
// 					})}
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

export default async function TeamSchedule({ params }) {
	const dates = await getSchedule(params.teamId)

	return (
		<div className='container max-w-screen-xl mx-auto'>
			<div className='flex flex-col w-11/12 gap-12 mx-auto'>
				<div className='flex items-center gap-2 p-3 justify-evenly'>
					<Link href={`/${params.teamId}`}>
						<Image
							src={logo.logoUrlPrimLt(params.teamId)}
							width={100}
							height={100}
							alt='Team Logo'
							className='h-auto w-28 md:w-48 lg:w-72 xl:w-96'
						/>
					</Link>
					<div className='text-lg font-extrabold text-center uppercase md:text-2xl lg:text-4xl xl:text-6xl'>
						Results
					</div>
				</div>
				{dates.map((date) => (
					<div>
						{date.totalGames === 1 ? (
							<div className='flex items-center gap-2'>
								<div>{useDateFormat(date.games[0].gameDate).gameDate}</div>
								<div>→</div>
								{date.games[0].status.detailedState === 'Postponed' ? (
									<div className='text-yellow-500'>
										POSTPONED: Rescheduled to{' '}
										{useDateFormat(date.games[0].rescheduleDate).gameDate}
									</div>
								) : (
									<div>
									{date.games[0].teams.away.isWinner && 
										`${date.games[0].teams.away.team.name} beat ${date.games[0].teams.home.team.name} ${date.games[0].teams.away.score} - ${date.games[0].teams.home.score}`
									}
									{date.games[0].teams.home.isWinner && 
										`${date.games[0].teams.home.team.name} beat ${date.games[0].teams.away.team.name} ${date.games[0].teams.home.score} - ${date.games[0].teams.away.score}`
									}
									</div>
								)}
							</div>
						) : (
							<div className='flex items-center gap-2'>
								<div>{useDateFormat(date.games[0].gameDate).gameDate}</div>
								<div>→</div>
								<div>DOUBLE-HEADER:</div>
								<div>
									{date.games[0].teams.away.isWinner && 
										`${date.games[0].teams.away.team.name} beat ${date.games[0].teams.home.team.name} ${date.games[0].teams.away.score} - ${date.games[0].teams.home.score}`
									}
									{date.games[0].teams.home.isWinner && 
										`${date.games[0].teams.home.team.name} beat ${date.games[0].teams.away.team.name} ${date.games[0].teams.home.score} - ${date.games[0].teams.away.score}`
									}
									</div>
									<div>|</div>
									<div>
									{date.games[1].teams.away.isWinner && 
										`${date.games[1].teams.away.team.name} beat ${date.games[1].teams.home.team.name} ${date.games[1].teams.away.score} - ${date.games[1].teams.home.score}`
									}
									{date.games[1].teams.home.isWinner && 
										`${date.games[1].teams.home.team.name} beat ${date.games[1].teams.away.team.name} ${date.games[1].teams.home.score} - ${date.games[1].teams.away.score}`
									}
									</div>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	)
}
