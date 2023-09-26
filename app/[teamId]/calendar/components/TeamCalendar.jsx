import Image from 'next/image'
import * as logo from '@/utils/useMediaUrl'

export default function TeamCalendar({
	calendarTitle,
	calendarData,
	emptyCells,
	teamId,
}) {
	const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

	return (
		<div className='flex flex-col w-full gap-3 pb-4'>
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
						className='relative flex items-end justify-center h-16 border border-white md:h-20 lg:h-24 xl:h-28 bg-slate-300'>
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
									priority
									className='w-4 aspect-square sm:w-6 md:w-8 lg:w-10 xl:w-12'
								/>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	)
}
