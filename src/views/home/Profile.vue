<template>
<v-container fluid>
	<breadcrumbs />
	<v-row justify="center">
		<v-col cols="12" sm="8" md="7" lg="6">
			<v-card class="px-5 pt-9 fill-height" style="min-height: 250px">
				<v-row class="full-height">
					<v-col align="center" justify="center" cols="12" sm="5">
						<v-img class="lf-img-rounded" :src="gravatar" width="150" height="150" />
						<v-chip class="ma-2" color="primary">
							{{ $store.getters.currentUser | mainPermission }}
						</v-chip>
					</v-col>
					<v-col cols="12" sm="7">
						<v-card-title>{{ $store.getters.currentUser | fullName }}</v-card-title>
						<v-card-subtitle v-if="$store.getters.currentUser.nameAlt">
							{{ $store.getters.currentUser.nameAlt }}
						</v-card-subtitle>
						<v-card-subtitle class="primary--text">
							{{ $store.getters.currentUser.email }}
						</v-card-subtitle>
						<v-card-text v-if="$store.getters.currentUser.about">
							{{ $store.getters.currentUser.about }}
						</v-card-text>
						<v-card-text v-else>
							No bio added yet
						</v-card-text>
					</v-col>
				</v-row>
			</v-card>
		</v-col>

		<v-col cols="12" sm="8" md="5" lg="6">
			<v-card>
				<v-card-title>Notifications</v-card-title>
				<v-card-text>
					Coming in future release
				</v-card-text>
			</v-card>
		</v-col>
	</v-row>
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
		gravatar() {
			return helpers.gravatar(this.$store.state.user.email)
		}
	},
}
</script>
