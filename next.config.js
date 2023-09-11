/** @type {import('next').NextConfig} */

module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'mlbstatic.com',
				port: '',
				pathname: '/team-logos/**',
			},
			{
				protocol: 'https',
				hostname: 'img.mlbstatic.com',
				port: '',
				pathname: '/mlb-photos/**',
			},
		],
	},
}
