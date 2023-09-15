import Image from 'next/image'
import { useDateFormat } from '@/utils/useDateFormat'
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
	return (
		<>
			<div className='text-center text-2xl'>{calendarTitle}</div>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(7, 1fr)',
					placeItems: 'center',
					fontSize: '1.25rem',
					fontWeight: 'bold',
				}}>
				<div>Sun</div>
				<div>Mon</div>
				<div>Tue</div>
				<div>Wed</div>
				<div>Thu</div>
				<div>Fri</div>
				<div>Sat</div>
			</div>
			<div
				className='calendar-grid'
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(7, 1fr)',
				}}>
				{emptyCells}
				{calendarData.map((day, index) => (
					<div
						key={index}
						className='calendar-day'
						style={{ border: '1px solid white' }}>
						<div style={{ textAlign: 'right' }}>{day.date}</div>
						{day.info && (
							<div>
								<div className='flex justify-center items-center gap-2 pb-2'>
									<span>
										{day.info.homeId === parseInt(teamId) ? 'vs' : '@'}
									</span>
									<Image
										src={
											day.info.homeId === parseInt(teamId)
												? logo.logoUrlCapLt(day.info.awayId)
												: logo.logoUrlCapLt(day.info.homeId)
										}
										width={25}
										height={25}
										alt='team logo'
									/>
								</div>
								{day.info.score && (
									<>
										<div className='text-center'>{day.info.venue}</div>
										<div className='text-center'>
											{useDateFormat(day.info.time).gameStart}
										</div>
									</>
								)}
							</div>
						)}
					</div>
				))}
			</div>
		</>
	)
}
