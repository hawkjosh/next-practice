const BASE_URL = 'https://statsapi.mlb.com/api/v1'

const ENDPOINTS = {
	teams: {
		url: `${BASE_URL}/teams`,
		query_params: ['sportId', 'teamId', 'hydrate', 'fields'],
		required_params: [['sportId'], ['teamId']],
	},
	roster: {
		url: `${BASE_URL}/teams/{teamId}/roster`,
		path_params: {
			teamId: {
				type: 'str',
				default: '',
				leading_slash: false,
				trailing_slash: false,
				required: true,
			},
		},
		query_params: ['season', 'hydrate', 'fields'],
		required_params: [[]],
	},
	player: {
		url: `${BASE_URL}/people/{personId}`,
		path_params: {
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
		url: `${BASE_URL}/schedule`,
		path_params: {},
		query_params: [
			'date',
			'endDate',
			'gamePk',
			'gamePks',
			'opponentId',
			'scheduleType',
			'sportId',
			'startDate',
			'teamId',
			'venueIds',
			'hydrate',
			'fields',
		],
		required_params: [['sportId'], ['gamePk'], ['gamePks']],
	},
	boxscore: {
		url: `${BASE_URL}/game/{gamePk}/boxscore`,
		path_params: {
			gamePk: {
				type: 'str',
				default: '',
				leading_slash: false,
				trailing_slash: false,
				required: true,
			},
		},
		query_params: ['fields'],
		required_params: [[]],
	},
	linescore: {
		url: `${BASE_URL}/game/{gamePk}/linescore`,
		path_params: {
			gamePk: {
				type: 'str',
				default: '',
				leading_slash: false,
				trailing_slash: false,
				required: true,
			},
		},
		query_params: ['fields'],
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
