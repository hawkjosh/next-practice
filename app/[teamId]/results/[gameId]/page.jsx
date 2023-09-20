import { getGameBoxscore } from '@/lib/getMlbData'

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

export default async function GameInfo({ params }) {
	const {
		homeTeam,
		homeOffense,
		homePitching,
		homeWs,
		homeLs,
		awayTeam,
		awayOffense,
		awayPitching,
		awayWs,
		awayLs,
	} = await getGameBoxscore(params.gameId)

	return (
		<div>
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
	)
}
