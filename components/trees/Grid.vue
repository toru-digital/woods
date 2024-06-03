<script setup>
const { data: trees } = await useFetch("/api/trees");
</script>

<template>
	<div class="grid grid-cols-2 gap-4 p-4">
		<TreesGridBlock
			v-for="tree in trees"
			:image="tree.images[0].src"
			v-on:click="$emit('select-tree', tree.slug)"
			:title="tree.title"
			:key="tree.inaturalist_observation_id"
		/>
	</div>
</template>
