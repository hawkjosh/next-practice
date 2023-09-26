import { getMonthScheduleData } from '@/lib/getMonthScheduleData'

// Components
import TeamCalendar from './components/TeamCalendar'

export default async function TeamCalendarPage({ params }) {
	const months = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']

	const data = await Promise.all(
		months.map(async (month) => {
			const { calendarTitle, calendarData, emptyCells } =
				await getMonthScheduleData(params.teamId, month)

			return {
				calendarTitle,
				calendarData,
				emptyCells,
				teamId: params.teamId,
			}
		})
	)

	return data.map((monthData, index) => (
		<TeamCalendar
			key={index}
			calendarTitle={monthData.calendarTitle}
			calendarData={monthData.calendarData}
			emptyCells={monthData.emptyCells}
			teamId={params.teamId}
		/>
	))
}
