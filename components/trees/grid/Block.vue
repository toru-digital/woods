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
	<div @click='$emit ("clickedon")'>
		<div class='w-full p-3'>
			<div class='w-full aspect-square rounded-full bg-cover bg-center cursor-pointer' :style="`background-image: url(` + image + `)`">

			</div>
		</div>
		<p class='text-tiny text-center font-sans'>{{ title }}</p>
	</div>
</template>
