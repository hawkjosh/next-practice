export default function PitchingStats({
	homeTeam,
	homePitching,
	awayTeam,
	awayPitching,
}) {
	return (
		<table className='table-fixed w-full'>
			<caption className='pb-4 text-2xl caption-top uppercase'>
				Pitching Stats
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
					<td>Runs Allowed</td>
					<td className='text-center'>{awayPitching.runs}</td>
					<td className='text-center border-l'>{homePitching.runs}</td>
				</tr>
				<tr>
					<td>Hits Allowed</td>
					<td className='text-center'>{awayPitching.hits}</td>
					<td className='text-center border-l'>{homePitching.hits}</td>
				</tr>
				<tr>
					<td>Earned Runs</td>
					<td className='text-center'>{awayPitching.earnedRuns}</td>
					<td className='text-center border-l'>{homePitching.earnedRuns}</td>
				</tr>
				<tr>
					<td>ERA</td>
					<td className='text-center'>{awayPitching.era}</td>
					<td className='text-center border-l'>{homePitching.era}</td>
				</tr>
				<tr>
					<td>WHIP</td>
					<td className='text-center'>{awayPitching.whip}</td>
					<td className='text-center border-l'>{homePitching.whip}</td>
				</tr>
				<tr>
					<td>Total Pitches</td>
					<td className='text-center'>{awayPitching.numberOfPitches}</td>
					<td className='text-center border-l'>
						{homePitching.numberOfPitches}
					</td>
				</tr>
				<tr>
					<td>Total Strikes</td>
					<td className='text-center'>{awayPitching.strikes}</td>
					<td className='text-center border-l'>{homePitching.strikes}</td>
				</tr>
				<tr>
					<td>Total Balls</td>
					<td className='text-center'>{awayPitching.balls}</td>
					<td className='text-center border-l'>{homePitching.balls}</td>
				</tr>
				<tr>
					<td>Total K's</td>
					<td className='text-center'>{awayPitching.strikeOuts}</td>
					<td className='text-center border-l'>{homePitching.strikeOuts}</td>
				</tr>
				<tr>
					<td>Total BB's</td>
					<td className='text-center'>{awayPitching.baseOnBalls}</td>
					<td className='text-center border-l'>{homePitching.baseOnBalls}</td>
				</tr>
			</tbody>
		</table>
	)
}
