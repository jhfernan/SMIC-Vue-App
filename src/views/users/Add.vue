<template>
<v-container fluid>
	<breadcrumbs />

	<v-form lazy-validation ref="form" @submit.prevent="submit" v-model="valid">
		<v-container>
			<v-row class="pt-3">
				<v-col class="pa-0" cols="12" xs="12">
					<v-subheader>Account Info</v-subheader>
				</v-col>
				<v-col cols="12" md="6" lg="4" offset-lg="2">
					<v-text-field label="First Name" :rules="rules.maxRequired(20)" validate-on-blur v-model="form.name" />
				</v-col>
				<v-col cols="12" md="6" lg="4">
					<v-text-field label="Last Name" :rules="rules.maxRequired(20)" validate-on-blur v-model="form.last" />
				</v-col>
			</v-row>
			<v-row class="pt-1">
				<v-col cols="12" md="8" offset-md="2" lg="6" offset-lg="3">
					<v-text-field error-count="2" label="Alt Name (Chinese Name)" :rules="rules.max(50)" validate-on-blur v-model="form.nameAlt" />
				</v-col>
			</v-row>

			<v-row class="pt-1">
				<v-col cols="12" md="6" lg="4" offset-lg="2">
					<v-text-field label="Email" :rules="rules.email" validate-on-blur v-model="form.email" />
				</v-col>
				<v-col cols="12" md="6" lg="4">
					<v-text-field label="Phone Number" validate-on-blur v-model="form.phone" />
				</v-col>
			</v-row>

			<v-row class="pt-1">
				<v-col class="pa-0" cols="12" xs="12">
					<v-subheader>Personal Info</v-subheader>
				</v-col>
				<v-col cols="12" md="6" lg="4" offset-lg="2">
					<v-select label="Gender" :items="genders" v-model="form.gender" />
				</v-col>
				<v-col cols="12" md="6" lg="3">
					<v-checkbox label="Married?" v-model="form.married" />
				</v-col>
			</v-row>

			<v-row class="py-1" row wrap>
				<v-col class="pa-0" cols="12" xs="12">
					<v-subheader class="text-center">Permissions</v-subheader>
				</v-col>
				<v-col class="py-0" cols="12" xs="6" md="3" offset-md="1">
					<v-checkbox label="Admin" v-model="form.admin" />
				</v-col>
				<v-col class="py-0" cols="12" xs="6" md="3" offset-md="1">
					<v-checkbox label="Manager" v-model="form.manager" />
				</v-col>
				<v-col class="py-0" cols="12" xs="6" md="3" offset-md="1">
					<v-checkbox label="Staff" v-model="form.staff" />
				</v-col>
				<v-col class="py-0" cols="12" xs="6" md="3" offset-md="1">
					<v-checkbox label="Teacher" v-model="form.teacher" />
				</v-col>
				<v-col class="py-0" cols="12" xs="6" md="3" offset-md="1">
					<v-checkbox label="TA" v-model="form.teachingAssistant" />
				</v-col>
				<v-col class="py-0" cols="12" xs="6" md="3" offset-md="1">
					<v-checkbox label="Student" v-model="form.student" />
				</v-col>
				<v-col class="py-0" cols="12" xs="6" md="3" offset-md="1">
					<v-checkbox label="Developer" v-model="form.developer" />
				</v-col>
			</v-row>
			<v-alert dense outlined type="error" v-if="err">
				Students can only have <strong>Student</strong> and <strong>Teaching Assistant</strong> permissions.
			</v-alert>
		</v-container>

		<v-toolbar class="my-10" color="transparent" dense flat>
			<v-spacer />
			<v-btn class="mr-3" @click="clear">Clear</v-btn>
			<v-btn @click="submit" color="success" :disabled="loading" :loading="loading">
				Submit
			</v-btn>
		</v-toolbar>
	</v-form>

</v-container>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs'
import helpers from '@/plugins/helpers'

export default {
	components: {
		Breadcrumbs
	},
	data() {
		return {
			err: false,
			form: {},
			genders: ['male', 'female'],
			loading: false,
			rules: helpers.rules,
			valid: true
		}
	},
	methods: {
		checkPermissions() {
			if (
				(this.form.student || this.form.teachingAssistant) &&
				(this.form.admin || this.form.manager || this.form.staff || this.form.teacher || this.form.developer)
			) {
				this.err = true
				return false
			} else {
				return true
			}
		},
		clear() {
			this.$refs.form.reset()
		},
		async submit() {
			if (this.$refs.form.validate() && this.checkPermissions()) {
				this.loading = true
				try {
					let res = await axios.post('/api/v1/users', this.form)
					this.$store.dispatch( 'showSnack', { message: 'User successfully created', color: 'success' })
					this.$refs.form.reset()
					this.loading = false
				} catch (err) {
					this.$store.dispatch('showSnack', { err, color: 'error' })
					this.loading = false
				}
			}
		}
	},
	middleware: 'admin',
}
</script>
