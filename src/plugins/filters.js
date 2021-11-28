import Vue from 'vue'

Vue.filter('capitalize', function (value) {
	if (!value) return ''
	value = value.toString()
	return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.filter('fullName', function (user) {
	if (!user) return ''
	if (user.teacher) {
		return user.gender == 'male'
			? `Mr. ${user.last.charAt(0).toUpperCase() + user.last.slice(1)}`
			: `${user.married ? 'Mrs' : 'Ms'}. ${user.last.charAt(0).toUpperCase() + user.last.slice(1)}`
	}
	return `${user.last.charAt(0).toUpperCase() + user.last.slice(1)}, ${user.name.charAt(0).toUpperCase() + user.name.slice(1)}`
})
