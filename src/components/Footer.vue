<template>
	<footer>
		<ul>
			<li><a href="https://github.com/drew-haas" target="_blank">Github</a></li>
		</ul>
	</footer>
</template>

<script>
export default {
	name: "Footer"
}
</script>

<style lang="scss">
footer {
	background-color: #F2F2F2;
	margin-top: 100px;
	// position: absolute;
	// bottom: 0;
	// left: 0;
	// width: 100%;

	ul {
		list-style-type: none;
		padding: 12px;
		margin: 0;

		a {
			color: $green-light;
			text-decoration: none;

			&:hover {
				color: $green-light;
			}
		}
	}
}
</style>

