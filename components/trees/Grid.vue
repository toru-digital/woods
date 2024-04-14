<script setup>
import { getTrees } from "../../data/trees";
</script>

<template>
	<div class="grid grid-cols-2 gap-4 p-4">
		<TreesGridBlock
			v-for="tree in getTrees()"
			:image="tree.img"
			v-on:click="$emit('select-tree', tree.slug)"
			:title="tree.title"
			:key="tree.inaturalist_observation_id"
		/>
	</div>
</template>
