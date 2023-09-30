import { getTeam } from '@/lib/getMlbData'

// Components
import SpringLeagueInfo from './components/SpringLeagueInfo'
import TeamRecords from './components/TeamRecords'

export default async function TeamDashboardPage({ params }) {
	const teamId = params.teamId
	const {
		teams: [
			{
				springLeague,
				venue: { name: stadiumName },
				locationName,
				firstYearOfPlay,
				league: { name: leagueName, abbreviation: leagueShortName },
				division: { name: divisionName, nameShort: divisionShortName },
				springVenue,
				record: {
					streak: { streakCode },
					divisionRank,
					leagueRank,
					gamesPlayed,
					wildCardGamesBack,
					leagueGamesBack,
					divisionGamesBack,
					leagueRecord: {
						wins: leagueWins,
						losses: leagueLosses,
						pct: leaguePct,
					},
					records,
					runsAllowed,
					runsScored,
					runDifferential,
				},
			},
		],
	} = await getTeam(teamId)

	return (
		<div className='flex flex-col w-full gap-2'>
			<div className='flex flex-col w-full gap-4 px-4 mx-auto'>
				<div className='mt-3 mb-2 text-2xl font-semibold uppercase'>
					2023 General Info:
				</div>
				<div>Games Played: <strong className='text-lg'>{gamesPlayed}</strong></div>
				<div>
					Record: <strong className='text-lg'>{leagueWins} - {leagueLosses}</strong>
				</div>
				<div>Win%: <strong className='text-lg'>{leaguePct}</strong></div>
				<div>Streak: <strong className='text-lg'>{streakCode}</strong></div>
				<div>
					Runs Scored: <strong className='text-lg'>{runsScored}</strong> | Runs Allowed: <strong className='text-lg'>{runsAllowed}</strong>
				</div>
				<div>Run Differential: <strong className='text-lg'>{runDifferential}</strong></div>
			</div>

			<div className='flex flex-col w-full gap-4 px-4 mx-auto'>
				<div className='mt-3 mb-2 text-2xl font-semibold uppercase'>
					2023 Standings Info:
				</div>
				<div>League: <strong className='text-lg'>{leagueName}</strong></div>
				<div>
					{leagueShortName} Rank: <strong className='text-lg'>{leagueRank}</strong>
				</div>
				<div>
					{leagueShortName} Games Back: <strong className='text-lg'>{leagueGamesBack}</strong>
				</div>
				<div>Division: <strong className='text-lg'>{divisionName}</strong></div>
				<div>
					{divisionShortName} Rank: <strong className='text-lg'>{divisionRank}</strong>
				</div>
				<div>
					{divisionShortName} Games Back: <strong className='text-lg'>{divisionGamesBack}</strong>
				</div>
				<div>Wild Card Games Back: <strong className='text-lg'>{wildCardGamesBack}</strong></div>
			</div>

			<div className='flex flex-col w-full gap-4 px-4 mx-auto'>
				<div className='mt-3 mb-2 text-2xl font-semibold uppercase'>
					Other Info:
				</div>
				<div>Stadium: <strong className='text-lg'>{stadiumName}</strong></div>
				<div>Location: <strong className='text-lg'>{locationName}</strong></div>
				<div>First Year of Play: <strong className='text-lg'>{firstYearOfPlay}</strong></div>
			</div>

			<SpringLeagueInfo
				springLeague={springLeague}
				springVenue={springVenue}
			/>

			<TeamRecords
				leagueName={leagueShortName}
				records={records}
			/>
		</div>
	)
}
