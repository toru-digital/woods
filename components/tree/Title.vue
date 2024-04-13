<script setup>
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<div
		style="background-image: url(/theme/title-block/middle.png)"
		class="relative pb-8"
	>
		<img
			src="/theme/title-block/bottom.png"
			class="absolute bottom-0 w-full"
		/>
		<div class="relative p-3">
			<h1
				class="font-sig text-white text-3xl relative uppercase leading-9"
			>
				{{ title }}
			</h1>
		</div>
	</div>
</template>
