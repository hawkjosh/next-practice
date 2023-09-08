import TeamsList from './TeamsList'

export default function Home() {
	return (
		<main>
			<div className='page-container'>
				<div className='page-title'>My MLB HQ</div>
				<div className='home'>
					<TeamsList />
				</div>
			</div>
		</main>
	)
}
