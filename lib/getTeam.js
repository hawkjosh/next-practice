export default async function getTeam(teamId) {
	const res = await fetch(`https://statsapi.mlb.com/api/v1/teams/${teamId}`)

	if (!res.ok) throw new Error('failed to fetch user')

	const { teams } = await res.json()

	return teams
}
