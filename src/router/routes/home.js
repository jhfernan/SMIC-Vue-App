
export default [
	{
		path: '/home',
		name: 'Dashboard',
		component: () => import('../../views/home/Dashboard.vue'),
		meta: {
			requiresAuth: true
		}
	},
	{
		path: '/my_profile',
		name: 'Profile',
		component: () => import('../../views/home/Profile.vue'),
		meta: {
			requiresAuth: true
		}
	},
]
