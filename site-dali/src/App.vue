<template>
	<div id="app">
		<!-- Patrícia Albuquerque -->
		<Index />
		<CoRodape />
	</div>
</template>

<script>
import Index from "./views/Index.vue"
import CoRodape from "./components/index/CoRodape.vue"

export default {
	name: "App",
	components: { Index, CoRodape }
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