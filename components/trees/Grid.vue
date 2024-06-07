<script setup>
import nuxtStorage from "nuxt-storage";
const { data: trees } = await useFetch("/api/trees");

const isFound = (tree) => {
	const found = nuxtStorage.localStorage.getData("found_trees");
	return found != null && found.includes(tree.slug);
};
</script>

<template>
	<div class="grid grid-cols-3 gap-3 p-3">
		<TreesGridBlock
			v-for="tree in trees"
			:image="tree.images[0].src"
			:found="isFound(tree)"
			v-on:click="$emit('select-tree', tree.slug)"
			:title="tree.title"
			:key="tree.inaturalist_observation_id"
		/>
	</div>
</template>
