<template>
	<div class="home">
		<Locations></Locations>
	</div>
	
</template>

<script>
import Locations from './Locations.vue';

export default {
	name: "Home",
	methods: {
		goBack() {
			window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
		}
	},
	components: {
    	Locations,
  	},
}
</script>