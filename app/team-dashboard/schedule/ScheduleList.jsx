import Image from 'next/image'

const futureDate = (dateString) => {
	const date = new Date(dateString)
	return date.toLocaleDateString('en-US', {
		weekday: 'short',
		year: '2-digit',
		month: 'numeric',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
	})
}

const pastDate = (dateString) => {
	const date = new Date(dateString)
	return date.toLocaleDateString('en-US', {
		weekday: 'short',
		year: '2-digit',
		month: 'numeric',
		day: 'numeric',
	})
}

async function getSchedule() {
	const data = await fetch('http://localhost:4000/schedule', {
		next: {
			revalidate: 0,
		},
	})

	if (!data.ok) {
		throw new Error('Failed to fetch data')
	}

	return data.json()
}

export default async function ScheduleList() {
	const schedule = await getSchedule()

	return (
		<div>
			{schedule ? (
				<div className='container mx-auto flex flex-wrap justify-center gap-5 py-2 max-w-5xl'>
					{schedule.map((game) => {
						return (
							<div
								key={game.id}
								className={`card ${
									game.location === 'Home' ? 'home' : 'away'
								}`}>
								{game.result ? (
									<div className='card-date'>{pastDate(game.date)}</div>
								) : (
									<div className='card-date'>{futureDate(game.date)}</div>
								)}

								<div className='card-venue capitalize'>@ {game.venue}</div>

								{game.location === 'Home' ? (
									<div className='card-matchup'>
										<Image
											src='https://www.mlbstatic.com/team-logos/team-cap-on-light/144.svg'
											alt='opponent logo'
											width={30}
											height={30}
										/>
										<span className='text-slate-900'>vs</span>
										<Image
											src={game.opponent_logo}
											alt={`${game.opponent} Logo`}
											width={30}
											height={30}
										/>
									</div>
								) : (
									<div className='card-matchup'>
										<Image
											src={game.opponent_logo}
											alt={`${game.opponent} Logo`}
											width={30}
											height={30}
										/>
										<span className='text-slate-900'>vs</span>
										<Image
											src='https://www.mlbstatic.com/team-logos/team-cap-on-light/144.svg'
											alt='opponent logo'
											width={30}
											height={30}
										/>
									</div>
								)}

								{game.result === 'Win' ? (
									<div className='pill win'>{`W ${game.win_score}-${game.lose_score}`}</div>
								) : game.result === 'Loss' ? (
									<div className='pill loss'>{`L ${game.win_score}-${game.lose_score}`}</div>
								) : null}
							</div>
						)
					})}
				</div>
			) : (
				<div>Loading...</div>
			)}
		</div>
	)
}
