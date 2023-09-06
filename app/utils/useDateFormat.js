export const useDateFormat = (dateStr) => {
	const gameDate = new Date(dateStr).toLocaleDateString('en-us', {
		weekday: 'short',
		month: 'short',
		day: 'numeric',
	})

	const gameStart = new Date(dateStr).toLocaleTimeString([], {
		hour: 'numeric',
		minute: 'numeric',
	})

	return { gameDate, gameStart }
}
