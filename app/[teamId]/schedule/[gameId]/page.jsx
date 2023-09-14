import { getGameBoxscore } from '@/lib/getMlbData'

export default async function GameInfo({ params }) {
	const {
		home: { team: homeInfo, teamStats: homeStats },
		away: { team: awayInfo, teamStats: awayStats },
	} = await getGameBoxscore(params.gameId)

	const {
		teamName: homeTeam,
		record: { wins: homeWs, losses: homeLs },
	} = homeInfo

	const {
		batting: homeOffense,
		pitching: homePitching,
		fielding: homeDefense,
	} = homeStats

	const {
		teamName: awayTeam,
		record: { wins: awayWs, losses: awayLs },
	} = awayInfo

	const {
		batting: awayOffense,
		pitching: awayPitching,
		fielding: awayDefense,
	} = awayStats

	return (
		<div>
			<div className='text-3xl text-center'>
				{homeTeam} {homeOffense.runs} - {awayTeam} {awayOffense.runs}
			</div>
			<div className='flex flex-col gap-10'>
				<div>
					<div>
						<div className='flex items-center gap-2 text-xl font-bold mb-4'>
							Game Stats for {homeTeam}
							<small>
								({homeWs}-{homeLs})
							</small>
						</div>
						<div className='flex flex-col gap-3'>
							<div className='flex flex-col gap-2'>
								<div className='underline'>Offense:</div>
								<div className='flex gap-3 divide-x'>
									<div className='ps-3'>Runs - {homeOffense.runs}</div>
									<div className='ps-3'>Doubles - {homeOffense.doubles}</div>
									<div className='ps-3'>Triples - {homeOffense.triples}</div>
									<div className='ps-3'>Home Runs - {homeOffense.homeRuns}</div>
									<div className='ps-3'>
										Strike Outs - {homeOffense.strikeOuts}
									</div>
									<div className='ps-3'>Hits - {homeOffense.hits}</div>
									<div className='ps-3'>
										Stolen Bases - {homeOffense.stolenBases}
									</div>
									<div className='ps-3'>
										Total Bases - {homeOffense.totalBases}
									</div>
									<div className='ps-3'>RBI's - {homeOffense.rbi}</div>
									<div className='ps-3'>
										Left On Base - {homeOffense.leftOnBase}
									</div>
								</div>
							</div>
							<div className='flex flex-col gap-2'>
								<div className='underline'>Pitching:</div>
								<div className='flex gap-3 divide-x'>
									<div className='ps-3'>Runs Allowed - {homePitching.runs}</div>
									<div className='ps-3'>Hits - {homePitching.hits}</div>
									<div className='ps-3'>
										Earned Runs - {homePitching.earnedRuns}
									</div>
									<div className='ps-3'>ERA - {homePitching.era}</div>
									<div className='ps-3'>WHIP - {homePitching.whip}</div>
									<div className='ps-3'>
										Total Pitches - {homePitching.numberOfPitches}
									</div>
									<div className='ps-3'>Total Balls - {homePitching.balls}</div>
									<div className='ps-3'>
										Total Strikes - {homePitching.strikes}
									</div>
									<div className='ps-3'>
										Strike Outs - {homePitching.strikeOuts}
									</div>
									<div className='ps-3'>Walks - {homePitching.baseOnBalls}</div>
								</div>
							</div>
							<div className='flex flex-col gap-2'>
								<div className='underline'>Defense:</div>
								<div className='flex gap-3 divide-x'>
									<div className='ps-3'>Assists - {homeDefense.assists}</div>
									<div className='ps-3'>Put Outs - {homeDefense.putOuts}</div>
									<div className='ps-3'>Chances - {homeDefense.chances}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div>
						<div className='flex items-center gap-2 text-xl font-bold mb-4'>
							Game Stats for {awayTeam}
							<small>
								({awayWs}-{awayLs})
							</small>
						</div>
						<div className='flex flex-col gap-3'>
							<div className='flex flex-col gap-2'>
								<div className='underline'>Offense:</div>
								<div className='flex gap-3 divide-x'>
									<div className='ps-3'>Runs - {awayOffense.runs}</div>
									<div className='ps-3'>Doubles - {awayOffense.doubles}</div>
									<div className='ps-3'>Triples - {awayOffense.triples}</div>
									<div className='ps-3'>Home Runs - {awayOffense.homeRuns}</div>
									<div className='ps-3'>
										Strike Outs - {awayOffense.strikeOuts}
									</div>
									<div className='ps-3'>Hits - {awayOffense.hits}</div>
									<div className='ps-3'>
										Stolen Bases - {awayOffense.stolenBases}
									</div>
									<div className='ps-3'>
										Total Bases - {awayOffense.totalBases}
									</div>
									<div className='ps-3'>RBI's - {awayOffense.rbi}</div>
									<div className='ps-3'>
										Left On Base - {awayOffense.leftOnBase}
									</div>
								</div>
							</div>
							<div className='flex flex-col gap-2'>
								<div className='underline'>Pitching:</div>
								<div className='flex gap-3 divide-x'>
									<div className='ps-3'>Runs Allowed - {awayPitching.runs}</div>
									<div className='ps-3'>Hits - {awayPitching.hits}</div>
									<div className='ps-3'>
										Earned Runs - {awayPitching.earnedRuns}
									</div>
									<div className='ps-3'>ERA - {awayPitching.era}</div>
									<div className='ps-3'>WHIP - {awayPitching.whip}</div>
									<div className='ps-3'>
										Total Pitches - {awayPitching.numberOfPitches}
									</div>
									<div className='ps-3'>Total Balls - {awayPitching.balls}</div>
									<div className='ps-3'>
										Total Strikes - {awayPitching.strikes}
									</div>
									<div className='ps-3'>
										Strike Outs - {awayPitching.strikeOuts}
									</div>
									<div className='ps-3'>Walks - {awayPitching.baseOnBalls}</div>
								</div>
							</div>
							<div className='flex flex-col gap-2'>
								<div className='underline'>Defense:</div>
								<div className='flex gap-3 divide-x'>
									<div className='ps-3'>Assists - {awayDefense.assists}</div>
									<div className='ps-3'>Put Outs - {awayDefense.putOuts}</div>
									<div className='ps-3'>Chances - {awayDefense.chances}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<table className='table-fixed w-10/12 mx-auto max-w-[80rem]'>
				<caption className='caption-top text-xl pb-2'>
					Offensive Game Stats
				</caption>
				<thead>
					<tr>
						<th className='text-left'>Team</th>
						<th>R</th>
						<th>2B</th>
						<th>3B</th>
						<th>HR</th>
						<th>K</th>
						<th>H</th>
						<th>SB</th>
						<th>TB</th>
						<th>RBI</th>
						<th>LOB</th>
					</tr>
				</thead>
				<tbody>
					<tr>
					<td className='font-bold flex items-center gap-2'>
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
						<td className='font-bold flex items-center gap-2'>
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
				<caption className='caption-top text-xl pb-2'>
					Pitching Game Stats
				</caption>
				<thead>
					<tr>
						<th className='text-left'>Team</th>
						<th>Runs</th>
						<th>Hits</th>
						<th>Earned Runs</th>
						<th>ERA</th>
						<th>WHIP</th>
						<th>NP</th>
						<th>Balls</th>
						<th>Strikes</th>
						<th>K</th>
						<th>BB</th>
					</tr>
				</thead>
				<tbody>
					<tr>
					<td className='font-bold flex items-center gap-2'>
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
						<td className='font-bold flex items-center gap-2'>
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
