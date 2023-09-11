import getRoster from "@/lib/getTeamRoster"

export default async function TeamRoster({params}) {
	const roster = await getRoster(params.teamId)

	return (
		<div>
			<div className='flex flex-col divide-y'>
				{roster.map((player) => (
					<div
						key={player.person.id}
						className='flex divide-x py-2 items-center'>
						<div className='flex px-2'>
							Player Name: {player.person.fullName}
						</div>
						<div className='flex px-2'>Number: {player.jerseyNumber}</div>
						<div className='flex px-2'>Position: {player.position.name}</div>
					</div>
				))}
			</div>
		</div>
	)
}
