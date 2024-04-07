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
	<div @click="$emit('clickedon')">
		<div class="w-full">
			<div
				class="w-full aspect-square rounded-full bg-cover bg-center cursor-pointer"
				:style="`background-image: url(` + image + `)`"
			></div>
		</div>
		<p class="text-center font-mont text-xs mt-2 mb-3">{{ title }}</p>
	</div>
</template>
