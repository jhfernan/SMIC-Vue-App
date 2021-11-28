<template>
	<div>
		<backbar v-if="$store.getters.isLoggedIn" />
		<navbar v-else />
		<!-- <v-snackbar
				:color="$store.state.snack.color"
				:timeout="$store.state.snack.timeout"
				top
				v-model="$store.state.snack.available">
				{{ $store.state.snack.text }}
				<template v-slot:action="{ attrs }">
					<v-btn @click.native="$store.dispatch('snack/closeSnack')" text v-bind="attrs">
						Close
					</v-btn>
				</template>
			</v-snackbar> -->
	</div>
</template>

<script>
import Navbar from '@/components/layouts/Navbar'
import Backbar from '@/components/layouts/Backbar'

export default {
	components: {
		Backbar,
		Navbar
	}
}
</script>
