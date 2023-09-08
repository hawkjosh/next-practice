import Link from 'next/link'
import Image from 'next/image'
import { teams } from './data/teams.json'

const baseUrl = 'https://www.mlbstatic.com/team-logos/team-cap-on-light'

export default function HomePage() {
	return (
		<main>
			<div className='page-container'>
				<div className='page-title'>My MLB HQ</div>
				<div className='home'>
					{teams.map((item) => (
						<Link
							key={item.id}
							href={`/team/${item.id}`}
							className='team-choice'>
							<Image
								src={`${baseUrl}/${item.logoId}.svg`}
								width={1}
								height={1}
								alt={`${item.shortName} Logo`}
							/>
							<div>{item.shortName}</div>
						</Link>
					))}
				</div>
			</div>
		</main>
	)
}
