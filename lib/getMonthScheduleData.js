import dayjs from 'dayjs'
import { useDateFormat } from '@/utils/useDateFormat'
import { getMonthSchedule } from '@/lib/getMlbData'

export async function getMonthScheduleData(teamId, month) {
	const { dates } = await getMonthSchedule(teamId, month)

	const dayData = dates.map((day) => ({
		date: day.date,
		game: day.games[0],
	}))

	const calendarTitle = useDateFormat(dayData[0].date).calendarTitle
	const calendarStart = dayjs(dayData[0].date).startOf('month')
	const calendarEnd = dayjs(dayData[0].date).endOf('month')
	const calendarData = []

	let currentDay = dayjs(calendarStart)

	while (currentDay.isBefore(dayjs(calendarEnd))) {
		calendarData.push({
			date: useDateFormat(currentDay).calendarDay,
			info: null,
		})
		currentDay = currentDay.add(1, 'day')
	}

	dayData.forEach(({ game, date }) => {
		const calendarDay = calendarData.find(
			(day) => day.date === useDateFormat(date).calendarDay
		)
		if (calendarDay) {
			calendarDay.info = {
				awayId: game.teams.away.team.id,
				homeId: game.teams.home.team.id,
			}
		}
	})

	const firstDay = dayjs(dayData[0].date).startOf('month').day()
	const emptyCells = [...Array(firstDay)].map((_, index) => (
		<div key={`empty-${index}`} />
	))

	return { calendarTitle, calendarData, emptyCells }
}
