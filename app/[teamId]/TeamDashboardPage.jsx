import { getTeam } from '@/lib/getMlbData'

export default async function TeamDashboardPage({ params }) {
	const teamId = params.teamId
	const {
		teams: [
			{
				springLeague: { name: springLeagueName },
				venue: { name: stadiumName },
				locationName,
				firstYearOfPlay,
				league: { name: leagueName },
				division: { name: divisionName },
				sport: { name: sportName },
				franchiseName,
				clubName,
				springVenue: {
					name: springStadiumName,
					location: {
						city: springStadiumCity,
						stateAbbrev: springStadiumState,
					},
					fieldInfo: {
						capacity: springStadiumCapacity,
						turfType: springStadiumTurfType,
						roofType: springStadiumRoofType,
					},
				},
				record: {
					streak: { streakCode },
					divisionRank,
					leagueRank,
					sportRank,
					gamesPlayed,
					gamesBack,
					wildCardGamesBack,
					leagueGamesBack,
					sportGamesBack,
					divisionGamesBack,
					leagueRecord: {
						wins: leagueWins,
						losses: leagueLosses,
						pct: leaguePct,
					},
					records: {
						splitRecords: [
							{ wins: homeWins, losses: homeLosses, pct: homePct },
							{ wins: awayWins, losses: awayLosses, pct: awayPct },
							{ wins: leftWins, losses: leftLosses, pct: leftPct },
							{ wins: leftHomeWins, losses: leftHomeLosses, pct: leftHomePct },
							{ wins: leftAwayWins, losses: leftAwayLosses, pct: leftAwayPct },
							{
								wins: rightHomeWins,
								losses: rightHomeLosses,
								pct: rightHomePct,
							},
							{
								wins: rightAwayWins,
								losses: rightAwayLosses,
								pct: rightAwayPct,
							},
							{ wins: rightWins, losses: rightLosses, pct: rightPct },
							{ wins: lastTenWins, losses: lastTenLosses, pct: lastTenPct },
							{
								wins: extraInningWins,
								losses: extraInningLosses,
								pct: extraInningPct,
							},
							{ wins: oneRunWins, losses: oneRunLosses, pct: oneRunPct },
							{ wins: winnersWins, losses: winnersLosses, pct: winnersPct },
							{ wins: dayWins, losses: dayLosses, pct: dayPct },
							{ wins: nightWins, losses: nightLosses, pct: nightPct },
							{ wins: grassWins, losses: grassLosses, pct: grassPct },
							{ wins: turfWins, losses: turfLosses, pct: turfPct },
						],
						divisionRecords: [
							{
								division: { name: divOneName },
								wins: divOneWins,
								losses: divOneLosses,
								pct: divOnePct,
							},
							{
								division: { name: divTwoName },
								wins: divTwoWins,
								losses: divTwoLosses,
								pct: divTwoPct,
							},
							{
								division: { name: divThreeName },
								wins: divThreeWins,
								losses: divThreeLosses,
								pct: divThreePct,
							},
						],
						leagueRecords: [
							{
								league: { name: leagueOneName },
								wins: leagueOneWins,
								losses: leagueOneLosses,
								pct: leagueOnePct,
							},
							{
								league: { name: leagueTwoName },
								wins: leagueTwoWins,
								losses: leagueTwoLosses,
								pct: leagueTwoPct,
							},
						],
					},
					runsAllowed,
					runsScored,
					runDifferential,
				},
			},
		],
	} = await getTeam(teamId)

	return (
		<div className='flex flex-col gap-1'>
			<div>Franchise Name: {franchiseName}</div>
			<div>Club Name: {clubName}</div>
			<div>Stadium: {stadiumName}</div>
			<div>Location: {locationName}</div>
			<div>First Year of Play: {firstYearOfPlay}</div>
			<div>Sport Name: {sportName}</div>
			<div>Sport Rank: {sportRank}</div>
			<div>League Name: {leagueName}</div>
			<div>League Rank: {leagueRank}</div>
			<div>Division Name: {divisionName}</div>
			<div>Division Rank: {divisionRank}</div>
			<div>Spring League: {springLeagueName}</div>
			<div>Spring Stadium: {springStadiumName}</div>
			<div>
				Spring Stadium Location: {springStadiumCity}, {springStadiumState}
			</div>
			<div>Spring Stadium Capacity: {springStadiumCapacity}</div>
			<div>Spring Stadium Turf Type: {springStadiumTurfType}</div>
			<div>Spring Stadium Roof Type: {springStadiumRoofType}</div>
			<div>Streak: {streakCode}</div>
			<div>Games Played: {gamesPlayed}</div>
			<div>Games Back: {gamesBack}</div>
			<div>Wild Card Games Back: {wildCardGamesBack}</div>
			<div>League Games Back: {leagueGamesBack}</div>
			<div>MLB Games Back: {sportGamesBack}</div>
			<div>Division Games Back: {divisionGamesBack}</div>
			<div>
				League Record: {leagueWins} - {leagueLosses}
			</div>
			<div>League Win %: {leaguePct}</div>
			<div>Runs Allowed: {runsAllowed}</div>
			<div>Runs Scored: {runsScored}</div>
			<div>Run Differential: {runDifferential}</div>
			<div className='flex flex-col'>
				<div>Split Records</div>
				<div className='grid grid-cols-5'>
					<div className='flex flex-col items-center gap-x-8'>
						<span className='underline'>Home</span>
						<span>
							{homeWins} - {homeLosses}
						</span>
						<span>({homePct})</span>
					</div>
					<div className='flex flex-col items-center'>
						<span className='underline'>Away</span>
						<span>
							{awayWins} - {awayLosses}
						</span>
						<span>({awayPct})</span>
					</div>
					<div className='flex flex-col items-center'>
						<span className='underline'>Day</span>
						<span>
							{dayWins} - {dayLosses}
						</span>
						<span>({dayPct})</span>
					</div>
					<div className='flex flex-col items-center'>
						<span className='underline'>Night</span>
						<span>
							{nightWins} - {nightLosses}
						</span>
						<span>({nightPct})</span>
					</div>
					<div className='flex flex-col items-center'>
						<span className='underline'>Grass</span>
						<span>
							{grassWins} - {grassLosses}
						</span>
						<span>({grassPct})</span>
					</div>
					<div className='flex flex-col items-center'>
						<span className='underline'>Turf</span>
						<span>
							{turfWins} - {turfLosses}
						</span>
						<span>({turfPct})</span>
					</div>
					<div className='flex flex-col items-center'>
						<span className='underline'>LHP</span>
						<span>
							{leftWins} - {leftLosses}
						</span>
						<span>({leftPct})</span>
					</div>
					<div className='flex flex-col items-center'>
						<span className='underline'>LHP Home</span>
						<span>
							{leftHomeWins} - {leftHomeLosses}
						</span>
						<span>({leftHomePct})</span>
					</div>
					<div className='flex flex-col items-center'>
						<span className='underline'>LHP Away</span>
						<span>
							{leftAwayWins} - {leftAwayLosses}
						</span>
						<span>({leftAwayPct})</span>
					</div>
					<div className='flex flex-col items-center'>
						<span className='underline'>RHP</span>
						<span>
							{rightWins} - {rightLosses}
						</span>
						<span>({rightPct})</span>
					</div>
					<div className='flex flex-col items-center'>
						<span className='underline'>RHP Home</span>
						<span>
							{rightHomeWins} - {rightHomeLosses}
						</span>
						<span>({rightHomePct})</span>
					</div>
					<div className='flex flex-col items-center'>
						<span className='underline'>RHP Away</span>
						<span>
							{rightAwayWins} - {rightAwayLosses}
						</span>
						<span>({rightAwayPct})</span>
					</div>
					<div className='flex flex-col items-center'>
						<span className='underline'>Last10</span>
						<span>
							{lastTenWins} - {lastTenLosses}
						</span>
						<span>({lastTenPct})</span>
					</div>
					<div className='flex flex-col items-center'>
						<span className='underline'>Xtras</span>
						<span>
							{extraInningWins} - {extraInningLosses}
						</span>
						<span>({extraInningPct})</span>
					</div>
					<div className='flex flex-col items-center'>
						<span className='underline'>1-Run</span>
						<span>
							{oneRunWins} - {oneRunLosses}
						</span>
						<span>({oneRunPct})</span>
					</div>
					<div className='flex flex-col items-center'>
						<span className='underline'>Winners</span>
						<span>
							{winnersWins} - {winnersLosses}
						</span>
						<span>({winnersPct})</span>
					</div>
				</div>
			</div>
			<div className='flex flex-col'>
				<div>Division Records</div>
				<div className='flex gap-2 divide-x'>
					<div className='ps-2'>
						{divOneName} ({divOnePct}): {divOneWins} - {divOneLosses}
					</div>
					<div className='ps-2'>
						{divTwoName} ({divTwoPct}): {divTwoWins} - {divTwoLosses}
					</div>
					<div className='ps-2'>
						{divThreeName} ({divThreePct}): {divThreeWins} - {divThreeLosses}
					</div>
				</div>
			</div>
			<div className='flex flex-col'>
				<div>League Records</div>
				<div className='flex gap-2 divide-x'>
					<div className='ps-2'>
						{leagueOneName} ({leagueOnePct}): {leagueOneWins} -{' '}
						{leagueOneLosses}
					</div>
					<div className='ps-2'>
						{leagueTwoName} ({leagueTwoPct}): {leagueTwoWins} -{' '}
						{leagueTwoLosses}
					</div>
				</div>
			</div>
		</div>
	)
}
