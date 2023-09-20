import Image from 'next/image'
import Link from 'next/link'
import { getSchedule } from '@/lib/getMlbData'
import { useDateFormat } from '@/utils/useDateFormat'
import * as logo from '@/utils/useMediaUrl'

export default async function TeamSchedule({ params }) {
	const dates = await getSchedule(params.teamId)

	return (
		<div className='container max-w-screen-xl mx-auto'>
			<div className='flex flex-col w-11/12 gap-12 mx-auto'>
				<div className='flex items-center gap-2 p-3 justify-evenly'>
					<Link href={`/${params.teamId}`}>
						<Image
							src={logo.logoUrlPrimLt(params.teamId)}
							width={100}
							height={100}
							alt='Team Logo'
							className='h-auto w-28 md:w-48 lg:w-72 xl:w-96'
						/>
					</Link>
					<div className='text-lg font-extrabold text-center uppercase md:text-2xl lg:text-4xl xl:text-6xl'>
						Results
					</div>
				</div>
				{dates.map((date) => (
					<div>
						{date.totalGames === 1 ? (
							<div className='flex items-center gap-2'>
								<div>{useDateFormat(date.games[0].gameDate).gameDate}</div>
								<div>→</div>
								{date.games[0].status.detailedState === 'Postponed' ? (
									<div className='text-yellow-500'>
										POSTPONED: Rescheduled to{' '}
										{useDateFormat(date.games[0].rescheduleDate).gameDate}
									</div>
								) : (
									<div>
									{date.games[0].teams.away.isWinner && 
										`${date.games[0].teams.away.team.name} beat ${date.games[0].teams.home.team.name} ${date.games[0].teams.away.score} - ${date.games[0].teams.home.score}`
									}
									{date.games[0].teams.home.isWinner && 
										`${date.games[0].teams.home.team.name} beat ${date.games[0].teams.away.team.name} ${date.games[0].teams.home.score} - ${date.games[0].teams.away.score}`
									}
									</div>
								)}
							</div>
						) : (
							<div className='flex items-center gap-2'>
								<div>{useDateFormat(date.games[0].gameDate).gameDate}</div>
								<div>→</div>
								<div>DOUBLE-HEADER:</div>
								<div>
									{date.games[0].teams.away.isWinner && 
										`${date.games[0].teams.away.team.name} beat ${date.games[0].teams.home.team.name} ${date.games[0].teams.away.score} - ${date.games[0].teams.home.score}`
									}
									{date.games[0].teams.home.isWinner && 
										`${date.games[0].teams.home.team.name} beat ${date.games[0].teams.away.team.name} ${date.games[0].teams.home.score} - ${date.games[0].teams.away.score}`
									}
									</div>
									<div>|</div>
									<div>
									{date.games[1].teams.away.isWinner && 
										`${date.games[1].teams.away.team.name} beat ${date.games[1].teams.home.team.name} ${date.games[1].teams.away.score} - ${date.games[1].teams.home.score}`
									}
									{date.games[1].teams.home.isWinner && 
										`${date.games[1].teams.home.team.name} beat ${date.games[1].teams.away.team.name} ${date.games[1].teams.home.score} - ${date.games[1].teams.away.score}`
									}
									</div>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	)
}
