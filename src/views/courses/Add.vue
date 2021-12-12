<template>
<v-container fluid>
	<breadcrumbs />

	<v-form lazy-validation ref="form" @submit.prevent="submit" v-model="valid">
		<v-container>
			<v-row class="pt-3">
				<v-col class="pa-0" cols="12" xs="12">
					<v-subheader>Course Info</v-subheader>
				</v-col>
				<v-col cols="12" md="8" offset-md="2" lg="6" offset-lg="3">
					<v-select @click:prepend="subDialog = true" label="Subject" prepend-icon="fas fa-plus" :items="subjectsOptions" item-text="name" item-value="id" :rules="rules.required" validate-on-blur v-model="form.subject" />
				</v-col>
			</v-row>

			<v-row class="pt-3">
				<v-col cols="12" md="6" lg="4" offset-lg="2">
					<v-select label="Primary Teacher" :items="teachers" item-text="name" item-value="id" :rules="rules.required" v-model="form.teacher" />
				</v-col>
				<v-col cols="12" md="6" lg="4">
					<v-select label="Teaching Assistants" :items="teachingAssistants" item-text="name" item-value="id" multiple v-model="form.teachingAssistants" />
				</v-col>
			</v-row>

			<v-row class="pt-3">
				<v-col cols="12" md="6" lg="4" offset-lg="2">
					<v-text-field label="Year" :rules="rules.year" validate-on-blur v-model="form.year" />
				</v-col>
				<v-col cols="12" md="6" lg="4">
					<v-select label="Semester" :items="semesters" :rules="rules.required" v-model="form.semester" />
				</v-col>
			</v-row>
		</v-container>

		<v-toolbar class="my-10" color="transparent" dense flat>
			<v-spacer />
			<v-btn class="mr-3" @click="clear">Clear</v-btn>
			<v-btn @click="submit" color="success" :disabled="loading" :loading="loading">
				Submit
			</v-btn>
		</v-toolbar>
	</v-form>

	<v-dialog max-width="750" persistent v-model="subDialog">
		<v-card>
			<v-toolbar color="primary" dark dense>
				<v-toolbar-title>Add Subject</v-toolbar-title>
			</v-toolbar>
			<v-card-text class="pt-3">
				<v-form lazy-validation ref="subForm" @submit.prevent="createSubject" v-model="subValid">
					<v-container>
						<v-row class="pt-3">
							<v-col class="pa-0" cols="12" xs="12">
								<v-subheader>Subject Info</v-subheader>
							</v-col>
							<v-col cols="12" md="8" offset-md="2" lg="6" offset-lg="3">
								<v-text-field counter="6" label="Subject Number" :rules="rules.required" validate-on-blur v-model="subForm.number" />
							</v-col>
							<v-col cols="12" md="8" offset-md="2" lg="6" offset-lg="3">
								<v-text-field label="Subject Name" :rules="rules.required" validate-on-blur v-model="subForm.name" />
							</v-col>
							<v-col cols="12" md="10" offset-md="1">
								<v-textarea label="Subject Description" counter="500" :rules="rules.required" validate-on-blur v-model="subForm.description" />
							</v-col>
						</v-row>
					</v-container>
				</v-form>
			</v-card-text>
			<v-card-actions>
				<v-btn @click="subDialog = false" text>
					Cancel
				</v-btn>
				<v-spacer />
				<v-btn @click="createSubject()" color="success" :disabled="subLoader" :loading="subLoader" text>
					Submit
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>

</v-container>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs'
import helpers from '@/plugins/helpers'

export default {
	components: {
		Breadcrumbs
	},
	computed: {
		subjectsOptions() {
			let response = []
			for (let subject of this.subjects) {
				response.push({ name: `${subject.number} - ${subject.name}`, id: subject._id })
			}
			return response
		},
		teachers() {
			let response = []
			let teachers = this.teachersAndTAs.filter(user => user.teacher)
			for (let teacher of teachers) {
				let name = `${teacher.last.charAt(0).toUpperCase() + teacher.last.slice(1)}, ${teacher.name.charAt(0).toUpperCase() + teacher.name.slice(1)}`
				response.push({
					id: teacher._id,
					name
				})
			}
			return response
		},
		teachingAssistants() {
			let response = []
			let teachingAssistants = this.teachersAndTAs.filter(user => user.teachingAssistant)
			for (let teachingAssistant of teachingAssistants) {
				let name = `${teachingAssistant.last.charAt(0).toUpperCase() + teachingAssistant.last.slice(1)}, ${teachingAssistant.name.charAt(0).toUpperCase() + teachingAssistant.name.slice(1)}`
				response.push({
					id: teachingAssistant._id,
					name
				})
			}
			return response
		}
	},
	async created() {
		await this.fetchTeachers()
		await this.fetchSubjects()
	},
	data() {
		return {
			err: false,
			form: {},
			subForm: {},
			loading: false,
			rules: helpers.rules,
			semesters: ['Fall', 'Spring', 'Summer'],
			subDialog: false,
			subLoader: false,
			subValid: true,
			subjects: [],
			teachersAndTAs: [],
			valid: true
		}
	},
	methods: {
		clear() {
			this.$refs.form.reset()
		},
		async createSubject() {
			if (this.$refs.subForm.validate()) {
				this.subLoader = true
				try {
					let res = await axios.post('/api/v1/courses.subjects', this.subForm)
					this.$store.dispatch('showSnack', {
						message: 'Subject successfully created',
						color: 'success'
					})
					this.$refs.subForm.reset()
				} catch (err) {
					this.$store.dispatch('showSnack', {
						err,
						color: 'error'
					})
				} finally {
					this.subLoader = false
				}
			}
		},
		async fetchSubjects() {
			try {
				let {
					data
				} = await axios.get('/api/v1/courses.subjects')
				this.subjects = data
			} catch (err) {
				this.$store.dispatch('showSnack', {
					err,
					color: 'error'
				})
			}
		},
		async fetchTeachers() {
			try {
				let {
					data
				} = await axios.get('/api/v1/courses.teachers')
				this.teachersAndTAs = data
			} catch (err) {
				this.$store.dispatch('showSnack', {
					err,
					color: 'error'
				})
			}
		},
		async submit() {
			if (this.$refs.form.validate()) {
				this.loading = true
				try {
					let res = await axios.post('/api/v1/courses', this.form)
					this.$store.dispatch('showSnack', {
						message: 'Course successfully created',
						color: 'success'
					})
					this.clear()
				} catch (err) {
					this.$store.dispatch('showSnack', {
						err,
						color: 'error'
					})
				} finally {
					this.loading = false
				}
			}
		}
	},
	middleware: 'admin',
}
</script>
