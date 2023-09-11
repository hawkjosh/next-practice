import Link from 'next/link'
export default function HomePage() {
	return (
		<main>
			<div className='page-container'>
				<div className='page-title'>My MLB HQ</div>
				<Link href='/teams'>Teams</Link>
			</div>
		</main>
	)
}
