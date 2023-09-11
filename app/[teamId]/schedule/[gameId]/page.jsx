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
		</div>
	)
}
