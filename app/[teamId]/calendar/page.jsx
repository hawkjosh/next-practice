import Image from 'next/image'
import * as logo from '@/utils/useMediaUrl'

// Components
import { getMonthData } from './components/MonthData'

export default async function CalendarSchedule({ params }) {
	const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
	const data = await Promise.all(
		months.map(async (month) => {
			const { calendarTitle, calendarData, emptyCells } = await getMonthData(
				params.teamId,
				month
			)
			return { calendarTitle, calendarData, emptyCells, teamId: params.teamId }
		})
	)

	return (
		<main>
			<div className='page-container'>
				{data.map((monthData, index) => (
					<CalendarView
						key={index}
						calendarTitle={monthData.calendarTitle}
						calendarData={monthData.calendarData}
						emptyCells={monthData.emptyCells}
						teamId={params.teamId}
					/>
				))}
			</div>
		</main>
	)
}

const CalendarView = ({ calendarTitle, calendarData, emptyCells, teamId }) => {
	const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
	return (
		<div className='calendar-container'>
			<div className='calendar-wrapper'>
				<div className='calendar-label'>{calendarTitle}</div>
				<div className='calendar-header-row'>
					{weekdays.map((day) => (
						<div>{day}</div>
					))}
				</div>
				<div className='calendar-body'>
					{emptyCells}
					{calendarData.map((day, index) => (
						<div
							key={index}
							className='calendar-day'>
							<div className='calendar-day-date'>{day.date}</div>
							{day.info && (
								<div className='calendar-day-info'>
									<span
										className={
											day.info.homeId === parseInt(teamId) ? 'home' : 'away'
										}>
										{day.info.homeId === parseInt(teamId) ? 'vs' : '@'}
									</span>
									<Image
										src={
											day.info.homeId === parseInt(teamId)
												? logo.logoUrlCapLt(day.info.awayId)
												: logo.logoUrlCapLt(day.info.homeId)
										}
										width={1}
										height={1}
										alt='team logo'
									/>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
