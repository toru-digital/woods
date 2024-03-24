<script setup>
import { getTrees } from "../../data/trees";
</script>

<template>
	<div
		class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-2 p-2"
	>
		<TreesGridBlock
			v-for="tree in getTrees()"
			:image="tree.img"
			v-on:click="$emit('select-tree', tree.inaturalist_observation_id)"
			:title="tree.title"
			:key="tree.inaturalist_observation_id"
		/>
	</div>
</template>
