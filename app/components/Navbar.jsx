import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav>
      <Image src='https://www.mlbstatic.com/team-logos/league-on-dark/1.svg' alt='MLB Logo' width={75} height={75}/>
      <h1>MLB HQ</h1>
      <Link href='/'>Home</Link>
      <Link href='/team-dashboard'>Atlanta Braves Dashboard</Link>
    </nav>
  )
}