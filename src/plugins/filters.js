import Vue from 'vue'

// Date Filters
let longOptions = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }
let shortOptions = { year: 'numeric', month: 'short', day: 'numeric' }
let timeOptions = { hour: '2-digit', minute: '2-digit' }

Vue.filter('longDateTime', val => new Date(val).toLocaleDateString('en-US', longOptions))
Vue.filter('shortDate', val => new Date(val).toLocaleDateString('en-US'))
Vue.filter('shortTime', val => new Date(val).toLocaleTimeString('en-US', timeOptions))

// String formatting filters
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

Vue.filter('subjectName', function (subject) {
	if (!subject) return ''
	return `${subject.number} - ${subject.name}`
})

Vue.filter('semester', function (course) {
	if (!course) return ''
	return `${course.semester} ${course.year}`
})
