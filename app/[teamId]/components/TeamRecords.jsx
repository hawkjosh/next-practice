export default function TeamRecords({ leagueName, records }) {
	const {
		splitRecords: [
			{ wins: homeWins, losses: homeLosses, pct: homePct },
			{ wins: awayWins, losses: awayLosses, pct: awayPct },
			{ wins: leftWins, losses: leftLosses, pct: leftPct },
			{ wins: leftHomeWins, losses: leftHomeLosses, pct: leftHomePct },
			{ wins: leftAwayWins, losses: leftAwayLosses, pct: leftAwayPct },
			{ wins: rightHomeWins, losses: rightHomeLosses, pct: rightHomePct },
			{ wins: rightAwayWins, losses: rightAwayLosses, pct: rightAwayPct },
			{ wins: rightWins, losses: rightLosses, pct: rightPct },
			{ wins: lastTenWins, losses: lastTenLosses, pct: lastTenPct },
			{ wins: extraInningWins, losses: extraInningLosses, pct: extraInningPct },
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
	} = records

	const splitRecordsData = [
		{ title: 'Home', wins: homeWins, losses: homeLosses, pct: homePct },
		{ title: 'Away', wins: awayWins, losses: awayLosses, pct: awayPct },
		{ title: 'Day', wins: dayWins, losses: dayLosses, pct: dayPct },
		{ title: 'Night', wins: nightWins, losses: nightLosses, pct: nightPct },
		{ title: 'Grass', wins: grassWins, losses: grassLosses, pct: grassPct },
		{ title: 'Turf', wins: turfWins, losses: turfLosses, pct: turfPct },
		{ title: 'LHP', wins: leftWins, losses: leftLosses, pct: leftPct },
		{ title: 'RHP', wins: rightWins, losses: rightLosses, pct: rightPct },
		{
			title: 'LHP-H',
			wins: leftHomeWins,
			losses: leftHomeLosses,
			pct: leftHomePct,
		},
		{
			title: 'LHP-A',
			wins: leftAwayWins,
			losses: leftAwayLosses,
			pct: leftAwayPct,
		},
		{
			title: 'RHP-H',
			wins: rightHomeWins,
			losses: rightHomeLosses,
			pct: rightHomePct,
		},
		{
			title: 'RHP-A',
			wins: rightAwayWins,
			losses: rightAwayLosses,
			pct: rightAwayPct,
		},
		{
			title: 'Last10',
			wins: lastTenWins,
			losses: lastTenLosses,
			pct: lastTenPct,
		},
		{
			title: 'Xtras',
			wins: extraInningWins,
			losses: extraInningLosses,
			pct: extraInningPct,
		},
		{ title: '1-Run', wins: oneRunWins, losses: oneRunLosses, pct: oneRunPct },
		{
			title: 'Winners',
			wins: winnersWins,
			losses: winnersLosses,
			pct: winnersPct,
		},
	]

	const divRecordsData = [
		{
			title: `${leagueName} ${divOneName.split(' ')[2]}`,
			wins: divOneWins,
			losses: divOneLosses,
			pct: divOnePct,
		},
		{
			title: `${leagueName} ${divTwoName.split(' ')[2]}`,
			wins: divTwoWins,
			losses: divTwoLosses,
			pct: divTwoPct,
		},
		{
			title: `${leagueName} ${divThreeName.split(' ')[2]}`,
			wins: divThreeWins,
			losses: divThreeLosses,
			pct: divThreePct,
		},
	]

	const leagueRecordsData = [
		{
			title: leagueOneName.split(' ')[0],
			wins: leagueOneWins,
			losses: leagueOneLosses,
			pct: leagueOnePct,
		},
		{
			title: leagueTwoName.split(' ')[0],
			wins: leagueTwoWins,
			losses: leagueTwoLosses,
			pct: leagueTwoPct,
		},
	]

	return (
		<div className='flex flex-col items-center w-full gap-4 px-4 mx-auto sm:gap-8 lg:w-3/4'>
			<div className='text-2xl font-bold uppercase'>Season Records</div>
			<div className='grid grid-cols-2 gap-x-8'>
				<div className='col-span-2 mt-3 mb-2 text-xl font-semibold uppercase text-center'>
					League:
				</div>
				{leagueRecordsData.map((record, index) => (
					<div
						key={index}
						className='flex flex-col col-span-2 items-center gap-[0.375rem] sm:col-span-1'>
						<div className='flex items-center gap-3 border-b'>
							<div className='text-lg font-light'>{record.title}</div>
							<div className='text-sm italic tracking-wider'>
								({record.pct})
							</div>
						</div>
						<div className='text-xl font-semibold'>
							{record.wins} - {record.losses}
						</div>
					</div>
				))}
			</div>
			<div className='grid grid-cols-3 gap-x-8'>
				<div className='col-span-3 mt-3 mb-2 text-xl font-semibold uppercase text-center'>
					Division:
				</div>
				{divRecordsData.map((record, index) => (
					<div
						key={index}
						className='flex flex-col col-span-3 items-center gap-[0.375rem] sm:col-span-1'>
						<div className='flex items-center gap-3 border-b'>
							<div className='text-lg font-light'>{record.title}</div>
							<div className='text-sm italic tracking-wider'>
								({record.pct})
							</div>
						</div>
						<div className='text-xl font-semibold'>
							{record.wins} - {record.losses}
						</div>
					</div>
				))}
			</div>
			<div className='grid grid-cols-12 gap-y-3 gap-x-3'>
				<div className='col-span-12 mt-3 mb-2 text-xl font-semibold uppercase text-center'>
					Splits:
				</div>
				{splitRecordsData.map((record, index) => (
					<div
						key={index}
						className='flex flex-col items-center col-span-6 gap-[0.375rem] sm:col-span-3'>
						<div className='flex items-center gap-3 border-b'>
							<div className='text-lg font-light'>{record.title}</div>
							<div className='text-sm italic tracking-wider'>
								({record.pct})
							</div>
						</div>
						<div className='text-xl font-semibold'>
							{record.wins} - {record.losses}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
