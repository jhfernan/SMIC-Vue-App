<template>
<div>
	<v-navigation-drawer app clipped dark expand-on-hover permanent>
		<v-list>
			<v-list-item class="px-2">
				<v-list-item-avatar>
					<v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
				</v-list-item-avatar>
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
			<v-list-item link>
				<v-list-item-icon>
					<v-icon>mdi-folder</v-icon>
				</v-list-item-icon>
				<v-list-item-title>My Files</v-list-item-title>
			</v-list-item>
			<v-list-item link>
				<v-list-item-icon>
					<v-icon>mdi-account-multiple</v-icon>
				</v-list-item-icon>
				<v-list-item-title>Shared with me</v-list-item-title>
			</v-list-item>
			<v-list-item link>
				<v-list-item-icon>
					<v-icon>mdi-star</v-icon>
				</v-list-item-icon>
				<v-list-item-title>Starred</v-list-item-title>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>

	<v-app-bar app clipped-left dark>
		<!-- <v-app-bar-nav-icon /> -->
		<v-toolbar-title class="ml-2">{{ $route.name }}</v-toolbar-title>

		<v-spacer />

		<v-btn class="mr-2" @click="logout">
			Logout
		</v-btn>
	</v-app-bar>
</div>
</template>

<script>
export default {
	data() {
		return {
			links: [{
				name: 'Home',
				to: '/home'
			}]
		}
	},
	methods: {
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
