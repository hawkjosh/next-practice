import Link from 'next/link'
import Image from 'next/image'
import { useDateFormat } from '@/app/utils/useDateFormat'

const homeLogo =
	'https://www.mlbstatic.com/team-logos/team-cap-on-light/144.svg'

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
		<div className='schedule'>
			{!schedule && <div>Loading...</div>}

			{schedule.map((game) => (
				<Link
					href={`/team/schedule/${game.id}`}
					key={game.id}
					className={`card ${game.location}`}>
					<div className='date'>{useDateFormat(game.date).gameDate}</div>

					{!game.result && (
						<div className='time'>{useDateFormat(game.date).gameStart}</div>
					)}

					<div className='venue'>@ {game.venue}</div>

					<div className='matchup'>
						<Image
							src={game.location === 'home' ? homeLogo : game.opponent_logo}
							width={1}
							height={1}
							alt={`${
								game.location === 'home' ? 'Atlanta Braves' : game.opponent
							} Logo`}
							priority
						/>
						<span>vs</span>
						<Image
							src={game.location === 'away' ? homeLogo : game.opponent_logo}
							width={1}
							height={1}
							alt={`${
								game.location === 'away' ? 'Atlanta Braves' : game.opponent
							} Logo`}
							priority
						/>
					</div>

					{game.result && (
						<div className={`badge ${game.result}`}>
							<div className='result'>{game.result === 'win' ? 'W' : 'L'}</div>
							<div className='score'>{`${game.win_score}-${game.lose_score}`}</div>
						</div>
					)}
				</Link>
			))}
		</div>
	)
}
