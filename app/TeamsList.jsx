import Link from 'next/link'

async function getTeams() {
	const response = await fetch(
		'https://statsapi.mlb.com/api/v1/teams?sportId=1',
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

	return data.teams
}

export default async function TeamsList() {
	const teams = await getTeams()

	return (
		<div className='home'>
			{teams.map((team) => (
				<Link
					key={team.id}
					href='#'>
					{team.name}
				</Link>
			))}
		</div>
	)
}
