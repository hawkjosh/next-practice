import dayjs from 'dayjs'
import { useDateFormat } from '@/utils/useDateFormat'
import { getMonthSchedule } from '@/lib/getMlbData'

export async function getMonthScheduleData(teamId, month) {
	const { dates } = await getMonthSchedule(teamId, month)

	const dayData = dates.map((day) => ({
		game: day.games[0],
	}))

	const calendarTitle = useDateFormat(dayData[0].game.gameDate).calendarTitle
	const calendarStart = dayjs(dayData[0].game.gameDate).startOf('month').$d
	const calendarEnd = dayjs(dayData[0].game.gameDate).endOf('month').$d
	const calendarData = []

	let currentDay = dayjs(calendarStart)

	while (currentDay.isBefore(dayjs(calendarEnd))) {
		calendarData.push({
			date: useDateFormat(currentDay).calendarDay,
			info: null,
		})
		currentDay = currentDay.add(1, 'day')
	}

	dayData.forEach(({ game }) => {
		if (!game) return

		const calendarDay = calendarData.find(
			(day) => day.date === useDateFormat(game.gameDate).calendarDay
		)
		if (calendarDay) {
			calendarDay.info = {
				awayId: game.teams.away.team.id,
				homeId: game.teams.home.team.id,
				venue: game.venue.name,
				time: game.gameDate,
			}
		}
	})

	const firstDay = dayjs(dayData[0].game.gameDate).day()
	const emptyCells = [...Array(firstDay)].map((_, index) => (
		<div key={`empty-${index}`} />
	))

	return { calendarTitle, calendarData, emptyCells }
}
