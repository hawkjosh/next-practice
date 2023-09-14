import Image from 'next/image'
import { getFebData } from './components/FebCal'
import { getMarData } from './components/MarCal'
import { getAprData } from './components/AprCal'
import { getMayData } from './components/MayCal'
import { getJunData } from './components/JunCal'
import { useDateFormat } from '@/utils/useDateFormat'
import * as logo from '@/utils/useMediaUrl'

export default async function CalendarSchedule({ params }) {
	const { calendarTitle: febCalendarTitle, calendarData: febCalendarData, emptyCells: febEmptyCells } = await getFebData(
		params.teamId
	)
	const { calendarTitle: marCalendarTitle, calendarData: marCalendarData, emptyCells: marEmptyCells } = await getMarData(
		params.teamId
	)
	const { calendarTitle: aprCalendarTitle, calendarData: aprCalendarData, emptyCells: aprEmptyCells } = await getAprData(
		params.teamId
	)
	const { calendarTitle: mayCalendarTitle, calendarData: mayCalendarData, emptyCells: mayEmptyCells } = await getMayData(
		params.teamId
	)
	const { calendarTitle: junCalendarTitle, calendarData: junCalendarData, emptyCells: junEmptyCells } = await getJunData(
		params.teamId
	)

	return (
		<main>
			<div className='page-container'>
				<div className='text-center text-2xl'>{febCalendarTitle}</div>
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
					{febEmptyCells}
					{febCalendarData.map((day, index) => (
						<div
							key={index}
							className='calendar-day'
							style={{ border: '1px solid white' }}>
							<div style={{ textAlign: 'right' }}>{day.date}</div>
							{day.info && (
								<div>
									<div className='flex justify-center items-center gap-3'>
										<Image
											src={logo.logoUrlCapLt(day.info.awayId)}
											width={25}
											height={25}
											alt='team logo'
										/>
										<span>@</span>
										<Image
											src={logo.logoUrlCapLt(day.info.homeId)}
											width={25}
											height={25}
											alt='team logo'
										/>
									</div>
									<div className='text-center'>{day.info.venue}</div>
									<div className='text-center'>
										{useDateFormat(day.info.time).gameStart}
									</div>
								</div>
							)}
						</div>
					))}
				</div>
				
				<div className='text-center text-2xl'>{marCalendarTitle}</div>
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
					{marEmptyCells}
					{marCalendarData.map((day, index) => (
						<div
							key={index}
							className='calendar-day'
							style={{ border: '1px solid white' }}>
							<div style={{ textAlign: 'right' }}>{day.date}</div>
							{day.info && (
								<div>
									<div className='flex justify-center items-center gap-3'>
										<Image
											src={logo.logoUrlCapLt(day.info.awayId)}
											width={25}
											height={25}
											alt='team logo'
										/>
										<span>@</span>
										<Image
											src={logo.logoUrlCapLt(day.info.homeId)}
											width={25}
											height={25}
											alt='team logo'
										/>
									</div>
									<div className='text-center'>{day.info.venue}</div>
									<div className='text-center'>
										{useDateFormat(day.info.time).gameStart}
									</div>
								</div>
							)}
						</div>
					))}
				</div>

				<div className='text-center text-2xl'>{aprCalendarTitle}</div>
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
					{aprEmptyCells}
					{aprCalendarData.map((day, index) => (
						<div
							key={index}
							className='calendar-day'
							style={{ border: '1px solid white' }}>
							<div style={{ textAlign: 'right' }}>{day.date}</div>
							{day.info && (
								<div>
									<div className='flex justify-center items-center gap-3'>
										<Image
											src={logo.logoUrlCapLt(day.info.awayId)}
											width={25}
											height={25}
											alt='team logo'
										/>
										<span>@</span>
										<Image
											src={logo.logoUrlCapLt(day.info.homeId)}
											width={25}
											height={25}
											alt='team logo'
										/>
									</div>
									<div className='text-center'>{day.info.venue}</div>
									<div className='text-center'>
										{useDateFormat(day.info.time).gameStart}
									</div>
								</div>
							)}
						</div>
					))}
				</div>

				<div className='text-center text-2xl'>{mayCalendarTitle}</div>
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
					{mayEmptyCells}
					{mayCalendarData.map((day, index) => (
						<div
							key={index}
							className='calendar-day'
							style={{ border: '1px solid white' }}>
							<div style={{ textAlign: 'right' }}>{day.date}</div>
							{day.info && (
								<div>
									<div className='flex justify-center items-center gap-3'>
										<Image
											src={logo.logoUrlCapLt(day.info.awayId)}
											width={25}
											height={25}
											alt='team logo'
										/>
										<span>@</span>
										<Image
											src={logo.logoUrlCapLt(day.info.homeId)}
											width={25}
											height={25}
											alt='team logo'
										/>
									</div>
									<div className='text-center'>{day.info.venue}</div>
									<div className='text-center'>
										{useDateFormat(day.info.time).gameStart}
									</div>
								</div>
							)}
						</div>
					))}
				</div>

				<div className='text-center text-2xl'>{junCalendarTitle}</div>
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
					{junEmptyCells}
					{junCalendarData.map((day, index) => (
						<div
							key={index}
							className='calendar-day'
							style={{ border: '1px solid white' }}>
							<div style={{ textAlign: 'right' }}>{day.date}</div>
							{day.info && (
								<div>
									<div className='flex justify-center items-center gap-3'>
										<Image
											src={logo.logoUrlCapLt(day.info.awayId)}
											width={25}
											height={25}
											alt='team logo'
										/>
										<span>@</span>
										<Image
											src={logo.logoUrlCapLt(day.info.homeId)}
											width={25}
											height={25}
											alt='team logo'
										/>
									</div>
									<div className='text-center'>{day.info.venue}</div>
									<div className='text-center'>
										{useDateFormat(day.info.time).gameStart}
									</div>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</main>
	)
}
