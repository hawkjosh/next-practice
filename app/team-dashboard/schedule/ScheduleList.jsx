import Link from 'next/link'
import Image from 'next/image'
import { useDateFormat } from '@/app/utils/useDateFormat'

async function getSchedule() {
	const data = await fetch('http://localhost:4000/schedule', {
		next: {
			revalidate: 15,
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
		<div className='schedule'>
			{!schedule && <div>Loading...</div>}

			{schedule.map((game) => (
				<Link
					href={`http://localhost:4000/schedule/${game.id}`}
					key={game.id}
					className={`card ${game.location === 'Home' ? 'home' : 'away'}`}>
					<div className='date'>{useDateFormat(game.date).gameDate}</div>

					{!game.result && (
						<div className='time'>{useDateFormat(game.date).gameStart}</div>
					)}

					<div className='venue'>@ {game.venue}</div>

					<div className='matchup'>
						<Image
							src={
								game.location === 'Home'
									? 'https://www.mlbstatic.com/team-logos/team-cap-on-light/144.svg'
									: game.opponent_logo
							}
							width={1}
							height={1}
							alt='Atlanta Braves Logo'
							priority
						/>
						<span>vs</span>
						<Image
							src={
								game.location === 'Home'
									? game.opponent_logo
									: 'https://www.mlbstatic.com/team-logos/team-cap-on-light/144.svg'
							}
							width={1}
							height={1}
							alt={`${game.opponent} Logo`}
							priority
						/>
					</div>

					{game.result && (
						<div className={`badge ${game.result === 'Win' ? 'win' : 'loss'}`}>
							<div className='result'>{game.result === 'Win' ? 'W' : 'L'}</div>
							<div className='score'>{`${game.win_score}-${game.lose_score}`}</div>
						</div>
					)}
				</Link>
			))}
		</div>
	)
}
