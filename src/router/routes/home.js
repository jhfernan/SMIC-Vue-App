import Home from '../../views/home/Home.vue'

export default [
	{
		path: '/home',
		name: 'Home',
		component: Home,
		meta: {
			requiresAuth: true
		}
	},
]
