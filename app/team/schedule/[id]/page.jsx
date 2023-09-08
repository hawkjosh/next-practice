async function getTeamSchedule(id) {
	const response = await fetch(
		`https://statsapi.mlb.com/api/v1/schedule?sportId=1&season=2023&gameType=R&teamId=${id}`,
		{
			next: {
				revalidate: 60,
			},
		}
	)

	if (!response.ok) {
		throw new Error('Failed to fetch data')
	}

	const data = await response.json()

	return data.dates
}

export default async function TeamSchedule({params}) {
	const schedule = await getTeamSchedule()

	return (
		<div className='schedule'>
			{!schedule && <div>Loading...</div>}

			{schedule.map((date) =>
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
