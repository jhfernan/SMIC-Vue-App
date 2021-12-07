<template>
<div>
	<v-navigation-drawer app clipped dark v-model="drawer">
		<v-list>
			<v-list-item class="px-5">
				<v-list-item-avatar size="75">
					<v-img :src="gravatar" />
				</v-list-item-avatar>
				<v-spacer />
			</v-list-item>

			<v-list-item link>
				<v-list-item-content>
					<v-list-item-title class="text-h6">
						{{ $store.state.user | fullName }}
					</v-list-item-title>
					<v-list-item-subtitle>{{ $store.state.user.email }}</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
		</v-list>

		<v-divider />

		<v-list nav dense>
			<template v-for="(link, i) in links">
				<v-subheader :key="`header${i}`" v-if="link.title && checkAuth(link)">{{ link.name }}</v-subheader>
				<v-list-item :key="`item${i}`" link :to="link.to" v-if="!link.title && checkAuth(link)">
					<v-list-item-icon>
						<v-icon>{{ link.icon }}</v-icon>
					</v-list-item-icon>
					<v-list-item-title>{{ link.name }}</v-list-item-title>
				</v-list-item>
			</template>
		</v-list>

		<template v-slot:append>
			<div class="pa-2">
				<v-btn block @click="logout">
					Logout
				</v-btn>
			</div>
		</template>
	</v-navigation-drawer>

	<v-app-bar app clipped-left dark>
		<v-app-bar-nav-icon @click.stop="drawer = !drawer" />
		<v-toolbar-title class="ml-2">{{ $route.name }}</v-toolbar-title>

		<v-spacer />

		<!-- <v-btn class="mr-2" @click="logout">
			Logout
		</v-btn> -->
	</v-app-bar>

</div>
</template>

<script>
import helpers from '@/plugins/helpers'

export default {
	async asyncData({ app, error }) {
		try {
			let users = []
			let snap = await fireDb.collection('users').get()
			snap.forEach(doc => {
				// doc.data() is never undefined for query doc snapshots
				users.push({ id: doc.id, ...doc.data() })
			})
			return { users }
		} catch (e) {
			// TODO: error handling
			error({ statusCode: '404', message: `${e.code}: ${e.message}` })
		}
	},
	computed: {
		gravatar() {
			return helpers.gravatar(this.$store.state.user.email)
		}
	},
	data() {
		return {
			drawer: true,
			links: [{
					name: 'Home',
					title: true
				},
				{
					icon: 'fas fa-sliders-h',
					name: 'Dashboard',
					to: '/home'
				},
				{
					icon: 'far fa-user',
					name: 'My Profile',
					to: '/my_profile'
				},
				{
					icon: 'fas fa-cog',
					name: 'Settings',
					to: '/settings'
				},
				{
					name: 'Admin',
					title: true,
					auth: 'admin'
				},
				{
					icon: 'fas fa-users-cog',
					name: 'Manage Users',
					to: '/manage_users',
					auth: 'admin'
				},
				{
					name: 'Questions',
					title: true
				},
				{
					icon: 'fas fa-question-circle',
					name: 'Question Board',
					to: '/questions'
				},
			]
		}
	},
	methods: {
		checkAuth(link) {
			if (link.auth && this.$store.state.user[link.auth]) {
				return true
			} else if (!link.auth) {
				return true
			} else {
				return false
			}
		},
		async logout() {
			try {
				await this.$store.dispatch('logout')
			} catch (e) {
				// this.$store.dispatch('snack/showSnack', util.errHandler(e))
			}
		},
	},
}
</script>
