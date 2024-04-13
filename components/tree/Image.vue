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
	<div class="p-3">
		<h1
			v-if="title"
			class="font-sig text-forest-900 text-lg uppercase leading-9"
		>
			{{ title }}
		</h1>

		<img v-if="source" :src="source" class="w-full" />
	</div>
</template>
