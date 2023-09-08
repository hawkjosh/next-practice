/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'mlbstatic.com',
				port: '',
				pathname: '/team-logos/team-cap-on-light/**',
			},
		],
	},
}

module.exports = nextConfig
