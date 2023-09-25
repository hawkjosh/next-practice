import Image from 'next/image'
import Link from 'next/link'
import { getTeam, getSchedule } from '@/lib/getMlbData'
import { useDateFormat } from '@/utils/useDateFormat'
import * as logo from '@/utils/useMediaUrl'

export default async function TeamResultsPage({ params }) {
	const teamResult = await getTeam(params.teamId)
	const scheduleResult = await getSchedule(params.teamId)

	const {
		teams: [{ id, franchiseName, clubName }],
	} = teamResult

	const { dates } = scheduleResult

	return (
		<div className='container max-w-screen-xl mx-auto'>
			<div className='flex flex-col w-11/12 gap-12 mx-auto'>
				<Link
					href={`/${id}`}
					className='flex flex-col items-center gap-6 pb-6 border-b-4 justify-evenly sm:flex-row sm:gap-2 sm:px-4'>
					<Image
						src={logo.logoUrlPrimDrk(id)}
						width={100}
						height={100}
						alt={`${clubName} Logo`}
						className='w-1/3 h-auto max-w-xs min-w-[10rem] sm:w-1/4'
					/>
					<div className='flex items-center gap-2.5 sm:flex-col sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8'>
						<div className='text-2xl font-bold uppercase sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
							{franchiseName}
						</div>
						<div className='text-2xl font-bold uppercase sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
							{clubName}
						</div>
					</div>
				</Link>
				{dates.map((date, index) => {
					const {
						games: [{ gamePk: gameId, gameDate }],
					} = date
					const isDoubleHeader = Boolean(date.totalGames > 1)

					return (
						<Link
							href={`/${id}/results/${gameId}`}
							key={index}
							className='flex items-center gap-4 p-4 border'>
							<div>{useDateFormat(gameDate).gameDate}</div>
							<div>→</div>
							<div className='flex flex-col items-center gap-3'>
								{renderGameInfo(date.games)}
							</div>
						</Link>
					)
				})}
			</div>
		</div>
	)
}

const renderGameInfo = (games) => {
	return games.map((game, index) => {
		const {
			teams: {
				home: {
					score: homeScore,
					team: { id: homeId, name: homeTeam },
					isWinner: isHomeWin,
				},
				away: {
					score: awayScore,
					team: { id: awayId, name: awayTeam },
				},
			},
		} = game

		return (
			<div
				key={index}
				className='flex items-center gap-3'>
				<Image
					src={
						isHomeWin ? logo.logoUrlCapLt(homeId) : logo.logoUrlCapLt(awayId)
					}
					width={100}
					height={100}
					alt={`${isHomeWin ? homeTeam : awayTeam} Logo`}
					className='w-8 h-auto md:w-9 lg:w-10 xl:w-11'
				/>
				<div>
					{`win ${isHomeWin ? homeScore : awayScore} - ${
						isHomeWin ? awayScore : homeScore
					}`}
				</div>
			</div>
		)
	})
}
