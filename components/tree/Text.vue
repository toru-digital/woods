<script setup>
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	text: {
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

		<p v-if="text" class="font-mont text-sm">
			{{ text }}
		</p>
	</div>
</template>
