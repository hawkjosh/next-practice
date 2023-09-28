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
		bodyBackgroundColor: color,
		basePalette: {
			headerMastheadBackgroundColor: color1,
			headerNavigationBackgroundColor: color2,
			headerNavigationBorderColor: color3,
			footerBackgroundColor: color4,
			footerBorderColor: color5,
			footerTextColor: color6,
			footerTitleColor: color7,
			headerMastheadTextColor: color8,
			headerNavigationTextColor: color9,
			pageContainerBackgroundColor: color10,
			pageContainerBorderColor: color11,
		},
	} = style

	return (
		<div
			style={{ background: color2 }}
			className='@container/main pb-4 min-h-screen'>
			<div style={{background: color2, borderColor: color3}} className='border-b-4'>
				<TeamPagesHeader
					teamId={teamId}
					teamName={teamNameDisplay}
					clubName={clubName}
					color={color3}
				/>
			</div>
			{children}
		</div>
		// <div className='container max-w-screen-xl mx-auto'>
		// 	<div className='flex flex-col w-11/12 gap-12 mx-auto'>
		// 	</div>
		// </div>
	)
}
