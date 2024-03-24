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
	<div
		class="w-full h-[160px] bg-slate-200 rounded-lg bg-cover bg-center cursor-pointer flex items-end justify-center p-2"
		:style="`background-image: url(` + image + `)`"
	>
		<div
			class="font-bold text-center text-l text-white leading-none w-[min-content] bg-slate-900 p-2 bg-opacity-90 w-full"
		>
			{{ title }}
		</div>
	</div>
</template>
