export default function OffensiveStats({
	homeTeam,
	homeOffense,
	awayTeam,
	awayOffense,
}) {
	return (
		<div className='flex flex-col items-center w-full gap-4 px-4 py-2 border-2 rounded-xl'>
			<div className='text-2xl uppercase'>Offensive Stats</div>

			<div className='flex items-end w-full'>
				<div className='flex flex-col items-start gap-0.5 basis-[40%]'>
					<div className='truncate'>Runs</div>
					<div className='truncate'>Hits</div>
					<div className='truncate'>Doubles</div>
					<div className='truncate'>Triples</div>
					<div className='truncate'>Home Runs</div>
					<div className='truncate'>Strike Outs</div>
					<div className='truncate'>Stolen Bases</div>
					<div className='truncate'>Total Bases</div>
					<div className='truncate'>Runs Batted In</div>
					<div className='truncate'>Left On Base</div>
				</div>
				<div className='flex flex-col items-center gap-0.5 basis-[30%]'>
					<div className='w-full pb-1 text-center border-b-[1px]'>
						{awayTeam}
					</div>
					<div>{awayOffense.runs}</div>
					<div>{awayOffense.hits}</div>
					<div>{awayOffense.doubles}</div>
					<div>{awayOffense.triples}</div>
					<div>{awayOffense.homeRuns}</div>
					<div>{awayOffense.strikeOuts}</div>
					<div>{awayOffense.stolenBases}</div>
					<div>{awayOffense.totalBases}</div>
					<div>{awayOffense.rbi}</div>
					<div>{awayOffense.leftOnBase}</div>
				</div>
				<div className='flex flex-col items-center gap-0.5 border-l-[1px] basis-[30%]'>
					<div className='w-full pb-1 text-center border-b-[1px]'>
						{homeTeam}
					</div>
					<div>{homeOffense.runs}</div>
					<div>{homeOffense.hits}</div>
					<div>{homeOffense.doubles}</div>
					<div>{homeOffense.triples}</div>
					<div>{homeOffense.homeRuns}</div>
					<div>{homeOffense.strikeOuts}</div>
					<div>{homeOffense.stolenBases}</div>
					<div>{homeOffense.totalBases}</div>
					<div>{homeOffense.rbi}</div>
					<div>{homeOffense.leftOnBase}</div>
				</div>
			</div>
		</div>
	)
}
