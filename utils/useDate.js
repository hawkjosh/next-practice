import dayjs from 'dayjs'

export const useDate = (dateStr) => {
	const seasonYear = dayjs(dateStr).format('YYYY')

	const monthDay = dayjs(dateStr).format('M/D')

	const calendarDay = dayjs(dateStr).format('D')

	const calendarTitle = dayjs(dateStr).format('MMMM YYYY')

	const gameDate = dayjs(dateStr).format('ddd, MMM D')

	const gameStart = dayjs(dateStr).format('h:mm A')

	const calendarStart = dayjs(dateStr).startOf('month')

	const calendarStartAlt = dayjs(dateStr)

	const calendarEnd = dayjs(dateStr).endOf('month')

	const firstDay = dayjs(dateStr).startOf('month').day()

	return {
		seasonYear,
		monthDay,
		calendarDay,
		calendarTitle,
		gameDate,
		gameStart,
		calendarStart,
		calendarStartAlt,
		calendarEnd,
		firstDay,
	}
}
