import { endpoint } from '@/utils/endpoint'
import Link from 'next/link'

const formatDate = (dateString) => {
	const date = new Date(dateString)
	return date.toLocaleDateString('en-US', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
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
					<div className='container mx-auto'>
						{data.schedule.map((game) => {
              return (
							<div key={game.id}>
								<span>{`Date: ${formatDate(game.date)}, `}</span>
								<span>{`Opponent: ${game.opponent}, `}</span>
								<span>{`Location: ${game.location}`}</span>
								<span>{`Result: ${game.result} (${game.win_score}-${game.lose_score})`}</span>
							</div>
						)})}
					</div>
				) : (
					<div>Loading...</div>
				)}
			</div>
		</>
	)
}
