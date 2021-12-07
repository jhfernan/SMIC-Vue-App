import md5 from 'md5'

export default {
	breadcrumbs: (currentRoute) => {
		let items = [{ text: 'Dashboard', disabled: false, href: '/home'}]
		if (currentRoute.name == 'Profile') {
			items.push({ text: 'Profile', disabled: false, href: '/profile'})
		}
		if (currentRoute.name == 'Manage Users' || currentRoute.name == 'Create User') {
			items.push({ text: 'Manage Users', disabled: false, href: '/manage_users'})
		}
		if (currentRoute.name == 'Create User') {
			items.push({ text: 'Create User', disabled: false, href: '/manage_users/create_user'})
		}
		items[items.length - 1].disabled = true
		return items
	},

	// Gravatar Hashtag Setup
	gravatar: (email) => {
		const hash = md5(email)
		return `https://www.gravatar.com/avatar/${hash}?s=150&d=mp`
	},

	// Error Handling
	handleErr: (err) => {
		if (err.response && err.response.data && err.response.status) {
			return `Error ${err.response.status}: ${err.response.data}`
		} else {
			return `Error: Could not process the response`
		}
	},

	// Form Rules
	rules: {
		confirmPassword: password => {
			return [
				v => !!v || 'This is required',
				v => (v === password) || 'Password does not match'
			]
		},
		email: [
			v => !!v || 'E-mail is required',
			v => /.+@.+/.test(v) || 'E-mail must be valid'
		],
		max: length => {
			return [
				v => (v && v.length <= length) || !v || `Must be less than ${length} characters`
			]
		},
		maxRequired: length => {
			return [
				v => !!v || 'This is required',
				v => (v && v.length <= length) || !v || `Must be less than ${length} characters`
			]
		},
		mustBeTrue: [
			v => v || 'Please take a momment to read our Policies and Terms of Use.'
		],
		required: [
			v => !!v || 'This is required'
		],
		selectOne: [
			v => (v && v.length > 0) || 'You must select at least one choice'
		],
		password: [
			v => !!v || 'This is required',
			v => (v && v.length <= 20 && v.length >= 5) || 'Must be between 5 and 20 characters'
		],
	}
}
