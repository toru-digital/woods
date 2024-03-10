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
	meta_1: {
		type: String,
	},
});
</script>

<template>
	<div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
		<article class="overflow-hidden rounded-lg shadow-lg">
			<a href="#">
				<div
					class="block h-auto w-full h-[280px] bg-center bg-cover"
					:style="'background-image:url(' + image + ')'"
				/>
			</a>

			<header
				class="flex items-center justify-between leading-tight p-2 md:p-4"
			>
				<h1 class="text-lg">{{ title }}</h1>
				<p class="text-slate-400 text-sm">{{ meta_1 }}</p>
			</header>

			<footer
				class="flex gap-2 items-center justify-start leading-none p-2 md:p-4"
			>
				<slot></slot>
			</footer>
		</article>
	</div>
</template>
