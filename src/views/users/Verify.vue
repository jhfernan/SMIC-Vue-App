<template>
<v-container fluid fill-height>
	<v-layout align-center justify-center>
		<v-skeleton-loader class="elevation-12" max-width="700" min-width="500" type="card" v-if="!link && !err" />

		<v-card class="elevation-12" max-width="700" min-width="500" v-if="link && !err">
			<v-card-title>
				Password Setup/Reset Link
			</v-card-title>
			<v-card-text class="py-0">Please take a moment to create a new password for your account. It must be between 5 and 20 characters long.<br>*This link will expire after creating your new password or after 24 hours</v-card-text>
			<v-card-text>
				<v-form lazy-validation ref="form" @submit.prevent="submit" v-model="valid">
					<v-text-field label="Password" :rules="rules.password" type="password" v-model="form.password" />
					<v-text-field label="Confirm Password" :rules="rules.confirmPassword(form.password)" type="password" v-model="form.confirm" />
					<div class="text-right">
						<v-btn @click="submit" color="primary" :disabled="loading" :loading="loading" type="submit">
							Submit
						</v-btn>
					</div>
				</v-form>
			</v-card-text>
		</v-card>

		<v-card class="elevation-12 py-5" max-width="700" min-width="500" v-if="err">
			<v-card-actions>
				<v-spacer />
				<v-icon color="red" x-large>fas fa-exclamation-circle</v-icon>
				<v-spacer />
			</v-card-actions>
			<v-card-title class="justify-center py-0">Link Expired</v-card-title>
			<v-card-text class="text-center">The link you have accessed has already expired. Please check the link again or contact your admin.</v-card-text>
		</v-card>
	</v-layout>
</v-container>
</template>

<script>
import helpers from '@/plugins/helpers'

export default {
	created() {
		this.fetchLink()
	},
	data() {
		return {
			err: false,
			expired: false,
			link: {},
			form: {},
			loading: false,
			rules: helpers.rules,
			valid: true
		}
	},
	methods: {
		async fetchLink() {
			try {
				let { data } = await axios.get(`/api/verify/${this.$route.params.id}`)
				this.link = data
				this.expired = new Date(this.link.createdAt) < new Date(new Date() - 24 * 60 * 60 * 1000)
				this.err = this.expired ? true : false
			} catch (err) {
				this.err = true
			}
		},
		async submit() {
			if (this.$refs.form.validate()) {
				this.loading = true
				try {
					let res = await axios.post(`/api/verify/${this.link._id}`, { password: this.form.password })
					this.$store.dispatch( 'showSnack', { message: 'Password successfully set', color: 'success' })
					this.$router.push('/login')
				} catch (err) {
					this.$store.dispatch('showSnack', { err, color: 'error' })
					this.loading = false
				}
			}
		}
	},
}
</script>
