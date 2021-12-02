import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		user: {},
		token: null,
	},

	getters: {
		isLoggedIn(state) {
			return !!state.token
		},
		currentUser(state) {
			return !!state.user ? state.user : {}
		}
	},

	mutations: {
		setAuth(state, data) {
			const { _id, name, last, nameAlt, email, emailVerified, phone, about, admin, developer, manager, staff, teacher, teachingAssistant, student, title, gender } = data.user
			state.user = {
				id: _id,
				name,
				last,
				nameAlt: nameAlt || null,
				email,
				emailVerified,
				phone: phone || null,
				about: about || null,
				admin,
				developer,
				manager,
				staff,
				teacher,
				teachingAssistant,
				student,
				gender,
				title: title || null
			}
			state.token = data.token
		},
		logout(state) {
			state.user = {}
			state.token = null
		},
	},

	actions: {
		async init({ commit, dispatch }) {
			let token = localStorage.getItem('token')
			if (token && token !== 'undefined') {
				try {
					axios.defaults.headers.common['Authorization'] = token
					let { data } = await axios.get('/api/authenticate')
					let user = data.user
					commit('setAuth', { user, token })
				} catch (e) {
					console.error('FROM STORE INIT METHOD: Error with token', e)
					dispatch('resetStorage')
				}
			} else {
				dispatch('resetStorage')
			}
		},

		async resetStorage() {
			localStorage.removeItem('token')
			delete axios.defaults.headers.common['Authorization']
		},

		async login({ commit }, credentials) {
			try {
				let postResponse = await axios.post('/api/authenticate', credentials)
				const token = postResponse.data.token
				localStorage.setItem('token', token)
				axios.defaults.headers.common['Authorization'] = token
				let getResponse = await axios.get('/api/authenticate')
				const user = getResponse.data.user
				await commit('setAuth', { user, token })
				router.push('/home')
			} catch (e) {
				throw (e)
			}
		},

		async logout({ commit }) {
			try {
				localStorage.removeItem('token')
				delete axios.defaults.headers.common['Authorization']
				await commit('logout')
				router.push('/login')
			} catch (e) {
				throw (e)
			}
		}
	}
})
