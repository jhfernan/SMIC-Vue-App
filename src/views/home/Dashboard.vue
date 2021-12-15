<template>
	<v-container fluid>
		<breadcrumbs />
		<h1>Dashboard</h1>
		<p :key="i" v-for="(link, i) in links">{{ link }}<br>{{ link.createdAt | longDateTime }}</p>
	</v-container>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs'

export default {
	components: {
		Breadcrumbs
	},
	async created() {
		if (this.$store.getters.currentUser.admin) {
			this.fetchLinks()
		}
	},
	data() {
		return {
			links: []
		}
	},
	methods: {
		async fetchLinks() {
			try {
				let { data } = await axios.get('/api/verify.clean')
				this.links = data
				for (let link of this.links) {
					this.deleteLink(link._id)
				}
			} catch (err) {
				this.$store.dispatch('showSnack', {
					err,
					color: 'error'
				})
			}
		},
		async deleteLink(id) {
			try {
				let { data } = await axios.delete('/api/verify.clean/' + id)
				this.links = this.links.filter(link => link._id != data)
			} catch (err) {
				this.$store.dispatch('showSnack', {
					err,
					color: 'error'
				})
			}
		},
	}
}
</script>
