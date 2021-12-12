import Vue from 'vue'
import VueRouter from 'vue-router'
import Error404 from '../views/404.vue'
import Core from './routes/core.js'
import Home from './routes/home.js'
import Users from './routes/user.js'
import Courses from './routes/courses.js'
import store from '../store/index'

Vue.use(VueRouter)

// Add all routes
let routes = [...Core, ...Home, ...Users, ...Courses]

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
	if (to.meta.requiresAuth && !store.getters.isLoggedIn) {
		next('/login')
	} else if (to.meta.requiresLoggedOut && store.getters.isLoggedIn) {
		next('/home')
	} else if (to.meta.auth && store.getters.currentUser[to.meta.auth]) {
		next()
	} else if (to.meta.auth && !store.getters.currentUser[to.meta.auth]) {
		next('/403')
	} else {
		next()
	}
})

export default router
