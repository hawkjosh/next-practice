import { notFound } from 'next/navigation'

export const dynamicParams = true // default val = true

export async function generateStaticParams() {
	const data = await fetch('http://localhost:4000/schedule')

	const schedule = await data.json()

	return schedule.map((game) => ({
		id: game.id,
	}))
}

async function getGameInfo(id) {
	const data = await fetch(`http://localhost:4000/schedule/${id}`, {
		next: {
			revalidate: 15,
		},
	})

	if (!data.ok) {
		notFound()
	}

	return data.json()
}

export default async function GameInfo({ params }) {
	const game = await getGameInfo(params.id)

	return (
		<main>
			<nav>
				<h2>Game Info</h2>
			</nav>
			<div className='card'>
				<h3>{game.opponent}</h3>
				<small>Played at {game.venue}</small>
				{game.result === 'Win' ? (
					<h2>{`Final Score: Atlanta Braves ${game.win_score}, ${game.opponent} ${game.lose_score}...Braves Win ;)`}</h2>
				) : (
					<h2>{`Final Score: ${game.opponent} ${game.win_score}, Atlanta Braves ${game.lose_score}...Braves Lose :(`}</h2>
				)}
			</div>
		</main>
	)
}
