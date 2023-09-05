import { endpoint } from '@/utils/endpoint'
import Link from 'next/link'

const formatDate = (dateString) => {
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

async function getSchedule() {
	const data = await fetch(`${endpoint}/schedule`)

	if (!data.ok) {
		throw new Error('Failed to fetch data')
	}

	return data.json()
}

export default async function Schedule() {
	const data = await getSchedule()
	return (
		<>
			<div className='@container flex flex-col justify-center items-center mx-auto w-full bg-teal-500'>
				<div className='@lg:underline text-4xl font-extrabold uppercase'>
					Team Schedule
				</div>
				<div className='flex flex-col'>
					<Link href='/team-dashboard'>Return to Team Dashboard</Link>
					<Link href='/'>Return to MLB Home</Link>
				</div>
			</div>
			<div>
				{data ? (
					<div className='container mx-auto flex flex-col gap-2'>
						{data.schedule.map((game) => {
							return (
								<div
									key={game.id}
									className='flex flex-col divide-y divide-dashed border-solid border-2 border-sky-500'>
									<div>
										<strong>Date:</strong> {formatDate(game.date)}
									</div>
									<div>
										<strong>Opponent:</strong> {game.opponent}
									</div>
									<div>
										<strong>Location:</strong> {game.location}
									</div>
									<div>
										<strong>Result:</strong>{' '}
										{`${game.result} (${game.win_score}-${game.lose_score})`}
									</div>
								</div>
							)
						})}
					</div>
				) : (
					<div>Loading...</div>
				)}
			</div>
		</>
	)
}
