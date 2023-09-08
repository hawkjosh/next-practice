async function getRoster() {
	const response = await fetch(
		'https://statsapi.mlb.com/api/v1/teams/144/roster',
		{
			next: {
				revalidate: 0,
			},
		}
	)

	if (!response.ok) {
		throw new Error('Failed to fetch data')
	}

	const data = await response.json()

	return data.roster
}

export default async function RosterList() {
	const roster = await getRoster()

	return (
		<div>
			<div className='flex flex-col divide-y'>
				{roster.map((player) => (
					<div
						key={player.person.id}
						className='flex divide-x py-2 items-center'>
						<div className='flex px-2'>
							Player Name: {player.person.fullName}
						</div>
						<div className='flex px-2'>Number: {player.jerseyNumber}</div>
						<div className='flex px-2'>Position: {player.position.name}</div>
					</div>
				))}
			</div>
		</div>
	)
}
