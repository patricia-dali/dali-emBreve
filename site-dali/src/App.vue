<template>
	<div id="app">
		<CoHeader />
		<CoContents />
	</div>
</template>

<script>
import CoHeader from "./components/CoHeader.vue"
import CoContents from "./components/CoContents.vue"

export default {
	name: "App",
	components: { CoHeader, CoContents }
}
</script>

<style>
	body {
		padding: 0%;
		margin: 0px;
		background-color: #fcf7fc;
	}
	
	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		height: 100vh;
		/* display: flex;
		grid-template-rows: 90px 9fr 40px;
		grid-template-columns: 100vw;
		grid-template-areas: 
			"header"
			"content"; */
	}

</style>