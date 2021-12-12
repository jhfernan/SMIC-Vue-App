<template>
<v-container fluid>
	<breadcrumbs />
	<v-simple-table>
		<template v-slot:default>
			<thead>
				<tr>
					<th class="text-right" colspan="5">
						<v-fab-transition>
							<v-btn color="success" icon to="/manage_courses/create_course">
								<v-icon>fas fa-book-medical</v-icon>
							</v-btn>
						</v-fab-transition>
					</th>
				</tr>
				<tr>
					<th>#</th>
					<th>
						Name
					</th>
					<th>
						Teacher
					</th>
					<th>
						Semester
					</th>
					<th class="text-right">Actions</th>
				</tr>
			</thead>
			<tbody v-if="!loading">
				<tr class="lf-pointer" @click="getCourseDetails(course._id)" v-for="(course, i) in courses" :key="course._id">
					<td>{{ i + 1 }}</td>
					<td>{{ course.subject | subjectName }}</td>
					<td>{{ course.teacher | fullName }}</td>
					<td>{{ course | semester }}</td>
					<td class="text-right">
						<v-btn @click="setDeleteCourse(course)" color="error" icon>
							<v-icon small>fas fa-trash</v-icon>
						</v-btn>
					</td>
				</tr>
			</tbody>
		</template>
	</v-simple-table>

	<v-skeleton-loader class="pt-3" type="list-item, list-item, list-item, list-item" v-if="loading" />

	<v-dialog max-width="290" persistent v-model="delDialog">
		<v-card>
			<v-toolbar color="error" dark dense>
				<v-toolbar-title>Delete Course</v-toolbar-title>
			</v-toolbar>
			<v-card-text class="pt-3">
				This process is not reversible. Are you sure you want to delete the <strong>{{ delCourseData.name ? delCourseData.name : '' }}</strong> course?
			</v-card-text>
			<v-card-actions>
				<v-btn @click="delDialog = false" text>
					Cancel
				</v-btn>
				<v-spacer />
				<v-btn @click="delCourse()" color="error" :disabled="delLoader" :loading="delLoader" text>
					Agree
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
	created() {
		this.fetchCourses()
	},
	data() {
		return {
			delDialog: false,
			delLoader: false,
			delCourseData: {},
			loading: true,
			courses: []
		}
	},
	methods: {
		async fetchCourses() {
			try {
				let {
					data
				} = await axios.get('/api/v1/courses')
				this.courses = data
				this.loading = false
			} catch (err) {
				this.$store.dispatch('showSnack', {
					err,
					color: 'error'
				})
			}
		},
		getCourseDetails(id) {
			this.$router.push(`/manage_courses/${id}`)
		},
		setDeleteCourse(course) {
			this.delCourseData = course
			this.delDialog = true
		},
		async delCourse() {
			this.delLoader = true
			try {
				let {
					data
				} = await axios.delete('/api/v1/courses/' + this.delCourseData._id)
				this.courses = this.courses.filter(course => course._id !== data)
				this.delDialog = false
				this.delCourseData = {}
				this.$store.dispatch('showSnack', {
					message: 'Course successfully deleted',
					color: 'success'
				})
			} catch (err) {
				this.$store.dispatch('showSnack', {
					err,
					color: 'error'
				})
			} finally {
				this.delLoader = false
			}
		}
	}
}
</script>
