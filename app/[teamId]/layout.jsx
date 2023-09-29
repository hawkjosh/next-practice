import { getTeam } from '@/lib/getMlbData'

// Components
import TeamPagesHeader from './components/TeamPagesHeader'

export default async function TeamPagesLayout({ params, children }) {
	const teamId = params.teamId
	const {
		teams: [
			{
				deviceProperties: { teamNameDisplay, style },
				clubName,
			},
		],
	} = await getTeam(teamId)

	const {
		basePalette: {
			headerMastheadBackgroundColor: color1,
			headerNavigationBackgroundColor: color2,
			headerNavigationBorderColor: color3,
			footerTitleColor: color4,
		},
	} = style

	return (
		<div
			style={{
				background:
					teamId === '135' || teamId === '137' || teamId === '146'
						? color1
						: color2,
			}}
			className='@container/main pb-4 min-h-screen'>
			<div
				style={{
					background:
						teamId === '139' || teamId === '140' || teamId === '146'
							? color3
							: teamId === '135' || teamId === '137'
							? color2
							: color1,
					borderColor: color4,
				}}
				className='border-b-4'>
				<TeamPagesHeader
					teamId={teamId}
					teamName={teamNameDisplay}
					clubName={clubName}
					color={color4}
				/>
			</div>
			<div className='flex flex-col items-center max-w-screen-xl gap-2 py-4 mx-auto'>
				{children}
			</div>
		</div>
	)
}
