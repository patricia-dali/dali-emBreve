<template>
    <div class="index">
		<!-- Patrícia Albuquerque -->
		<rounter-link to="/"></rounter-link>
		<CoHeader />
		<CoContents />        
    </div>

</template>

<script>
import CoHeader from "../components/index/CoHeader.vue"
import CoContents from "../components/index/CoContents.vue"

export default {
    name: 'Index',
	components: { CoHeader, CoContents }
}

</script>

<style>

</style>