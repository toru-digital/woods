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
	subtitle: {
		type: String,
		required: true,
	},
	button_label: {
		type: String,
		required: true,
	},
	button_route: {
		type: Boolean,
		required: true,
	},
});
</script>

<template>
	<section
		class="min-h-[500px] bg-cover bg-left-bottom relative"
		:style="'background-image:url(' + image + ')'"
	>
		<img
			src="/images/hero-top-left.png"
			class="w-[107px] absolute top-0 left-0"
		/>

		<img
			src="/images/hero-bottom-right.png"
			class="w-[153px] absolute bottom-0 right-0"
		/>
	</section>
</template>
