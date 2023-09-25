import Image from 'next/image'
import Link from 'next/link'
import { getTeam } from '@/lib/getMlbData'
import { getMonthScheduleData } from '@/lib/getMonthScheduleData'
import * as logo from '@/utils/useMediaUrl'

export default async function CalendarSchedule({ params }) {
	const teamResult = await getTeam(params.teamId)

	const {
		teams: [{ id, franchiseName, clubName }],
	} = teamResult

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

	return (
		<div className='container max-w-screen-xl mx-auto mb-6'>
			<div className='flex flex-col w-11/12 gap-12 mx-auto'>
			<Link
					href={`/${id}`}
					className='flex flex-col items-center gap-6 pb-6 border-b-4 justify-evenly sm:flex-row sm:gap-2 sm:px-4'>
					<Image
						src={logo.logoUrlPrimDrk(id)}
						width={100}
						height={100}
						alt={`${clubName} Logo`}
						className='w-1/3 h-auto max-w-xs min-w-[10rem] sm:w-1/4'
					/>
					<div className='flex items-center gap-2.5 sm:flex-col sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8'>
						<div className='text-2xl font-bold uppercase sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
							{franchiseName}
						</div>
						<div className='text-2xl font-bold uppercase sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
							{clubName}
						</div>
					</div>
				</Link>
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
		</div>
	)
}

const CalendarView = ({
	calendarTitle,
	calendarData,
	emptyCells,
	teamId,
}) => {
	const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

	return (
		<div>
			<div className='flex flex-col w-full gap-3'>
				<div className='text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
					{calendarTitle}
				</div>
				<div className='grid w-11/12 grid-cols-7 mx-auto place-items-center'>
					{weekdays.map((day, index) => (
						<div
							key={index}
							className='font-semibold md:text-lg xl:text-xl'>
							{day}
						</div>
					))}
				</div>
				<div className='grid w-11/12 grid-cols-7 mx-auto'>
					{emptyCells}
					{calendarData.map((day, index) => (
						<div
							key={index}
							className='relative flex items-end justify-center h-16 border border-white md:h-20 lg:h-24 xl:h-28 bg-slate-500'>
							<div className='absolute top-[2.5%] right-[5%] text-xs md:text-sm xl:text-base'>
								{day.date}
							</div>
							{day.info && (
								<div className='flex items-center justify-center h-full gap-1 p-3 md:gap-2'>
									<div
										className={`font-semibold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl ${
											day.info.homeId === parseInt(teamId)
												? 'text-emerald-500'
												: 'text-rose-500'
										}`}>
										{day.info.homeId === parseInt(teamId) ? 'vs' : '@'}
									</div>
									<Image
										src={
											day.info.homeId === parseInt(teamId)
												? logo.logoUrlCapLt(day.info.awayId)
												: logo.logoUrlCapLt(day.info.homeId)
										}
										width={100}
										height={100}
										alt='team logo'
										className='w-4 aspect-square sm:w-6 md:w-8 lg:w-10 xl:w-12'
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
