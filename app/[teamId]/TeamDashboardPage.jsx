import Link from 'next/link'

export default function TeamDashboardPage({ params }) {
	const teamId = params.teamId
	
	return (
		<div className='flex flex-col items-center w-full gap-12 md:flex-row md:gap-0 md:justify-evenly'>
			<Link
				href={`/${teamId}/roster`}
				className='text-xl transition-transform hover:scale-125 hover:text-yellow-400 md:text-2xl xl:text-3xl'>
				Roster
			</Link>
			<Link
				href={`/${teamId}/calendar`}
				className='text-xl transition-transform hover:scale-125 hover:text-yellow-400 md:text-2xl xl:text-3xl'>
				Calendar
			</Link>
			<Link
				href={`/${teamId}/results`}
				className='text-xl transition-transform hover:scale-125 hover:text-yellow-400 md:text-2xl xl:text-3xl'>
				Results
			</Link>
		</div>
	)
}
