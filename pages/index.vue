<template>
	<template>
		<pre>{{ data }}</pre>
	</template>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/hello')
</script>

<style scoped>

</style>