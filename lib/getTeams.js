export default async function getTeams() {
	const res = await fetch('https://statsapi.mlb.com/api/v1/teams?sportId=1')

	if (!res.ok) throw new Error('failed to fetch user')

	const { teams } = await res.json()

	return teams
}
