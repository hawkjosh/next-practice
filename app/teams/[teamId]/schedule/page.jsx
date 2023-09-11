import Link from 'next/link'
import { getSchedule } from '@/lib/getMlbData'

export default async function TeamSchedule({ params }) {
	const dates = await getSchedule(params.teamId)

	// const {
	// 	date: { games: game },
	// } = await getSchedule(params.teamId)

	// const {
	// 	gamePk: gameId,
	// 	gameDate: gameDate,
	// 	status: { detailedState: gameState },
	// 	teams: { away: awayInfo, home: homeInfo },
	// 	venue: { name: ballpark },
	// } = game

	// const {
	// 	leagueRecord: { wins: homeWs, losses: homeLs },
	// 	score: homeScore,
	// 	team: { id: homeTeamId, name: homeTeam },
	// } = homeInfo

	// const {
	// 	leagueRecord: { wins: awayWs, losses: awayLs },
	// 	score: awayScore,
	// 	team: { id: awayTeamId, name: awayTeam },
	// } = awayInfo

	return (
		<div className='schedule'>
			{dates.map((date) =>
				date.games.map((game) => (
					<Link
						key={game.gamePk}
						href={`/teams/${params.teamId}/schedule/${game.gamePk}`}
						className={`card`}>
						<div className='date'>{game.officialDate}</div>

						<div className='venue'>{game.venue.name}</div>

						{game.status.detailedState === 'Scheduled' && (
							<div className='time'>{game.gameDate}</div>
						)}

						<div className='matchup'>
							<div className='text-[red]'>{game.teams.away.team.name}</div>
							<span>@</span>
							<div className='text-[green]'>{game.teams.home.team.name}</div>
						</div>

						{game.status.detailedState === 'Final' && (
							<div className='text-[black]'>{`${game.teams.away.team.name} ${game.teams.away.score} - ${game.teams.home.team.name} ${game.teams.home.score}`}</div>
						)}
					</Link>
				))
			)}
		</div>
	)
}
