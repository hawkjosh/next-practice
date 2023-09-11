const BASE_URL = 'https://statsapi.mlb.com/api/'

const ENDPOINTS = {
	game_boxscore: {
		url: `${BASE_URL}{ver}/game/{gamePk}/boxscore`,
		path_params: {
			ver: {
				type: 'str',
				default: 'v1',
				leading_slash: false,
				trailing_slash: false,
				required: true,
			},
			gamePk: {
				type: 'str',
				default: '',
				leading_slash: false,
				trailing_slash: false,
				required: true,
			},
		},
		query_params: ['timecode', 'fields'],
		required_params: [[]],
	},
	game_linescore: {
		url: `${BASE_URL}{ver}/game/{gamePk}/linescore`,
		path_params: {
			ver: {
				type: 'str',
				default: 'v1',
				leading_slash: false,
				trailing_slash: false,
				required: true,
			},
			gamePk: {
				type: 'str',
				default: '',
				leading_slash: false,
				trailing_slash: false,
				required: true,
			},
		},
		query_params: ['timecode', 'fields'],
		required_params: [[]],
	},
	person: {
		url: `${BASE_URL}{ver}/people/{personId}`,
		path_params: {
			ver: {
				type: 'str',
				default: 'v1',
				leading_slash: false,
				trailing_slash: false,
				required: true,
			},
			personId: {
				type: 'str',
				default: '',
				leading_slash: false,
				trailing_slash: false,
				required: true,
			},
		},
		query_params: ['hydrate', 'fields'],
		required_params: [[]],
	},
	schedule: {
		url: `${BASE_URL}{ver}/schedule`,
		path_params: {
			ver: {
				type: 'str',
				default: 'v1',
				leading_slash: false,
				trailing_slash: false,
				required: true,
			},
		},
		query_params: [
			'scheduleType',
			'eventTypes',
			'hydrate',
			'teamId',
			'leagueId',
			'sportId',
			'gamePk',
			'gamePks',
			'venueIds',
			'gameTypes',
			'date',
			'startDate',
			'endDate',
			'opponentId',
			'fields',
		],
		required_params: [['sportId'], ['gamePk'], ['gamePks']],
	},
	all_teams: {
		url: `${BASE_URL}{ver}/teams`,
		path_params: {
			ver: {
				type: 'str',
				default: 'v1',
				leading_slash: false,
				trailing_slash: false,
				required: true,
			},
		},
		query_params: [
			'season',
			'activeStatus',
			'leagueIds',
			'sportId',
			'sportIds',
			'gameType',
			'hydrate',
			'fields',
		],
		required_params: [[]],
	},
	team: {
		url: `${BASE_URL}{ver}/teams/{teamId}`,
		path_params: {
			ver: {
				type: 'str',
				default: 'v1',
				leading_slash: false,
				trailing_slash: false,
				required: true,
			},
			teamId: {
				type: 'str',
				default: '',
				leading_slash: false,
				trailing_slash: false,
				required: true,
			},
		},
		query_params: ['season', 'sportId', 'hydrate', 'fields'],
		required_params: [[]],
	},
	team_roster: {
		url: `${BASE_URL}{ver}/teams/{teamId}/roster`,
		path_params: {
			ver: {
				type: 'str',
				default: 'v1',
				leading_slash: false,
				trailing_slash: false,
				required: true,
			},
			teamId: {
				type: 'str',
				default: '',
				leading_slash: false,
				trailing_slash: false,
				required: true,
			},
		},
		query_params: ['rosterType', 'season', 'date', 'hydrate', 'fields'],
		required_params: [[]],
	},
}

export default function buildUrl(endpoint, pathParams = {}, queryParams = {}) {
	let url = ENDPOINTS[endpoint].url

	for (const [key, value] of Object.entries(pathParams)) {
		url = url.replace(`{${key}}`, value)
	}

	const query = new URLSearchParams(queryParams).toString()
	return query ? `${url}?${query}` : url
}
