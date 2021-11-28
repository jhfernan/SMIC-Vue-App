<template>
	<v-app-bar app color="primary" dark>
		<!-- <v-app-bar-nav-icon /> -->
		<v-toolbar-title class="ml-2">WEB APP</v-toolbar-title>

		<v-spacer />

		<!-- <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
				<span class="mr-2">Latest Release</span>
				<v-icon>mdi-open-in-new</v-icon>
			</v-btn> -->
		<template v-for="(link, i) in links">
			<v-btn class="mr-2" :key="i" text :to="link.to">
				{{ link.name }}
			</v-btn>
		</template>

		<!-- <v-menu left bottom>
			<template v-slot:activator="{ on, attrs }">
				<v-btn icon v-bind="attrs" v-on="on">
					<v-icon>mdi-dots-vertical</v-icon>
				</v-btn>
			</template>

			<v-list>
				<v-list-item v-for="n in 5" :key="n" @click="() => {}">
					<v-list-item-title>Option {{ n }}</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-menu> -->
	</v-app-bar>
</template>

<script>
export default {
	data () {
		return {
			links: [
				{
					name: 'Home',
					to: '/'
				},
				{
					name: 'About',
					to: '/about'
				},
				{
					name: 'Login',
					to: '/login'
				}
			]
		}
	},
}
</script>
