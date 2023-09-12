import Image from 'next/image'
import { getMonthSchedule } from '@/lib/getMlbData'
import { useDateFormat } from '@/utils/useDateFormat'
import * as logo from '@/utils/useMediaUrl'

export default async function TeamSchedule({ params }) {
	const dates = await getMonthSchedule(
		params.teamId,
		'2023-03-30',
		'2023-04-30'
	)

	return (
		<main>
			<div className='page-container'>
				<div className='page-header'>
					<Image
						src={logo.logoUrlPrimLt(params.teamId)}
						width={1}
						height={1}
						alt='Team Logo'
					/>
					<div className='page-title'>{`${
						useDateFormat(dates[0].date).seasonYear
					} Schedule`}</div>
				</div>

				<div className='calendar-wrapper'>
					<h1>April 2023</h1>
					<ol className='calendar'>
						<li className='day-name'>Sun</li>
						<li className='day-name'>Mon</li>
						<li className='day-name'>Tue</li>
						<li className='day-name'>Wed</li>
						<li className='day-name'>Thu</li>
						<li className='day-name'>Fri</li>
						<li className='day-name'>Sat</li>

            {dates.map((date) => (
              date.games.map((game) => (
                <li key={game.gamePk}>
								<div className='date'>
									{useDateFormat(game.gameDate).monthDay}
								</div>

								<div className='venue'>{game.venue.name}</div>

								{game.status.detailedState === 'Scheduled' && (
									<div className='time'>
										{useDateFormat(game.gameDate).gameStart}
									</div>
								)}

								<div className='matchup'>
									<Image
										src={logo.logoUrlCapLt(game.teams.away.team.id)}
										width={25}
										height={25}
										alt='Team Logo'
									/>
									<span>@</span>
									<Image
										src={logo.logoUrlCapLt(game.teams.home.team.id)}
										width={25}
										height={25}
										alt='Team Logo'
									/>
								</div>

								{game.status.detailedState === 'Final' && (
									<div className='text-[black]'>{`${game.teams.away.team.name} ${game.teams.away.score} - ${game.teams.home.team.name} ${game.teams.home.score}`}</div>
								)}
							</li>
              ))
            ))}
            {/* {dates.map((date) => (
              date.games.map((game) => (
                <Link
								key={game.gamePk}
								href={`/${params.teamId}/schedule/${game.gamePk}`}
								className={`card`}>
								<div className='date'>
									{useDateFormat(game.gameDate).gameDate}
								</div>

								<div className='venue'>{game.venue.name}</div>

								{game.status.detailedState === 'Scheduled' && (
									<div className='time'>
										{useDateFormat(game.gameDate).gameStart}
									</div>
								)}

								<div className='matchup'>
									<Image
										src={logo.logoUrlCapLt(game.teams.away.team.id)}
										width={1}
										height={1}
										alt='Team Logo'
									/>
									<span>@</span>
									<Image
										src={logo.logoUrlCapLt(game.teams.home.team.id)}
										width={1}
										height={1}
										alt='Team Logo'
									/>
								</div>

								{game.status.detailedState === 'Final' && (
									<div className='text-[black]'>{`${game.teams.away.team.name} ${game.teams.away.score} - ${game.teams.home.team.name} ${game.teams.home.score}`}</div>
								)}
							</Link>
						))
            )} */}

						<li className='first-day'>1</li>

						<li>2</li>
						<li>3</li>
						<li>4</li>
						<li>5</li>
						<li>6</li>
						<li>7</li>
						<li>8</li>
						<li>9</li>
						<li>10</li>
						<li>11</li>
						<li>12</li>
						<li>13</li>
						<li>14</li>
						<li>15</li>
						<li>16</li>
						<li>17</li>
						<li>18</li>
						<li>19</li>
						<li>20</li>
						<li>21</li>
						<li>22</li>
						<li>23</li>
						<li>24</li>
						<li>25</li>
						<li>26</li>
						<li>27</li>
						<li>28</li>
						<li>29</li>
						<li>30</li>
						<li>31</li>
					</ol>
				</div>
			</div>
		</main>
	)
}
