<script setup>
const props = defineProps({
	image: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<div class="shadow-lg w-full bg-white rounded-sm py-6 pr-6 pl-9">
		{{ title }}
	</div>
</template>
