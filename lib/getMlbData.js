import buildUrl from '@/utils/useBuildUrl'
import { useDateFormat } from '@/utils/useDateFormat'

export async function getAllTeams() {
	const url = buildUrl('all_teams', { ver: 'v1' }, { sportId: 1 })
	const res = await fetch(url)

	// const res = await fetch(url, {
	// 	next: {
	// 		revalidate: 0
	// 	}
	// })

	if (!res.ok) throw new Error('failed to fetch teams')

	const { teams } = await res.json()

	teams.sort((a, b) => {
		if (a.name < b.name) return -1
		if (a.name > b.name) return 1
		return 0
	})

	return teams
}

export async function getTeam(teamId) {
	const url = buildUrl('team', { ver: 'v1', teamId: teamId })
	const res = await fetch(url)

	// const res = await fetch(url, {
	// 	next: {
	// 		revalidate: 0
	// 	}
	// })

	if (!res.ok) throw new Error('failed to fetch team')

	const { teams } = await res.json()

	return teams
}

export async function getSchedule(teamId) {
	const url = buildUrl(
		'schedule',
		{ ver: 'v1' },
		{ sportId: 1, season: 2023, gameType: 'R', teamId: teamId }
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

// PIN Below is working version for month of April
// export async function getScheduleByMonth(teamId) {
// 	const url = buildUrl(
// 		'schedule',
// 		{ ver: 'v1' },
// 		{ sportId: 1, teamId: teamId, startDate: '2023-04-01', endDate: '2023-05-01' }
// 	)
// 	const res = await fetch(url)

// 	// const res = await fetch(url, {
// 	// 	next: {
// 	// 		revalidate: 0
// 	// 	}
// 	// })

// 	if (!res.ok) throw new Error('failed to fetch schedule')

// 	const { dates } = await res.json()

// 	return dates.map((day) => ({
// 		date: useDateFormat(day.date).calendarDay,
// 		game: day.games[0],
// 	}))
// }

// PIN Below is test version to try and make start/end dates dynamic
export async function getScheduleByMonth(teamId) {
	const url = buildUrl(
		'schedule',
		{ ver: 'v1' },
		{ sportId: 1, teamId: teamId, startDate: '2023-02-01', endDate: '2023-03-01' }
	)
	// const res = await fetch(url)

	const res = await fetch(url, {
		next: {
			revalidate: 0
		}
	})

	if (!res.ok) throw new Error('failed to fetch schedule')

	const { dates } = await res.json()

	return dates.map((day) => ({
		date: day.date,
		game: day.games[0],
	}))
}

export async function getFebSchedule(teamId) {
	const url = buildUrl(
		'schedule',
		{ ver: 'v1' },
		{ sportId: 1, teamId: teamId, startDate: '2023-02-01', endDate: '2023-03-01' }
	)
	const res = await fetch(url)

	// const res = await fetch(url, {
	// 	next: {
	// 		revalidate: 0
	// 	}
	// })

	if (!res.ok) throw new Error('failed to fetch schedule')

	const { dates } = await res.json()

	return dates.map((day) => ({
		date: day.date,
		game: day.games[0],
	}))
}

export async function getMarSchedule(teamId) {
	const url = buildUrl(
		'schedule',
		{ ver: 'v1' },
		{ sportId: 1, teamId: teamId, startDate: '2023-03-01', endDate: '2023-04-01' }
	)
	const res = await fetch(url)

	// const res = await fetch(url, {
	// 	next: {
	// 		revalidate: 0
	// 	}
	// })

	if (!res.ok) throw new Error('failed to fetch schedule')

	const { dates } = await res.json()

	return dates.map((day) => ({
		date: day.date,
		game: day.games[0],
	}))
}

export async function getAprSchedule(teamId) {
	const url = buildUrl(
		'schedule',
		{ ver: 'v1' },
		{ sportId: 1, teamId: teamId, startDate: '2023-04-01', endDate: '2023-05-01' }
	)
	const res = await fetch(url)

	// const res = await fetch(url, {
	// 	next: {
	// 		revalidate: 0
	// 	}
	// })

	if (!res.ok) throw new Error('failed to fetch schedule')

	const { dates } = await res.json()

	return dates.map((day) => ({
		date: day.date,
		game: day.games[0],
	}))
}

export async function getMaySchedule(teamId) {
	const url = buildUrl(
		'schedule',
		{ ver: 'v1' },
		{ sportId: 1, teamId: teamId, startDate: '2023-05-01', endDate: '2023-06-01' }
	)
	const res = await fetch(url)

	// const res = await fetch(url, {
	// 	next: {
	// 		revalidate: 0
	// 	}
	// })

	if (!res.ok) throw new Error('failed to fetch schedule')

	const { dates } = await res.json()

	return dates.map((day) => ({
		date: day.date,
		game: day.games[0],
	}))
}

export async function getJunSchedule(teamId) {
	const url = buildUrl(
		'schedule',
		{ ver: 'v1' },
		{ sportId: 1, teamId: teamId, startDate: '2023-06-01', endDate: '2023-07-01' }
	)
	const res = await fetch(url)

	// const res = await fetch(url, {
	// 	next: {
	// 		revalidate: 0
	// 	}
	// })

	if (!res.ok) throw new Error('failed to fetch schedule')

	const { dates } = await res.json()

	return dates.map((day) => ({
		date: day.date,
		game: day.games[0],
	}))
}

export async function getRoster(teamId) {
	const url = buildUrl('team_roster', { ver: 'v1', teamId: teamId })
	const res = await fetch(url)

	// const res = await fetch(url, {
	// 	next: {
	// 		revalidate: 0
	// 	}
	// })

	if (!res.ok) throw new Error('failed to fetch roster')

	const { roster } = await res.json()

	roster.sort(
		(a, b) => parseInt(a.jerseyNumber, 10) - parseInt(b.jerseyNumber, 10)
	)

	return roster
}

export async function getPlayer(playerId) {
	const url = buildUrl('person', { ver: 'v1', personId: playerId })
	const res = await fetch(url)

	// const res = await fetch(url, {
	// 	next: {
	// 		revalidate: 0
	// 	}
	// })

	if (!res.ok) throw new Error('failed to fetch player')

	const { people } = await res.json()

	return people
}

export async function getGameBoxscore(gameId) {
	const url = buildUrl('game_boxscore', { ver: 'v1', gamePk: gameId })
	const res = await fetch(url)

	// const res = await fetch(url, {
	// 	next: {
	// 		revalidate: 0
	// 	}
	// })

	if (!res.ok) throw new Error('failed to fetch game boxscore')

	const { teams } = await res.json()

	return teams
}

export async function getGameLinescore(gameId) {
	const url = buildUrl('game_linescore', { ver: 'v1', gamePk: gameId })
	const res = await fetch(url)

	// const res = await fetch(url, {
	// 	next: {
	// 		revalidate: 0
	// 	}
	// })

	if (!res.ok) throw new Error('failed to fetch game linescore')

	const { innings } = await res.json()

	return innings
}
