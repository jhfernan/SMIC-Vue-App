import md5 from 'md5'

export default {
	breadcrumbs: (currentRoute) => {
		let items = [{ text: 'Dashboard', disabled: false, href: '/home'}]
		if (currentRoute.name == 'Profile') {
			items.push({ text: 'Profile', disabled: false, href: '/profile'})
		}
		items[items.length - 1].disabled = true
		return items
	},
	gravatar: (email) => {
		const hash = md5(email)
		return `https://www.gravatar.com/avatar/${hash}?s=150&d=mp`
	},
	handleErr: (err) => {
		if (err.response && err.response.data && err.response.status) {
			return `Error ${err.response.status}: ${err.response.data}`
		} else {
			return `Error: Could not process the response`
		}
	}
}
