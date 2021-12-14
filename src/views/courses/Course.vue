<template>
<v-container fluid>
	<breadcrumbs />
	<v-container>
		<v-row>
			<v-col>
				<v-card>
					<v-card-title>
						{{ course.subject | subjectName }}
						<v-spacer />
						{{ course.teacher | fullName }}
					</v-card-title>
					<v-card-subtitle>
						<strong>{{ course | semester }}</strong>
					</v-card-subtitle>
					<v-card-text>
						{{ course.subject ? course.subject.description : '' }}
					</v-card-text>
				</v-card>
			</v-col>
			<v-col>
				<v-card>
					<v-simple-table>
						<template v-slot:default>
							<thead>
								<tr>
									<th>Student Roster</th>
									<th class="text-right" colspan="4">
										<v-fab-transition>
											<v-btn @click="openDialog()" color="success" icon>
												<v-icon>fas fa-user-plus</v-icon>
											</v-btn>
										</v-fab-transition>
									</th>
								</tr>
								<tr>
									<th>#</th>
									<th class="pl-15">
										Name
									</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(student, i) in course.students" :key="student._id">
									<td>{{ i + 1 }}</td>
									<td>
										<v-list-item>
											<v-list-item-avatar>
												<v-img class="lf-img-rounded" :src="gravatar(student.email)" width="30" />
											</v-list-item-avatar>
											<v-list-item-content>
												<v-list-item-title >{{ student | fullName }}</v-list-item-title>
											</v-list-item-content>
										</v-list-item>
									</td>
								</tr>
							</tbody>
						</template>
					</v-simple-table>
				</v-card>
			</v-col>
		</v-row>
	</v-container>

	<v-dialog max-width="750" persistent v-model="dialog">
		<v-card min-width="500">
			<v-toolbar color="primary" dark dense>
				<v-toolbar-title>Add Student</v-toolbar-title>
			</v-toolbar>
			<v-card-text class="pt-3">
				<v-list dense>
					<v-subheader>STUDENTS TO BE ADDED</v-subheader>
					<v-list-item-group>
						<v-list-item :key="`toBeA${i}`" v-for="(student, i) in form">
							<v-list-item-avatar>
								<v-img :src="student.gravatar" />
							</v-list-item-avatar>
							<v-list-item-content>
								<v-list-item-title v-text="student.name" />
							</v-list-item-content>
							<v-list-item-action @click="removeStudent(i)">
								<v-icon color="error">fas fa-minus</v-icon>
							</v-list-item-action>
						</v-list-item>
					</v-list-item-group>
				</v-list>
				<p class="pl-5" v-if="form.length == 0">No students added yet...</p>

				<v-autocomplete :items="searchResults" :loading="isSearching" :search-input.sync="search" clearable hide-details hide-selected item-text="name" item-value="id" label="Search for a student..." solo v-model="query" @change="addStudent()" ref="specialSelect">
					<template v-slot:no-data>
						<v-list-item>
							<v-list-item-title>
								Search for
								<strong>Student</strong>
							</v-list-item-title>
						</v-list-item>
					</template>
					<template v-slot:item="{ item }">
						<v-list-item-avatar>
							<v-img :src="item.gravatar" />
						</v-list-item-avatar>
						<v-list-item-content>
							<v-list-item-title v-text="item.name" />
							<v-list-item-subtitle v-text="item.nameAlt" />
						</v-list-item-content>
					</template>
				</v-autocomplete>
			</v-card-text>
			<v-card-actions>
				<v-btn @click="dialog = false" text>
					Cancel
				</v-btn>
				<v-spacer />
				<v-btn @click="updateCourse()" color="success" :disabled="loading" :loading="loading" text>
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
	async created() {
		await this.fetchCourse()
	},
	components: {
		Breadcrumbs
	},
	computed: {
		searchResults() {
			let response = []
			for (let student of this.items) {
				let name = `${student.name.charAt(0).toUpperCase() + student.name.slice(1)} ${student.last.charAt(0).toUpperCase() + student.last.slice(1)}`
				response.push({
					id: student._id,
					gravatar: this.gravatar(student.email),
					name,
					nameAlt: student.nameAlt || ''
				})
			}
			return response
		},
	},
	data() {
		return {
			course: {},
			dialog: false,
			form: [],
			items: [],
			isSearching: false,
			loading: false,
			query: null,
			rules: helpers.rules,
			search: null,
			valid: true,
		}
	},
	methods: {
		async addStudent() {
			if (!this.form.some(item => item.id == this.query)) {
				let result = this.searchResults.find(item => item.id == this.query)
				this.form.push(result)
			}
			this.$refs.specialSelect.reset()
		},
		async fetchCourse() {
			try {
				let {
					data
				} = await axios.get(`/api/v1/courses/${this.$route.params.id}`)
				this.course = data
			} catch (err) {
				this.$store.dispatch('showSnack', {
					err,
					color: 'error'
				})
			}
		},
		gravatar(email) {
			return helpers.gravatar(email)
		},
		openDialog() {
			this.form = []
			for (let student of this.course.students) {
				let name = `${student.name.charAt(0).toUpperCase() + student.name.slice(1)} ${student.last.charAt(0).toUpperCase() + student.last.slice(1)}`
				this.form.push({
					id: student._id,
					gravatar: this.gravatar(student.email),
					name,
					nameAlt: student.nameAlt || ''
				})
			}
			this.dialog = true
		},
		removeStudent(index) {
			this.form.splice(index, 1)
		},
		async updateCourse() {
			if (this.form.length > 0) {
				this.loading = true
				let students = []
				for (let item of this.form) {
					students.push(item.id)
				}
				try {
					let { data } = await axios.put(`/api/v1/courses.add_students/${this.course._id}`, { students })
					this.$store.dispatch( 'showSnack', { message: 'Course successfully updated', color: 'success' })
					this.fetchCourse()
					this.form = []
				} catch (err) {
					this.$store.dispatch('showSnack', { err, color: 'error' })
				} finally {
					this.loading = false
				}
			}
		}
	},
	watch: {
		async search(val) {
			if (!val) return

			this.isSearching = true
			try {
				let { data } = await axios.get(`/api/v1/courses.students/${val}`)
				this.items = data
			} catch (err) {
				console.log(err)
			} finally {
				this.isSearching = false
			}
		},
	}
}
</script>
