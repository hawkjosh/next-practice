export const useDateFormat = (dateStr) => {
	const seasonYear = new Date(dateStr).toLocaleDateString([], {
		year: 'numeric',
	})

	const monthDay = new Date(dateStr).toLocaleDateString([], {
		month: 'numeric',
		day: 'numeric',
	})

	const calendarDay = new Date(dateStr).toLocaleDateString([], {
		day: 'numeric',
	})

	const calendarTitle = new Date(dateStr).toLocaleDateString([], {
		month: 'long',
		year: 'numeric',
	})

	const gameDate = new Date(dateStr).toLocaleDateString('en-us', {
		weekday: 'short',
		month: 'short',
		day: 'numeric',
	})

	const gameStart = new Date(dateStr).toLocaleTimeString([], {
		hour: 'numeric',
		minute: 'numeric',
	})

	return {
		seasonYear,
		monthDay,
		calendarDay,
		calendarTitle,
		gameDate,
		gameStart,
	}
}
