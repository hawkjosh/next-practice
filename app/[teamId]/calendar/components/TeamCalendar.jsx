import Link from 'next/link'
import Image from 'next/image'
import { useMediaRender } from '@/utils/useMediaRender'

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
						className='relative flex items-end justify-center h-16 border md:h-20 lg:h-24 xl:h-28 -mb-[1px] -mr-[1px]'>
						<div className='absolute top-[2.5%] right-[5%] text-xs md:text-sm xl:text-base'>
							{day.date}
						</div>
						{day.info && (
							<Link
								// href={`/${teamId}/calendar/${
								// 	day.info.isDoubleHeader
								// 		? `${day.info.gameId},${day.info.gameIdGm2}`
								// 		: day.info.gameId
								// }`}
								href={`/${teamId}/calendar/${day.info.gameId}`}
								className='relative flex items-center justify-center w-full h-full gap-1 p-3 md:gap-2'>
								<div className='text-xs font-light sm:text-sm md:text-base lg:text-lg xl:text-xl'>
									{day.info.homeId === parseInt(teamId) ? 'vs' : '@'}
								</div>
								<Image
									src={
										day.info.homeId === parseInt(teamId)
											? useMediaRender(day.info.awayId).capDark
											: useMediaRender(day.info.homeId).capDark
									}
									width={100}
									height={100}
									alt='team logo'
									priority
									className='w-4 aspect-square sm:w-6 md:w-8 lg:w-10 xl:w-12'
								/>
								{day.info.isDoubleHeader && (
									<Link
										href={`/${teamId}/calendar/${day.info.gameIdGm2}`}
										className='p-[2px] text-xs text-[lime] font-semibold absolute top-0 left-[2.5%] sm:text-sm'>
										DH
									</Link>
								)}
								{/* {day.info.isDoubleHeader && (
									<div className='p-[2px] text-xs text-[lime] font-semibold absolute top-0 left-[2.5%] sm:text-sm'>
										DH
									</div>
								)} */}
							</Link>
						)}
					</div>
				))}
			</div>
		</div>
	)
}
