import Home from '../../views/Home.vue'
import About from '../../views/About.vue'
import Login from '../../views/Login.vue'

export default [
	{
		path: '/',
		name: 'Index',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		component: About
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
		meta: {
			requiresLoggedOut: true
		}
	}
]
