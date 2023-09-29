import { getTeam } from '@/lib/getMlbData'

export default async function TeamDashboardPage({ params }) {
	const teamId = params.teamId
	const { teams } = await getTeam(teamId)

	const [
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
		},
	] = teams
	const [
		{
			springVenue: {
				name: springStadiumName,
				location: { city: springStadiumCity, stateAbbrev: springStadiumState },
				fieldInfo: {
					capacity: springStadiumCapacity,
					turfType: springStadiumTurfType,
					roofType: springStadiumRoofType,
				},
			},
		},
	] = teams
	const [
		{
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
				records: { splitRecords, divisionRecords, leagueRecords },
				runsAllowed,
				runsScored,
				runDifferential,
			},
		},
	] = teams
	const homeWins = splitRecords[0].wins
	const homeLosses = splitRecords[0].losses
	const homePct = splitRecords[0].pct
	const awayWins = splitRecords[1].wins
	const awayLosses = splitRecords[1].losses
	const awayPct = splitRecords[1].pct
	const dayWins = splitRecords[12].wins
	const dayLosses = splitRecords[12].losses
	const dayPct = splitRecords[12].pct
	const nightWins = splitRecords[13].wins
	const nightLosses = splitRecords[13].losses
	const nightPct = splitRecords[13].pct
	const grassWins = splitRecords[14].wins
	const grassLosses = splitRecords[14].losses
	const grassPct = splitRecords[14].pct
	const turfWins = splitRecords[15].wins
	const turfLosses = splitRecords[15].losses
	const turfPct = splitRecords[15].pct

	const divOneName = divisionRecords[0].division.name
	const divOneWins = divisionRecords[0].wins
	const divOneLosses = divisionRecords[0].losses
	const divOnePct = divisionRecords[0].pct
	const divTwoName = divisionRecords[1].division.name
	const divTwoWins = divisionRecords[1].wins
	const divTwoLosses = divisionRecords[1].losses
	const divTwoPct = divisionRecords[1].pct
	const divThreeName = divisionRecords[2].division.name
	const divThreeWins = divisionRecords[2].wins
	const divThreeLosses = divisionRecords[2].losses
	const divThreePct = divisionRecords[2].pct

	const leagueOneName = leagueRecords[0].league.name
	const leagueOneWins = leagueRecords[0].wins
	const leagueOneLosses = leagueRecords[0].losses
	const leagueOnePct = leagueRecords[0].pct
	const leagueTwoName = leagueRecords[1].league.name
	const leagueTwoWins = leagueRecords[1].wins
	const leagueTwoLosses = leagueRecords[1].losses
	const leagueTwoPct = leagueRecords[1].pct

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
				<div className='flex gap-2 divide-x'>
					<div className='ps-2'>
						Home ({homePct}): {homeWins} - {homeLosses}
					</div>
					<div className='ps-2'>
						Away ({awayPct}): {awayWins} - {awayLosses}
					</div>
					<div className='ps-2'>
						Day ({dayPct}): {dayWins} - {dayLosses}
					</div>
					<div className='ps-2'>
						Night ({nightPct}): {nightWins} - {nightLosses}
					</div>
					<div className='ps-2'>
						Grass ({grassPct}): {grassWins} - {grassLosses}
					</div>
					<div className='ps-2'>
						Turf ({turfPct}): {turfWins} - {turfLosses}
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
