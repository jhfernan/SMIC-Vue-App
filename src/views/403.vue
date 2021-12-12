<template>
<v-container fluid fill-height>
	<v-layout align-center justify-center>
		<v-card class="elevation-12 py-5" max-width="500" min-width="400">
			<v-card-actions>
				<v-spacer />
				<v-icon color="red" x-large>mdi-alert-octagon</v-icon>
				<v-spacer />
			</v-card-actions>

			<v-card-title class="justify-center py-0">403 Authorization Error</v-card-title>
			<v-card-text class="text-center">You do not have the appropriate authorization to access this resource.<br>If that is incorrect, please contact your administrator.</v-card-text>
		</v-card>
	</v-layout>
</v-container>
</template>

<script>
export default {
	data() {
		return {}
	},
	methods: {},
}
</script>
