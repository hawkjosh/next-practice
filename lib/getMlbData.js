import buildUrl from '@/utils/useBuildUrl'

export async function getTeams() {
	const url = buildUrl('teams', {}, { sportId: 1 })

	const res = await fetch(url, {
		cache: 'no-cache',
	})

	// if (!res.ok) throw new Error('failed to fetch teams')

	const result = await res.json()

	return result
}

export async function getTeam(id) {
	const url = buildUrl(
		'teams',
		{},
		{
			teamId: id,
			hydrate:
				'deviceProperties,venue,springVenue,standings,league,division,sport',
		}
	)

	const res = await fetch(url, {
		cache: 'no-cache',
	})

	// if (!res.ok) throw new Error('failed to fetch team')

	const result = await res.json()

	return result
}

export async function getRoster(id) {
	const url = buildUrl('roster', { teamId: id }, {})

	const res = await fetch(url, {
		cache: 'no-cache',
	})

	// if (!res.ok) throw new Error('failed to fetch roster')

	const result = await res.json()

	return result
}

export async function getPlayer(id) {
	const url = buildUrl(
		'player',
		{ personId: id },
		{
			hydrate:
				'person,stats(group=[hitting,pitching,fielding],type=[yearByYear])',
		}
	)

	const res = await fetch(url, {
		cache: 'no-cache',
	})

	// if (!res.ok) throw new Error('failed to fetch player')

	const result = await res.json()

	return result
}

export async function getSchedule(id) {
	const url = buildUrl(
		'schedule',
		{},
		{
			sportId: 1,
			season: 2023,
			gameType: 'R',
			teamId: id,
			hydrate: 'team',
			fields:
				'dates,date,totalGames,games,gamePk,gameDate,rescheduleDate,status,detailedState,statusCode,reason,teams,away,home,leagueRecord,wins,losses,score,team,id,abbreviation,franchiseName,clubName,isWinner,venue,name,doubleHeader,dayNight,gamesInSeries,seriesGameNumber',
		}
	)

	const res = await fetch(url, {
		cache: 'no-cache',
	})

	// if (!res.ok) throw new Error('failed to fetch schedule')

	const result = await res.json()

	return result
}

export async function getMonthSchedule(id, month) {
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
			teamId: id,
			gameType: 'R',
			startDate: start,
			endDate: end,
		}
	)

	const res = await fetch(url, {
		cache: 'no-cache',
	})

	// if (!res.ok) throw new Error('failed to fetch month schedule')

	const result = await res.json()

	return result
}

export async function getBoxscore(id) {
	const url = buildUrl('boxscore', { gamePk: id }, {})

	const res = await fetch(url, {
		cache: 'no-cache',
	})

	// if (!res.ok) throw new Error('failed to fetch box score')

	const result = await res.json()

	return result
}

export async function getLinescore(id) {
	const url = buildUrl('linescore', { gamePk: id }, {})

	const res = await fetch(url, {
		cache: 'no-cache',
	})

	// if (!res.ok) throw new Error('failed to fetch line score')

	const result = await res.json()

	return result
}
