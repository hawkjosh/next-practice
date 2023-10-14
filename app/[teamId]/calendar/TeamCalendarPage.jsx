import { getMonthScheduleData } from '@/lib/getMonthScheduleData'
import TeamCalendar from './components/TeamCalendar'

export default async function TeamCalendarPage({ params }) {
	const months = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
	const teamId = params.teamId

	const data = await Promise.all(
		months.map(async (month) => {
			const { calendarTitle, calendarData, emptyCells } =
				await getMonthScheduleData(teamId, month)

			return {
				calendarTitle,
				calendarData,
				emptyCells,
				teamId: teamId,
			}
		})
	)

	return data.map((monthData, index) => (
		<TeamCalendar
			key={index}
			calendarTitle={monthData.calendarTitle}
			calendarData={monthData.calendarData}
			emptyCells={monthData.emptyCells}
			teamId={teamId}
		/>
	))
}
