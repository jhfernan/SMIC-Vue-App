import md5 from 'md5'

export default {
	breadcrumbs: (currentRoute) => {
		let items = [{ text: 'Dashboard', disabled: false, href: '/home'}]
		if (currentRoute.name == 'Profile') {
			items.push({ text: 'Profile', disabled: false, href: '/profile'})
		}
		if (['Manage Users', 'Create User'].includes(currentRoute.name)) {
			items.push({ text: 'Manage Users', disabled: false, href: '/manage_users'})
		}
		if (currentRoute.name == 'Create User') {
			items.push({ text: 'Create User', disabled: false, href: '/manage_users/create_user'})
		}
		if (['Manage Courses', 'Create Course', 'Course Details'].includes(currentRoute.name)) {
			items.push({ text: 'Manage Courses', disabled: false, href: '/manage_courses'})
		}
		if (currentRoute.name == 'Create Course') {
			items.push({ text: 'Create Course', disabled: false, href: '/manage_courses/create_course'})
		}
		if (currentRoute.name == 'Course Details') {
			items.push({ text: 'Create Course', disabled: false, href: '/manage_courses/course_details'})
		}
		if (currentRoute.name == 'My Courses') {
			items.push({ text: 'My Courses', disabled: false, href: '/courses'})
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
		year: [
			v => !!v || 'This is required',
			v => (v && v.length == 4) || 'Please write year in \'yyyy\' format',
			v => (v && /^\d+$/.test(v)) || 'Year should only contain numbers'
		],
	}
}
