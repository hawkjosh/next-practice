import getTeamSchedule from '@/lib/getTeamSchedule'

export default async function TeamSchedule({ params }) {
	const dates = await getTeamSchedule(params.teamId)
	return (
		<div className='schedule'>
			{dates.map((date) =>
				date.games.map((game) => (
					<div
						key={game.gamePk}
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
					</div>
				))
			)}
		</div>
	)
}
