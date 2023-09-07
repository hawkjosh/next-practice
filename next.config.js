/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'a.espncdn.com',
				port: '',
				pathname: '/i/headshots/mlb/players/full/**',
			},
			{
				protocol: 'https',
				hostname: 'img.mlbstatic.com',
				port: '',
				pathname: '/mlb-photos/image/upload/**',
			},
		],
	},
}

module.exports = nextConfig
