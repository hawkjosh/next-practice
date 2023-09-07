import Link from 'next/link'
import Image from 'next/image'

import teamInfo from '@/_data/teams.json'

const teams = teamInfo.teams

export default function Home() {
	return (
		<main>
			<div className='page-container'>
				<div className='page-title'>My MLB HQ</div>
				<div className='home'>
					<Link href='/team'>Atlant Braves</Link>
					<Link href='https://www.mlb.com/phillies' target='_blank'>Philadelphia Phillies</Link>
				</div>
				<div className='flex flex-col divide-y divide-solid'>
					{teams.map((team) => (
						<div className='grid grid-cols-5 gap-5 place-items-center py-4'>
							<div className='justify-self-start text-xl'>{team.name_long}</div>
							<div style={{width: '7rem', aspectRatio: '1', background: 'hsla(0, 0%, 75%, 1)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} title='cap on light'>
							<Image
								key={team.id}
								src={`https://www.mlbstatic.com/team-logos/team-cap-on-light/${team.id}.svg`}
								width={1}
								height={1}
								alt={`${team.name_short} Logo`}
								style={{width: '5rem', height: '5rem'}}
							/>
						</div>
							<div style={{width: '7rem', aspectRatio: '1', background: 'hsla(0, 0%, 25%, 1)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} title='cap on dark'>
							<Image
								key={team.id}
								src={`https://www.mlbstatic.com/team-logos/team-cap-on-dark/${team.id}.svg`}
								width={1}
								height={1}
								alt={`${team.name_short} Logo`}
								style={{width: '5rem', height: '5rem'}}
							/>
						</div>
							<div style={{width: '7rem', aspectRatio: '1', background: 'hsla(0, 0%, 75%, 1)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} title='primary on light'>
							<Image
								key={team.id}
								src={`https://www.mlbstatic.com/team-logos/team-primary-on-light/${team.id}.svg`}
								width={1}
								height={1}
								alt={`${team.name_short} Logo`}
								style={{width: '5rem', height: '5rem'}}
							/>
						</div>
							<div style={{width: '7rem', aspectRatio: '1', background: 'hsla(0, 0%, 25%, 1)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} title='primary on dark'>
							<Image
								key={team.id}
								src={`https://www.mlbstatic.com/team-logos/team-primary-on-dark/${team.id}.svg`}
								width={1}
								height={1}
								alt={`${team.name_short} Logo`}
								style={{width: '5rem', height: '5rem'}}
							/>
						</div>
						</div>
				))}
				</div>
				<div style={{padding: '1rem', border: '2px solid white'}}>
					<h1 style={{textAlign: 'center', marginBottom: '1rem', fontSize: '2rem', textTransform: 'uppercase', fontWeight: 'bold'}}>Team Cap On Light</h1>
					<div style={{display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', placeItems: 'center', gap: '1.75rem'}}>
						{teams.map((team) => (
						<div style={{width: '7rem', aspectRatio: '1', background: 'hsla(0, 0%, 75%, 1)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
							<Image
								key={team.id}
								src={`https://www.mlbstatic.com/team-logos/team-cap-on-light/${team.id}.svg`}
								width={1}
								height={1}
								alt={`${team.name_short} Logo`}
								style={{width: '5rem', height: '5rem'}}
							/>
						</div>
						))}
					</div>
				</div>
				<div style={{padding: '1rem', marginTop: '2rem', border: '2px solid white'}}>
					<h1 style={{textAlign: 'center', marginBottom: '1rem', fontSize: '2rem', textTransform: 'uppercase', fontWeight: 'bold'}}>Team Cap On Dark</h1>
					<div style={{display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', placeItems: 'center', gap: '1.75rem'}}>
						{teams.map((team) => (
						<div style={{width: '7rem', aspectRatio: '1', background: 'hsla(0, 0%, 25%, 1)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
						<Image
							key={team.id}
							src={`https://www.mlbstatic.com/team-logos/team-cap-on-dark/${team.id}.svg`}
							width={1}
							height={1}
							alt={`${team.name_short} Logo`}
							style={{width: '5rem', height: '5rem'}}
						/>
					</div>
					))}
					</div>
				</div>
				<div style={{padding: '1rem', marginTop: '2rem', border: '2px solid white'}}>
					<h1 style={{textAlign: 'center', marginBottom: '1rem', fontSize: '2rem', textTransform: 'uppercase', fontWeight: 'bold'}}>Team Primary On Light</h1>
					<div style={{display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', placeItems: 'center', gap: '1.75rem'}}>
						{teams.map((team) => (
						<div style={{width: '7rem', aspectRatio: '1', background: 'hsla(0, 0%, 75%, 1)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
							<Image
								key={team.id}
								src={`https://www.mlbstatic.com/team-logos/team-primary-on-light/${team.id}.svg`}
								width={1}
								height={1}
								alt={`${team.name_short} Logo`}
								style={{width: '5rem', height: '5rem'}}
							/>
						</div>
						))}
					</div>
				</div>
				<div style={{padding: '1rem', marginTop: '2rem', border: '2px solid white'}}>
					<h1 style={{textAlign: 'center', marginBottom: '1rem', fontSize: '2rem', textTransform: 'uppercase', fontWeight: 'bold'}}>Team Primary On Dark</h1>
					<div style={{display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', placeItems: 'center', gap: '1.75rem'}}>
						{teams.map((team) => (
						<div style={{width: '7rem', aspectRatio: '1', background: 'hsla(0, 0%, 25%, 1)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
						<Image
							key={team.id}
							src={`https://www.mlbstatic.com/team-logos/team-primary-on-dark/${team.id}.svg`}
							width={1}
							height={1}
							alt={`${team.name_short} Logo`}
							style={{width: '5rem', height: '5rem'}}
						/>
					</div>
					))}
					</div>
				</div>
			</div>
		</main>
	)
}
