import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		user: {},
		token: null,
		snack: {
			available: false,
			color: '',
			timeout: 10000,
			text: ''
		}
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

		// Handling Snacks
		set_true(state, snack) {
			state.snack.text = snack.text
			state.snack.color = snack.color
			state.snack.available = true
		},
		set_false(state) {
			state.snack.available = false
		},
	},

	actions: {
		async init({ commit, dispatch }) {
			let token = localStorage.getItem('token')
			if (token && token !== 'undefined') {
				try {
					axios.defaults.headers.common['Authorization'] = token
					let {
						data
					} = await axios.get('/api/authenticate')
					let user = data.user
					commit('setAuth', {
						user,
						token
					})
				} catch (err) {
					console.error('FROM STORE INIT METHOD: Error with token', err)
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
				await commit('setAuth', {
					user,
					token
				})
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
		},

		showSnack ({ commit, dispatch }, data) {
			let snack = {}
			if (data.err && data.err.response) {
				snack.text = `${data.err.response.status || 'Error'}: ${data.err.response.data}`
			} else {
				snack.text = data.message ? data.message : 'Succesfully completed'
			}
			snack.color = data.color ? data.color : 'success'
			commit('set_true', snack)
			dispatch('timeOut')
		},

		closeSnack ({ commit }) {
			commit('set_false')
		},

		timeOut ({ dispatch, state }) {
			setTimeout(() => {
				dispatch('closeSnack')
			}, state.snack.timeout)
		}
	}
})
