<script setup>
import { reactive } from "vue";
import { getTreesById } from "../data/trees";

const props = defineProps({
	tree_id: {
		type: Number,
		required: true,
	},
});
</script>

<template>
	<div v-for="tree in getTreesById(tree_id)">
		<div
			class="w-full h-[320px] bg-slate-200 bg-cover bg-center cursor-pointer flex items-end justify-center"
			:style="`background-image: url(` + tree.img + `)`"
		/>
		<div class="px-2 py-2">
			<h1 class="text-3xl mt-2">{{ tree.title }}</h1>
		</div>
	</div>
</template>
