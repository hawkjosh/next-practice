import { getBoxscore, getLinescore } from '@/lib/getMlbData'

// Components
import Linescore from './components/Linescore'
import OffensiveStats from './components/OffensiveStats'
import PitchingStats from './components/PitchingStats'

export default async function GameStatsPage({ params }) {
	const gameId = params.gameId

	const { innings, teams } = await getLinescore(gameId)

	const homeWinner = Boolean(teams.home.isWinner)
	const awayWinner = Boolean(teams.away.isWinner)

	const {
		teams: {
			home: {
				team: {
					id: homeId,
					teamName: homeTeam,
					record: { wins: homeWs, losses: homeLs },
				},
				teamStats: { batting: homeOffense, pitching: homePitching },
			},
			away: {
				team: {
					id: awayId,
					teamName: awayTeam,
					record: { wins: awayWs, losses: awayLs },
				},
				teamStats: { batting: awayOffense, pitching: awayPitching },
			},
		},
	} = await getBoxscore(gameId)

	return (
		<div className='flex flex-col gap-12 pb-4'>
			{homeWinner ? (
				<div className='text-3xl text-center font-bold sm:text-4xl md:text-5xl'>
					{`${homeTeam} win ${homeOffense.runs} - ${awayOffense.runs}`}
				</div>
			) : awayWinner ? (
				<div className='text-3xl text-center font-bold sm:text-4xl md:text-5xl'>
					{`${awayTeam} win ${awayOffense.runs} - ${homeOffense.runs}`}
				</div>
			) : null}
			<div className='w-11/12 mx-auto'>
				<Linescore
					innings={innings}
					teams={teams}
					homeId={homeId}
					awayId={awayId}
					homeTeam={homeTeam}
					awayTeam={awayTeam}
					homeRecord={{ homeWs, homeLs }}
					awayRecord={{ awayWs, awayLs }}
				/>
			</div>
			<div className='flex flex-col justify-evenly gap-16 sm:flex-row'>
				<div className='px-4 py-2 border-2 rounded-md'>
					<OffensiveStats
						homeTeam={homeTeam}
						homeOffense={homeOffense}
						awayTeam={awayTeam}
						awayOffense={awayOffense}
					/>
				</div>
				<div className='px-4 py-2 border-2 rounded-md'>
					<PitchingStats
						homeTeam={homeTeam}
						homePitching={homePitching}
						awayTeam={awayTeam}
						awayPitching={awayPitching}
					/>
				</div>
			</div>
		</div>
	)
}
