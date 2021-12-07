import Vue from 'vue'
import VueRouter from 'vue-router'
import Error404 from '../views/404.vue'
import Core from './routes/core.js'
import Home from './routes/home.js'
import Users from './routes/user.js'
import store from '../store/index'

Vue.use(VueRouter)

// Add all routes
let routes = [...Core, ...Home, ...Users]

// App level routes
routes.push({
	path: '*',
	name: '404',
	component: Error404
})

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAdmin) && !store.getters.currentUser.admin) {
		next('/home')
	} else if (to.matched.some(record => record.meta.requiresAuth) && !store.getters.isLoggedIn) {
		next('/login')
	} else if (to.matched.some(record => record.meta.requiresLoggedOut) && store.getters.isLoggedIn) {
		next('/home')
	} else {
		next()
	}
})

export default router
