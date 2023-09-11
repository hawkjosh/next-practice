export default async function getTeamRoster(teamId) {
	const response = await fetch(
		`https://statsapi.mlb.com/api/v1/teams/${teamId}/roster`
	)

	if (!response.ok) {
		throw new Error('Failed to fetch data')
	}

	const { roster } = await response.json()

	return roster
}
