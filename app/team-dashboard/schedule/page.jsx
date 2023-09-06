import Link from 'next/link'

// Importing Components
import ScheduleList from './ScheduleList'

export default async function Schedule() {
	return (
		<main>
			<div className='@container text-center mx-auto w-full max-w-5xl pb-3'>
				<div className='@lg:underline text-4xl font-extrabold uppercase'>
					Team Schedule
				</div>
			</div>
			<ScheduleList />
		</main>
	)
}
