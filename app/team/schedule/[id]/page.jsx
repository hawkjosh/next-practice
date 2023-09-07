// import { notFound } from 'next/navigation'

// export const dynamicParams = true // default val = true

// export async function generateStaticParams() {
// 	const data = await fetch('http://localhost:4000/schedule')

// 	const schedule = await data.json()

// 	return schedule.map((game) => ({
// 		id: game.id,
// 	}))
// }

// async function getGameInfo(id) {
// 	const data = await fetch(`http://localhost:4000/schedule/?id=${id}`, {
// 		next: {
// 			revalidate: 15,
// 		},
// 	})

// 	if (!data.ok) {
// 		notFound()
// 	}

// 	return data.json()
// }

// export default async function GameInfo({ params }) {
// 	const game = await getGameInfo(params.id)

// 	return (
// 		<main>
// 			<nav>
// 				<h2>Game Info</h2>
// 			</nav>
// 			<div className='card'>
// 				<h3>{game.opponent}</h3>
// 				<small>Played at {game.venue}</small>
// 				{game.result === 'Win' ? (
// 					<h2>{`Final Score: Atlanta Braves ${game.win_score}, ${game.opponent} ${game.lose_score}...Braves Win ;)`}</h2>
// 				) : (
// 					<h2>{`Final Score: ${game.opponent} ${game.win_score}, Atlanta Braves ${game.lose_score}...Braves Lose :(`}</h2>
// 				)}
// 			</div>
// 		</main>
// 	)
// }

import Image from 'next/image'
import { useDateFormat } from '@/app/utils/useDateFormat'
import { useStringFormat } from '@/app/utils/useStringFormat'

const homeLogo =
	'https://www.mlbstatic.com/team-logos/team-cap-on-light/144.svg'

async function getGame(id) {
	const data = await fetch(`http://localhost:4000/schedule/${id}`, {
		next: {
			revalidate: 0,
		},
	})

	if (!data.ok) {
		throw new Error('Failed to fetch data')
	}

	return data.json()
}

export default async function GameInfo({ params }) {
	const game = await getGame(params.id)

	return (
		<main>
			<div className='page-container'>
				<div className='details-card'>
					{/* Matchup */}
					<div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								gap: '1rem',
							}}>
							<Image
								src={homeLogo}
								width={125}
								height={125}
								alt='Atlanta Braves Logo'
								priority
							/>
							<span style={{ fontSize: '0.875rem' }}>Atlanta Braves</span>
						</div>
						<span style={{ fontSize: '2rem', fontWeight: 'bold' }}>
							{game.location === 'Home' ? 'vs' : '@'}
						</span>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								gap: '1rem',
							}}>
							<Image
								src={game.opponent_logo}
								width={125}
								height={125}
								alt={`${game.opponent} Logo`}
								priority
							/>
							<span style={{ fontSize: '0.875rem' }}>{game.opponent}</span>
						</div>
					</div>
					{/* Details */}
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							gap: '0.75rem',
							fontSize: '1.5rem',
						}}>
						<div>{`${useStringFormat().capitalFirst(game.location)} game at ${
							game.venue
						}`}</div>
						<span>|</span>
						<div>{`${useDateFormat(game.date).gameStart} on ${
							useDateFormat(game.date).gameDate
						}`}</div>
					</div>
					{/* Results */}
					<div style={{ fontSize: '2rem' }}>{`Braves ${
						game.result === 'win' ? 'beat' : 'lose to'
					} the ${useStringFormat().teamShortName(game.opponent)} ${
						game.win_score
					} to ${game.lose_score}`}</div>
				</div>
			</div>
		</main>
	)
}
