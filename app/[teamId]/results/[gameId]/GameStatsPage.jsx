import Image from 'next/image'
import Link from 'next/link'
import { getTeam, getGameBoxscore } from '@/lib/getMlbData'
import * as logo from '@/utils/useMediaUrl'

const offenseHeaders = [
	'Team',
	'R',
	'2B',
	'3B',
	'HR',
	'K',
	'H',
	'SB',
	'TB',
	'RBI',
	'LOB',
]

const pitchingHeaders = [
	'Team',
	'Runs',
	'Hits',
	'Earned Runs',
	'ERA',
	'WHIP',
	'Tot Pitches',
	'Tot Balls',
	'Tot Strikes',
	'Tot Ks',
	'Tot BBs',
]

export default async function GameStatsPage({ params }) {
	const teamResult = await getTeam(params.teamId)
	const boxscoreResult = await getGameBoxscore(params.gameId)

	const {
		teams: [{ id, franchiseName, clubName }],
	} = teamResult

	const {
		teams: {
			home: {
				team: {
					teamName: homeTeam,
					record: { wins: homeWs, losses: homeLs },
				},
				teamStats: { batting: homeOffense, pitching: homePitching },
			},
			away: {
				team: {
					teamName: awayTeam,
					record: { wins: awayWs, losses: awayLs },
				},
				teamStats: { batting: awayOffense, pitching: awayPitching },
			},
		},
	} = boxscoreResult

	return (
		<div className='container max-w-screen-xl mx-auto'>
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
				<div className='text-3xl text-center'>
					{homeTeam} {homeOffense.runs} - {awayTeam} {awayOffense.runs}
				</div>
				<table className='table-fixed w-10/12 mx-auto max-w-[80rem]'>
					<caption className='pb-2 text-xl caption-top'>
						Offensive Game Stats
					</caption>
					<thead>
						<tr>
							{offenseHeaders.map((header, index) => (
								<th
									key={index}
									className='offense-header'>
									{header}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className='flex items-center gap-2 font-bold'>
								{awayTeam}
								<small className='font-light'>
									({awayWs}-{awayLs})
								</small>
							</td>
							<td className='text-center'>{awayOffense.runs}</td>
							<td className='text-center'>{awayOffense.doubles}</td>
							<td className='text-center'>{awayOffense.triples}</td>
							<td className='text-center'>{awayOffense.homeRuns}</td>
							<td className='text-center'>{awayOffense.strikeOuts}</td>
							<td className='text-center'>{awayOffense.hits}</td>
							<td className='text-center'>{awayOffense.stolenBases}</td>
							<td className='text-center'>{awayOffense.totalBases}</td>
							<td className='text-center'>{awayOffense.rbi}</td>
							<td className='text-center'>{awayOffense.leftOnBase}</td>
						</tr>
						<tr>
							<td className='flex items-center gap-2 font-bold'>
								{homeTeam}
								<small className='font-light'>
									({homeWs}-{homeLs})
								</small>
							</td>
							<td className='text-center'>{homeOffense.runs}</td>
							<td className='text-center'>{homeOffense.doubles}</td>
							<td className='text-center'>{homeOffense.triples}</td>
							<td className='text-center'>{homeOffense.homeRuns}</td>
							<td className='text-center'>{homeOffense.strikeOuts}</td>
							<td className='text-center'>{homeOffense.hits}</td>
							<td className='text-center'>{homeOffense.stolenBases}</td>
							<td className='text-center'>{homeOffense.totalBases}</td>
							<td className='text-center'>{homeOffense.rbi}</td>
							<td className='text-center'>{homeOffense.leftOnBase}</td>
						</tr>
					</tbody>
				</table>
				<br />
				<table className='table-fixed w-10/12 mx-auto max-w-[80rem]'>
					<caption className='pb-2 text-xl caption-top'>
						Pitching Game Stats
					</caption>
					<thead>
						<tr>
							{pitchingHeaders.map((header, index) => (
								<th
									key={index}
									className='pitching-header'>
									{header}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className='flex items-center gap-2 font-bold'>
								{awayTeam}
								<small className='font-light'>
									({awayWs}-{awayLs})
								</small>
							</td>
							<td className='text-center'>{awayPitching.runs}</td>
							<td className='text-center'>{awayPitching.hits}</td>
							<td className='text-center'>{awayPitching.earnedRuns}</td>
							<td className='text-center'>{awayPitching.era}</td>
							<td className='text-center'>{awayPitching.whip}</td>
							<td className='text-center'>{awayPitching.numberOfPitches}</td>
							<td className='text-center'>{awayPitching.balls}</td>
							<td className='text-center'>{awayPitching.strikes}</td>
							<td className='text-center'>{awayPitching.strikeOuts}</td>
							<td className='text-center'>{awayPitching.baseOnBalls}</td>
						</tr>
						<tr>
							<td className='flex items-center gap-2 font-bold'>
								{homeTeam}
								<small className='font-light'>
									({homeWs}-{homeLs})
								</small>
							</td>
							<td className='text-center'>{homePitching.runs}</td>
							<td className='text-center'>{homePitching.hits}</td>
							<td className='text-center'>{homePitching.earnedRuns}</td>
							<td className='text-center'>{homePitching.era}</td>
							<td className='text-center'>{homePitching.whip}</td>
							<td className='text-center'>{homePitching.numberOfPitches}</td>
							<td className='text-center'>{homePitching.balls}</td>
							<td className='text-center'>{homePitching.strikes}</td>
							<td className='text-center'>{homePitching.strikeOuts}</td>
							<td className='text-center'>{homePitching.baseOnBalls}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}
