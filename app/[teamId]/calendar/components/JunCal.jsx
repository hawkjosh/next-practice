import { useDateFormat } from '@/utils/useDateFormat'
import { getJunSchedule } from '@/lib/getMlbData'

export async function getJunData(teamId) {
	const scheduleData = await getJunSchedule(teamId)
	const calendarTitle = useDateFormat(scheduleData[1].date).calendarTitle

	const calendarStart = new Date(scheduleData[0].date)
	calendarStart.setDate(calendarStart.getDate() + 1)
	const calendarEnd = new Date(scheduleData[scheduleData.length - 1].date)
	calendarEnd.setDate(calendarEnd.getDate() + 1)
	const calendarData = []

	for (let d = calendarStart; d <= calendarEnd; d.setDate(d.getDate() + 1)) {
		calendarData.push({ date: useDateFormat(d).monthDay, info: null })
	}

	scheduleData.forEach(({ date, game }) => {
		const calendarDay = calendarData.find(
			(day) => day.date === useDateFormat(date).monthDay
		)
		if (calendarDay) {
			calendarDay.info = {
				awayId: game.teams.away.team.id,
				homeId: game.teams.home.team.id,
				awayName: game.teams.away.team.name,
				homeName: game.teams.home.team.name,
				venue: game.venue.name,
				time: game.gameDate,
			}
		}
	})

	const firstDay = new Date(scheduleData[0].date).getDay() + 1
	const emptyCells = [...Array(firstDay)].map((_, index) => (
		<div
			key={`empty-${index}`}
			className='calendar-day'></div>
	))

	return { calendarTitle, calendarData, emptyCells }
}
