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
	description: {
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
		class="min-h-[500px] bg-cover bg-left-bottom relative flex items-end p-3"
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

		<div class="mr-20">
			<h1
				class="font-sig text-white text-4xl relative uppercase leading-9"
			>
				{{ title }}
			</h1>
			<p class="font-mont text-white text-sm mr-12 mt-2 font-light">
				{{ description }}
			</p>
			<div
				class="bg-blaze-400 rounded-full px-6 py-2 text-white font-sig uppercase mt-4 mb-2 inline-block text-xl cursor-pointer select-none"
			>
				{{ button_label }}
			</div>
		</div>
	</section>
</template>
