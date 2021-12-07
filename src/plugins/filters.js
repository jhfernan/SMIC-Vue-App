import Vue from 'vue'

Vue.filter('capitalize', function (value) {
	if (!value) return ''
	value = value.toString()
	return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.filter('fullName', function (user) {
	if (!user || !user.name) return ''
	return `${user.name.charAt(0).toUpperCase() + user.name.slice(1)} ${user.last.charAt(0).toUpperCase() + user.last.slice(1)}`
})

Vue.filter('fullNameFormal', function (user) {
	if (!user) return ''
	if (user.teacher) {
		return user.gender == 'male'
			? `Mr. ${user.last.charAt(0).toUpperCase() + user.last.slice(1)}`
			: `${user.married ? 'Mrs' : 'Ms'}. ${user.last.charAt(0).toUpperCase() + user.last.slice(1)}`
	}
	return `${user.last.charAt(0).toUpperCase() + user.last.slice(1)}, ${user.name.charAt(0).toUpperCase() + user.name.slice(1)}`
})

Vue.filter('mainPermission', function (user) {
	if (!user) return ''
	return user.admin ? 'Admin'
		: user.manager ? 'Manager'
		: user.teacher ? 'Teacher'
		: user.staff ? 'Staff'
		: user.teachingAssistant ? 'TA'
		: 'Student'
})
