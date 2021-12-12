
export default [
	{
		path: '/',
		name: 'Index',
		component: () => import('../../views/Home.vue')
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../../views/About.vue')
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../../views/Login.vue'),
		meta: {
			requiresLoggedOut: true
		}
	},
	{
		path: '/403',
		name: '403',
		component: () => import('../../views/403.vue')
	}
]
