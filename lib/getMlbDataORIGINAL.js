import buildUrl from '@/utils/useBuildUrl'

export async function getAllTeams() {
	const url = buildUrl('all_teams', {}, { sportId: 1 })
	const res = await fetch(url)

	// if (!res.ok) throw new Error('failed to fetch teams')

	const { teams } = await res.json()

	teams.sort((a, b) => {
		if (a.name < b.name) return -1
		if (a.name > b.name) return 1
		return 0
	})

	return teams
}

// export async function getTeam(id) {
// 	const url = buildUrl('team', { teamId: id }, {})
// 	const res = await fetch(url)

// 	if (!res.ok) throw new Error('failed to fetch team')

// 	const { teams } = await res.json()
// 	const [{ id: teamId, name: longName, teamName: shortName }] = teams
// 	return { teamId, longName, shortName }
// }

export async function getTeam(id) {
	const url = buildUrl('all_teams', {}, { teamId: id })
	const res = await fetch(url)

	if (!res.ok) throw new Error('failed to fetch team')

	const { teams } = await res.json()
	const [{ id: teamId, name: longName, teamName: shortName }] = teams
	return { teamId, longName, shortName }
}

export async function getSchedule(teamId) {
	const url = buildUrl(
		'schedule',
		{},
		{ sportId: 1, season: 2023, gameType: 'R', teamId: teamId }
	)
	const res = await fetch(url)

	if (!res.ok) throw new Error('failed to fetch schedule')

	const { dates } = await res.json()

	return dates
}

export async function getRoster(teamId) {
	const url = buildUrl('team_roster', { teamId: teamId }, {})
	const res = await fetch(url)

	if (!res.ok) throw new Error('failed to fetch roster')

	const { roster } = await res.json()

	roster.sort(
		(a, b) => parseInt(a.jerseyNumber, 10) - parseInt(b.jerseyNumber, 10)
	)

	return roster
}

export async function getPlayer(playerId) {
	const url = buildUrl('person', { personId: playerId }, {})
	const res = await fetch(url)

	if (!res.ok) throw new Error('failed to fetch player')

	const { people } = await res.json()

	return people
}

export async function getGameBoxscore(gameId) {
	const url = buildUrl('game_boxscore', { gamePk: gameId }, {})
	const res = await fetch(url)

	if (!res.ok) throw new Error('failed to fetch game boxscore')

	const { teams } = await res.json()

	return teams
}

export async function getGameLinescore(gameId) {
	const url = buildUrl('game_linescore', { gamePk: gameId }, {})
	const res = await fetch(url)

	if (!res.ok) throw new Error('failed to fetch game linescore')

	const { innings } = await res.json()

	return innings
}

export async function getMonthSchedule(teamId, month) {
	const monthMapping = {
		Apr: { start: '2023-03-30', end: '2023-04-30' },
		May: { start: '2023-05-01', end: '2023-05-31' },
		Jun: { start: '2023-06-01', end: '2023-06-30' },
		Jul: { start: '2023-07-01', end: '2023-07-31' },
		Aug: { start: '2023-08-01', end: '2023-08-31' },
		Sep: { start: '2023-09-01', end: '2023-10-01' },
	}

	const { start, end } = monthMapping[month]

	const url = buildUrl(
		'schedule',
		{},
		{
			sportId: 1,
			teamId: teamId,
			startDate: start,
			endDate: end,
		}
	)
	const res = await fetch(url)

	// const res = await fetch(url, {
	// 	next: {
	// 		revalidate: 0
	// 	}
	// })

	if (!res.ok) throw new Error('failed to fetch schedule')

	const { dates } = await res.json()

	return dates
}
