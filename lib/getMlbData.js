import buildUrl from '@/utils/useBuildUrl'

export async function getTeams() {
	const url = buildUrl('teams', {}, { sportId: 1 })
	const res = await fetch(url, {
		next: {
			revalidate: 0
		}
	})

	const { teams } = await res.json()

	teams.sort((a, b) => {
		if (a.name < b.name) return -1
		if (a.name > b.name) return 1
		return 0
	})

	return teams
}

export async function getTeam(id) {
	const url = buildUrl('teams', {}, { teamId: id })
	const res = await fetch(url, {
		next: {
			revalidate: 0
		}
	})

	const { teams } = await res.json()

	const [{ id: teamId, franchiseName: location, clubName: teamName }] = teams

	return { teamId, location, teamName }
}

// export async function getSchedule(id) {
// 	const url = buildUrl(
// 		'schedule',
// 		{},
// 		{ sportId: 1, season: 2023, gameType: 'R', teamId: id }
// 	)
// 	const res = await fetch(url, {
// 		next: {
// 			revalidate: 0
// 		}
// 	})

// 	const { dates } = await res.json()

// 	const title = dates[0].date
// 	const games = dates.flatMap((date) => date.games)

// 	return { title, games }
// }

export async function getSchedule(id) {
	const url = buildUrl(
		'schedule',
		{},
		{ sportId: 1, season: 2023, gameType: 'R', teamId: id }
	)
	const res = await fetch(url, {
		next: {
			revalidate: 0
		}
	})

	const { dates } = await res.json()

	return dates
}

export async function getGameBoxscore(gameId) {
	const url = buildUrl('game_boxscore', { gamePk: gameId }, {})
	const res = await fetch(url, {
		next: {
			revalidate: 0
		}
	})

	const { teams } = await res.json()

	const {
		home: {
			team: {
				teamName: homeTeam,
				record: { wins: homeWs, losses: homeLs },
			},
			teamStats: { batting: homeOffense, pitching: homePitching },
		},
		away: {
			team: {
				teamName: awayTeam,
				record: { wins: awayWs, losses: awayLs },
			},
			teamStats: { batting: awayOffense, pitching: awayPitching },
		},
	} = teams

	return {
		homeTeam,
		homeWs,
		homeLs,
		homeOffense,
		homePitching,
		awayTeam,
		awayWs,
		awayLs,
		awayOffense,
		awayPitching,
	}
}

export async function getGameLinescore(gameId) {
	const url = buildUrl('game_linescore', { gamePk: gameId }, {})
	const res = await fetch(url, {
		next: {
			revalidate: 0
		}
	})

	const { innings } = await res.json()

	return innings
}

export async function getRoster(teamId) {
	const url = buildUrl('roster', { teamId: teamId }, {})
	const res = await fetch(url, {
		next: {
			revalidate: 0
		}
	})

	const { roster } = await res.json()

	roster.sort(
		(a, b) => parseInt(a.jerseyNumber, 10) - parseInt(b.jerseyNumber, 10)
	)

	return roster
}

export async function getPlayer(playerId) {
	const url = buildUrl('person', { personId: playerId }, {})
	const res = await fetch(url, {
		next: {
			revalidate: 0
		}
	})

	const { people } = await res.json()

	return people
}

export async function getMonthSchedule(teamId, month) {
	const monthMapping = {
		Mar: { start: '2023-03-01', end: '2023-03-31' },
		Apr: { start: '2023-04-01', end: '2023-04-30' },
		May: { start: '2023-05-01', end: '2023-05-31' },
		Jun: { start: '2023-06-01', end: '2023-06-30' },
		Jul: { start: '2023-07-01', end: '2023-07-31' },
		Aug: { start: '2023-08-01', end: '2023-08-31' },
		Sep: { start: '2023-09-01', end: '2023-09-30' },
		Oct: { start: '2023-10-01', end: '2023-10-31' },
	}

	const { start, end } = monthMapping[month]

	const url = buildUrl(
		'schedule',
		{},
		{
			sportId: 1,
			teamId: teamId,
			gameType: 'R',
			startDate: start,
			endDate: end,
		}
	)
	const res = await fetch(url, {
		next: {
			revalidate: 0
		}
	})

	const { dates } = await res.json()

	return dates
}
