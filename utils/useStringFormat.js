export const useStringFormat = () => {
	const capitalFirst = (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1)
	}

	const teamShortName = (str) => {
		const strSplit = str.split(' ')

		if (strSplit.includes('Red') && strSplit.includes('Sox')) {
			return 'Red Sox'
		}

		if (strSplit.includes('White') && strSplit.includes('Sox')) {
			return 'White Sox'
		}

		if (strSplit.includes('Blue') && strSplit.includes('Jays')) {
			return 'Blue Jays'
		}

		if (strSplit.length > 2) {
			return strSplit[strSplit.length - 1]
		} else {
			return strSplit[1]
		}
	}

	return { capitalFirst, teamShortName }
}
