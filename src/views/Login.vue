<template>
<v-container fluid fill-height>
	<v-layout align-center justify-center>
		<v-flex xs12 sm8 md6 lg4>
			<v-card class="elevation-12">
				<v-toolbar color="primary" dark dense>
					<v-toolbar-title>Login</v-toolbar-title>
				</v-toolbar>
				<v-card-text>
					<v-alert class="mb-3" type="error" v-if="err">
						{{ err }}
					</v-alert>
					<v-form @submit.prevent="login">
						<v-text-field prepend-icon="fas fa-envelope" label="Email" type="email" v-model="form.email" />
						<v-text-field prepend-icon="fas fa-key" label="Password" type="password" v-model="form.password" />
						<div class="text-right">
							<v-btn @click="login" color="primary" :disabled="loading" :loading="loading" type="submit">
								Log In
							</v-btn>
						</div>
					</v-form>
				</v-card-text>
			</v-card>
		</v-flex>
	</v-layout>
</v-container>
</template>

<script>
import helpers from '@/plugins/helpers'

export default {
	data() {
		return {
			err: null,
			form: {},
			loading: false,
		}
	},
	methods: {
		async login() {
			this.err = null
			this.loading = true
			await this.$store.dispatch('login', this.form)
				.catch(err => {
					this.loading = false
					this.err = helpers.handleErr(err)
				})
		},
	},
}
</script>
