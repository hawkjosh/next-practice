export const useStringFormat = (str) => {
	const firstLetterCapital = str
		.toLowerCase()
		.split(' ')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ')

	const convertPathname = str.replace(/[\/0-9]/g, '')

	return {
		firstLetterCapital,
		convertPathname,
	}
}
