<template>
	<v-breadcrumbs :items="breadcrumbItems">
		<template v-slot:divider>
			<v-icon>mdi-chevron-right</v-icon>
		</template>
	</v-breadcrumbs>
</template>

<script>
import helpers from '@/plugins/helpers'

export default {
	computed: {
		breadcrumbItems() {
			return helpers.breadcrumbs(this.$route)
		}
	},
}
</script>
