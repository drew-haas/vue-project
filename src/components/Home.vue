<template>
	<div class="home">
		<Locations></Locations>
	</div>
</template>

<script>
import Locations from './Locations.vue';

export default {
	name: "Home",
	computed: {
		username () {
			// We will see what `params` is shortly
			return this.$route.params.username
		}
	},
	methods: {
		goBack () {
			window.history.length > 1
			? this.$router.go(-1)
			: this.$router.push('/')
		}
	},
	components: {
    	Locations,
  	},
}
</script>