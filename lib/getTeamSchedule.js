export default async function getTeamSchedule(teamId) {
	const res = await fetch(
		`https://statsapi.mlb.com/api/v1/schedule?sportId=1&season=2023&gameType=R&teamId=${teamId}`
	)

	if (!res.ok) throw new Error('failed to fetch data')

	const { dates } = await res.json()

	return dates
}
