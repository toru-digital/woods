<script setup>
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	source: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<div class="w-full">
		<h1 class="font-sig text-forest-900 text-lg uppercase leading-9 p-3">
			{{ title }}
		</h1>
		<img :src="source" class="w-full" />
	</div>
</template>
