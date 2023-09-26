import { getTeam } from '@/lib/getMlbData'

// Components
import TeamPagesHeader from './components/TeamPagesHeader'

export default async function TeamPagesLayout({ params, children }) {
	const teamResult = await getTeam(params.teamId)

	const {
		teams: [{ id, franchiseName, clubName }],
	} = teamResult

	return (
		<div className='container max-w-screen-xl mx-auto'>
			<div className='flex flex-col w-11/12 gap-12 mx-auto'>
				<TeamPagesHeader
					id={id}
					franchiseName={franchiseName}
					clubName={clubName}
				/>
				{children}
			</div>
		</div>
	)
}
