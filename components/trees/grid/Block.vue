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
		<div class="w-full relative">
			<div
				class="w-full aspect-square rounded-full bg-cover bg-center cursor-pointer"
				:style="`background-image: url(` + image + `)`"
			></div>
			<img
				v-if="false"
				class="absolute bottom-0 right-4 w-10 h-10"
				src="/icons/tick-orange.png"
				alt="tick"
			/>
		</div>
		<p class="text-center font-mont text-md mt-3">
			{{ title }}
		</p>
	</div>
</template>
