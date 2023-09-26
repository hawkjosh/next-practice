export default function OffensiveStats({
	homeTeam,
	homeOffense,
	awayTeam,
	awayOffense,
}) {
	return (
		<table className='table-fixed w-full'>
			<caption className='pb-4 text-2xl caption-top uppercase'>
				Offensive Stats
			</caption>
			<thead>
				<tr>
					<td></td>
					<td className='text-center border-b'>{awayTeam}</td>
					<td className='text-center border-b border-l'>{homeTeam}</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Runs Scored</td>
					<td className='text-center'>{awayOffense.runs}</td>
					<td className='text-center border-l'>{homeOffense.runs}</td>
				</tr>
				<tr>
					<td>Total Hits</td>
					<td className='text-center'>{awayOffense.hits}</td>
					<td className='text-center border-l'>{homeOffense.hits}</td>
				</tr>
				<tr>
					<td>Doubles</td>
					<td className='text-center'>{awayOffense.doubles}</td>
					<td className='text-center border-l'>{homeOffense.doubles}</td>
				</tr>
				<tr>
					<td>Triples</td>
					<td className='text-center'>{awayOffense.triples}</td>
					<td className='text-center border-l'>{homeOffense.triples}</td>
				</tr>
				<tr>
					<td>Homeruns</td>
					<td className='text-center'>{awayOffense.homeRuns}</td>
					<td className='text-center border-l'>{homeOffense.homeRuns}</td>
				</tr>
				<tr>
					<td>Strikeouts</td>
					<td className='text-center'>{awayOffense.strikeOuts}</td>
					<td className='text-center border-l'>{homeOffense.strikeOuts}</td>
				</tr>
				<tr>
					<td>Stolen Bases</td>
					<td className='text-center'>{awayOffense.stolenBases}</td>
					<td className='text-center border-l'>{homeOffense.stolenBases}</td>
				</tr>
				<tr>
					<td>Total Bases</td>
					<td className='text-center'>{awayOffense.totalBases}</td>
					<td className='text-center border-l'>{homeOffense.totalBases}</td>
				</tr>
				<tr>
					<td>RBI's</td>
					<td className='text-center'>{awayOffense.rbi}</td>
					<td className='text-center border-l'>{homeOffense.rbi}</td>
				</tr>
				<tr>
					<td>Total LOB</td>
					<td className='text-center'>{awayOffense.leftOnBase}</td>
					<td className='text-center border-l'>{homeOffense.leftOnBase}</td>
				</tr>
			</tbody>
		</table>
	)
}
