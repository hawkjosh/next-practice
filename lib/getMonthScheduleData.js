import dayjs from 'dayjs'
import { useDateFormat } from '@/utils/useDateFormat'
import { getMonthSchedule } from '@/lib/getMlbData'

export async function getMonthScheduleData(teamId, month) {
	const { dates } = await getMonthSchedule(teamId, month)

	const [...gameData] = dates.map((day) => ({
		date: day.date,
		game: [...day.games],
	}))

	const calendarTitle = useDateFormat(gameData[0].date).calendarTitle
	const calendarStart = dayjs(gameData[0].date).startOf('month')
	const calendarEnd = dayjs(gameData[0].date).endOf('month')
	const calendarData = []

	let currentDay = dayjs(calendarStart)

	while (currentDay.isBefore(dayjs(calendarEnd))) {
		calendarData.push({
			date: useDateFormat(currentDay).calendarDay,
			info: null,
		})
		currentDay = currentDay.add(1, 'day')
	}

	gameData.forEach(({ date, game }) => {
		const calendarDay = calendarData.find(
			(day) => day.date === useDateFormat(date).calendarDay
		)
		if (calendarDay) {
			calendarDay.info = {
				awayId: game[0].teams.away.team.id,
				homeId: game[0].teams.home.team.id,
				gameId: game[0].gamePk,
			}
			// Check if double-header
			if (game[1]) {
				calendarDay.info.gameIdGm2 = game[1].gamePk
				calendarDay.info.isDoubleHeader = true
			}
		}
	})

	const firstDay = dayjs(gameData[0].date).startOf('month').day()
	const emptyCells = [...Array(firstDay)].map((_, index) => (
		<div key={`empty-${index}`} />
	))

	return { calendarTitle, calendarData, emptyCells }
}
