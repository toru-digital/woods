<script setup>
import { getTrees } from "../../data/trees";
</script>

<template>
	<div class="grid grid-cols-2">
		<TreesGridBlock
			v-for="tree in getTrees()"
			:image="tree.img"
			:title="tree.title"
			:key="tree.inaturalist_observation_id"
		/>
	</div>
</template>
