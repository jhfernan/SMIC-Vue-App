axios.defaults.baseURL = process.env.VUE_APP_API_URL

import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

store.dispatch('init')
.then(() => {
	new Vue({
		router,
		store,
		vuetify,
		render: function (h) { return h(App) }
	}).$mount('#app')
})

import './plugins/filters'
