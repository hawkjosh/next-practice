import Image from 'next/image'
import Link from 'next/link'
import { getSchedule } from '@/lib/getMlbData'
import { useDateFormat } from '@/utils/useDateFormat'
import * as logo from '@/utils/useMediaUrl'

export default async function TeamSchedule({ params }) {
	const dates = await getSchedule(params.teamId)

	const flatGames = dates.flatMap((date) => date.games)

	return (
		<main>
			<div className='page-container'>
				<div className='page-header'>
					<Image
						src={logo.logoUrlPrimLt(params.teamId)}
						width={1}
						height={1}
						alt='Team Logo'
					/>
					<div className='page-title'>{`${
						useDateFormat(dates[0].date).seasonYear
					} Schedule`}</div>
				</div>
				<div className='schedule'>
					{flatGames.map((game, index) => {
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
								className={`card`}>
								<div className='date'>{useDateFormat(gameDate).gameDate}</div>
								<div
									className={`venue ${
										teamLocation === 'home' ? 'home' : 'away'
									}`}>
									{venue.name}
								</div>
								{gameStatus === 'Scheduled' && (
									<div className='time'>
										{useDateFormat(gameDate).gameStart}
									</div>
								)}
								<div className='matchup'>
									<Image
										src={logo.logoUrlCapLt(params.teamId)}
										width={1}
										height={1}
										alt='Team Logo'
									/>
									<span>{teamLocation === 'home' ? 'vs' : '@'}</span>
									<Image
										src={
											teamLocation === 'home'
												? logo.logoUrlCapLt(awayId)
												: logo.logoUrlCapLt(homeId)
										}
										width={1}
										height={1}
										alt='Team Logo'
									/>
								</div>
								{gameComplete && (
									<div className={`badge ${teamWin ? 'win' : 'lose'}`}>
										<div className='result'>{teamWin ? 'W' : 'L'}</div>
										<div className='score'>
											{winScore} - {loseScore}
										</div>
									</div>
								)}
								{gameStatus === 'Postponed' && (
									<div className={`badge postponed`}>
										<div className='result'>Rain Out</div>
									</div>
								)}
							</Link>
						)
					})}
				</div>
			</div>
		</main>
	)
}
