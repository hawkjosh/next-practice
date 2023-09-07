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

	function gameDateNew(dateStr) {
		const date = new Date(dateStr.slice(0, 4), dateStr.slice(4, 6) - 1, dateStr.slice(6, 8));
		
		const options = { year: '2-digit', month: 'numeric', day: 'numeric', weekday: 'short' };
		return date.toLocaleDateString('en-US', options)
	}

	function gameStartNew(str) {
		if (str.length < 2) return null;
		
		return str.slice(0, -1) + ' ' + str.slice(-1) + 'm';
	}
	
	return { gameDate, gameStart, gameDateNew, gameStartNew }
}
