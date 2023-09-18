import Image from 'next/image'
import Link from 'next/link'
import { getSchedule } from '@/lib/getMlbData'
import { useDateFormat } from '@/utils/useDateFormat'
import * as logo from '@/utils/useMediaUrl'

export default async function TeamSchedule({ params }) {
	const { title, games } = await getSchedule(params.teamId)

	return (
		<div className='container max-w-screen-xl mx-auto'>
			<div className='container flex flex-col gap-4 mx-auto'>
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
						{`${useDateFormat(title).seasonYear} Schedule`}
					</div>
				</div>
				<div className='grid grid-flow-row grid-cols-2 gap-2 px-4 @[40rem]:grid-cols-3 @[48rem]:grid-cols-4 @[60rem]:grid-cols-5 @[80rem]:grid-cols-6'>
					{games.map((game, index) => {
						const { gamePk, gameDate, venue, status, teams } = game
						const { detailedState: gameStatus } = status
						const { home, away } = teams
						const {
							score: homeScore,
							team: { id: homeId },
							isWinner: homeTeamWin,
						} = home
						const {
							score: awayScore,
							team: { id: awayId },
							isWinner: awayTeamWin,
						} = away

						const locationCheck = () =>
							homeId === parseInt(params.teamId) ? 'home' : 'away'

						const teamLocation = locationCheck()

						const gameComplete = home.hasOwnProperty('isWinner')

						const teamWin =
							(homeTeamWin && teamLocation === 'home') ||
							(awayTeamWin && teamLocation === 'away')

						const winScore = Math.max(homeScore, awayScore)
						const loseScore = Math.min(homeScore, awayScore)

						return (
							<Link
								key={index}
								href={`/${params.teamId}/schedule/${gamePk}`}
								className='relative flex flex-col items-center w-full gap-1 pt-3 pb-6 transition duration-300 bg-white border border-solid rounded-lg cursor-default border-slate-400 hover:scale-105'>
								<div className='mb-0 text-lg font-bold text-gray-700'>
									{useDateFormat(gameDate).gameDate}
								</div>
								<div
									className={`pb-2 text-sm leading-relaxed text-gray-500 capitalize ${
										teamLocation === 'home'
											? 'text-emerald-700'
											: 'text-rose-700'
									}`}>
									{venue.name}
								</div>
								{gameStatus === 'Scheduled' && (
									<div className='mb-0 text-base font-semibold text-gray-600'>
										{useDateFormat(gameDate).gameStart}
									</div>
								)}
								<div className='flex items-center justify-center gap-3'>
									<Image
										src={logo.logoUrlCapLt(params.teamId)}
										width={1}
										height={1}
										alt='Team Logo'
										className='w-[2rem] h-[2rem]'
									/>
									<div className='font-bold text-slate-900'>
										{teamLocation === 'home' ? 'vs' : '@'}
									</div>
									<Image
										src={
											teamLocation === 'home'
												? logo.logoUrlCapLt(awayId)
												: logo.logoUrlCapLt(homeId)
										}
										width={1}
										height={1}
										alt='Team Logo'
										className='w-[2rem] h-[2rem]'
									/>
								</div>
								{gameComplete && (
									<div className={`absolute bottom-0 right-0 rounded-tl-lg rounded-br-lg py-0.5 px-1.5 mt-3 flex flex-col items-center ${teamWin ? 'bg-green-700' : 'bg-red-600'}`}>
										<div className='text-sm font-bold'>{teamWin ? 'W' : 'L'}</div>
										<div className='text-xs font-semibold'>
											{winScore} - {loseScore}
										</div>
									</div>
								)}
								{gameStatus === 'Postponed' && (
									<div className={`absolute bottom-0 right-0 rounded-tl-lg rounded-br-lg py-0.5 px-1.5 mt-3 flex flex-col items-center bg-yellow-400 text-red-600`}>
										<div className='text-sm font-bold'>Rain Out</div>
									</div>
								)}
							</Link>
						)
					})}
				</div>
			</div>
		</div>
	)
}
