import { useDateFormat } from '@/utils/useDateFormat'
import { getMonthSchedule } from '@/lib/getMlbData'

export async function getMonthData(teamId, month) {
	const scheduleData = await getMonthSchedule(teamId, month)
	const calendarTitle = useDateFormat(
		scheduleData[1].game.gameDate
	).calendarTitle

	const calendarStart = new Date(scheduleData[0].game.gameDate)
	const calendarEnd = new Date(
		scheduleData[scheduleData.length - 1].game.gameDate
	)
	const calendarData = []

	for (let d = calendarStart; d <= calendarEnd; d.setDate(d.getDate() + 1)) {
		calendarData.push({ date: useDateFormat(d).calendarDay, info: null })
	}

	scheduleData.forEach(({ game }) => {
		if (!game || game.rescheduleGameDate) return

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

	const firstDay = new Date(scheduleData[0].game.gameDate).getDay()
	const emptyCells = [...Array(firstDay)].map((_, index) => (
		<div
			key={`empty-${index}`}
			className='calendar-day'></div>
	))

	return { calendarTitle, calendarData, emptyCells }
}
