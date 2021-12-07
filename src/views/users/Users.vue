<template>
<v-container fluid>
	<breadcrumbs />

	<v-simple-table>
		<template v-slot:default>
			<thead>
				<tr>
					<th class="text-right" colspan="4">
						<v-fab-transition>
							<v-btn color="success" icon to="/manage_users/create_user">
								<v-icon>fas fa-user-plus</v-icon>
							</v-btn>
						</v-fab-transition>
					</th>
				</tr>
				<tr>
					<th>#</th>
					<th class="text-left">
						Name
					</th>
					<th class="text-left">
						Email
					</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody v-if="!loading">
				<tr v-for="(user, i) in users" :key="user._id">
					<td>{{ i + 1 }}</td>
					<td>
						<v-row>
							<v-col md="2">
								<v-img class="lf-img-rounded" :src="gravatar(user.email)" width="30" />
							</v-col>
							<v-col md="8">
								<strong>{{ user | fullName }}</strong>
							</v-col>
						</v-row>
					</td>
					<td>
						<a :href="`mailto:${ user.email }`">{{ user.email }}</a>
					</td>
					<td>
						<v-btn @click="setDeleteUser(user)" color="error" icon>
							<v-icon>fas fa-trash</v-icon>
						</v-btn>
					</td>
				</tr>
			</tbody>
		</template>
	</v-simple-table>

	<v-skeleton-loader class="pt-3" type="list-item-avatar, list-item-avatar, list-item-avatar, list-item-avatar" v-if="loading" />

	<v-dialog max-width="290" persistent v-model="delDialog">
		<v-card>
			<v-toolbar color="error" dark dense>
				<v-toolbar-title>Delete User</v-toolbar-title>
			</v-toolbar>
			<v-card-text class="pt-3">
				This process is not reversible. Are you sure you want to delete <strong>{{ delUserData | fullName }}'s</strong> profile?
			</v-card-text>
			<v-card-actions>
				<v-btn @click="delDialog = false" text>
					Cancel
				</v-btn>
				<v-spacer />
				<v-btn @click="delUser()" color="error" :disabled="delLoader" :loading="delLoader" text>
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
		this.fetchUsers()
	},
	data() {
		return {
			delDialog: false,
			delLoader: false,
			delUserData: {},
			loading: true,
			users: []
		}
	},
	methods: {
		gravatar(email) {
			return helpers.gravatar(email)
		},
		async fetchUsers() {
			try {
				let res = await axios.get('/api/v1/users')
				this.users = res.data
				this.loading = false
			} catch (err) {
				this.$store.dispatch('showSnack', { err, color: 'error' })
			}
		},
		setDeleteUser(user) {
			this.delUserData = user
			this.delDialog = true
		},
		async delUser() {
			this.loader = true
			try {
				let { data } = await axios.delete('/api/v1/users/' + this.delUserData._id)
				this.users = this.users.filter(user => user._id !== data)
				this.delDialog = false
				this.delUserData = {}
				this.$store.dispatch('showSnack', {
					message: 'User successfully deleted',
					color: 'success'
				})
			} catch (err) {
				this.$store.dispatch('showSnack', { err, color: 'error' })
			} finally {
				this.loader = false
			}
		}
	}
}
</script>
