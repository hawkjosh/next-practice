export default function SpringLeagueInfo({ springLeague, springVenue }) {
	const {
		name: springStadiumName,
		location: { city: springStadiumCity, stateAbbrev: springStadiumState },
		fieldInfo: {
			capacity: springStadiumCapacity,
			turfType: springStadiumTurfType,
			roofType: springStadiumRoofType,
		},
	} = springVenue

  const { name: springLeagueName } = springLeague

  // console.log(springLeagueName)

	return (
		<div className='grid w-full grid-cols-6 gap-1 px-4 mx-auto lg:w-3/4'>
      <div className='col-span-6 mt-3 mb-2 text-2xl font-semibold uppercase'>Spring League Info:</div>
			<div className='col-span-6 sm:col-span-3 xl:col-span-2'>League Name - <strong className='text-lg'>{springLeagueName}</strong></div>
			<div className='col-span-6 sm:col-span-3 xl:col-span-2'>Stadium - <strong className='text-lg'>{springStadiumName}</strong></div>
			<div className='col-span-6 sm:col-span-3 xl:col-span-2'>
				Location - <strong className='text-lg'>{springStadiumCity}, {springStadiumState}</strong>
			</div>
			<div className='col-span-6 sm:col-span-3 xl:col-span-2'>Capacity - <strong className='text-lg'>{springStadiumCapacity}</strong></div>
			<div className='col-span-6 sm:col-span-3 xl:col-span-2'>Turf Type - <strong className='text-lg'>{springStadiumTurfType}</strong></div>
			<div className='col-span-6 sm:col-span-3 xl:col-span-2'>Roof Type - <strong className='text-lg'>{springStadiumRoofType}</strong></div>
		</div>
	)
}
