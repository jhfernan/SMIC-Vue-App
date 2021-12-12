
export default [
	{
		path: '/manage_courses',
		name: 'Manage Courses',
		component: () => import('../../views/courses/Courses.vue'),
		meta: {
			auth: 'manager',
			requiresAuth: true
		}
	},
	{
		path: '/manage_courses/create_course',
		name: 'Create Course',
		component: () => import('../../views/courses/Add.vue'),
		meta: {
			auth: 'manager',
			requiresAuth: true
		}
	},
	{
		path: '/manage_courses/:id',
		name: 'Course Details',
		component: () => import('../../views/courses/Course.vue'),
		meta: {
			auth: 'manager',
			requiresAuth: true
		}
	},
	{
		path: '/courses',
		name: 'My Courses',
		component: () => import('../../views/courses/MyCourses.vue'),
		meta: {
			requiresAuth: true
		}
	},
]
