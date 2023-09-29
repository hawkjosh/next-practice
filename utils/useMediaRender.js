export const useMediaRender = (id) => {
	// Team Cap on Dark
	const logoUrlCapDrk = (id) => {
		const url = 'https://www.mlbstatic.com/team-logos/team-cap-on-dark'
		return `${url}/${id}.svg`
	}

	// Team Cap on Light
	const logoUrlCapLt = (id) => {
		const url = 'https://www.mlbstatic.com/team-logos/team-cap-on-light'
		return `${url}/${id}.svg`
	}

	// Team Primary on Dark
	const logoUrlPrimDrk = (id) => {
		const url = 'https://www.mlbstatic.com/team-logos/team-primary-on-dark'
		return `${url}/${id}.svg`
	}

	// Team Primary on Light
	const logoUrlPrimLt = (id) => {
		const url = 'https://www.mlbstatic.com/team-logos/team-primary-on-light'
		return `${url}/${id}.svg`
	}

	// Player Headshot
	const headshotUrl = (id) => {
		const url =
			'https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people'
		return `${url}/${id}/headshot/67/current`
	}

	const capDark = logoUrlCapDrk(id)
	const capLight = logoUrlCapLt(id)
	const primaryDark = logoUrlPrimDrk(id)
	const primaryLight = logoUrlPrimLt(id)
	const headshot = headshotUrl(id)

	return { capDark, capLight, primaryDark, primaryLight, headshot }
}
