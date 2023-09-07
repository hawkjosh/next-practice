import Link from 'next/link'
import Image from 'next/image'

async function getRoster() {
	const url = `https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBTeamRoster?teamAbv=ATL&getStats=true`
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'd402ff8d8amshb632d3dff23fa99p160c6bjsn9fc2d552e490',
			'X-RapidAPI-Host':
				'tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com',
		},
	}

	const response = await fetch(url, options, {
		next: {
			revalidate: 0,
		},
	})

	if (!response.ok) {
		throw new Error('Failed to fetch data')
	}

	const data = await response.json()

	return data.body.roster
}

export default async function RosterList() {
	const roster = await getRoster()

	return (
		<div>
			<div className='flex flex-col divide-y'>
				{roster.map((player) => (
					<div
						key={player.mlbID}
						className='flex divide-x py-2 items-center'>
						<Image
							src={player.mlbHeadshot || player.espnHeadshot}
							alt='player img'
							width={75}
							height={75}
						/>
						<div className='flex px-2'>Player Name: {player.longName}</div>
						<div className='flex px-2'>Number: {player.jerseyNum}</div>
						<div className='flex px-2'>Position: {player.pos}</div>
						<div className='flex px-2'>Height: {player.height}</div>
						<div className='flex px-2'>Weight: {player.weight}</div>
						<div className='flex px-2'>
							College: {player.college ? player.college : 'N/A'}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
