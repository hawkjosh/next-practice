import dayjs from 'dayjs'

export const useDateFormat = (dateStr) => {
	const seasonYear = dayjs(dateStr).format('YYYY')

	const monthDay = dayjs(dateStr).format('M/D')

	const calendarDay = dayjs(dateStr).format('D')

	const calendarTitle = dayjs(dateStr).format('MMMM YYYY')

	const gameDate = dayjs(dateStr).format('ddd, MMM D')

	const gameStart = dayjs(dateStr).format('h:mm A')

	return {
		seasonYear,
		monthDay,
		calendarDay,
		calendarTitle,
		gameDate,
		gameStart,
	}
}
