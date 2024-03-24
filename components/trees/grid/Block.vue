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
	<div class="w-full h-[100px] bg-slate-200 rounded-lg">
		{{ title }}
	</div>
</template>
