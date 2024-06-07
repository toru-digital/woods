<script setup>
const props = defineProps({
	tree: {
		required: true,
	},
	back_link: {
		required: true,
	},
	debug_link: {
		required: true,
	},
	found_link: {
		required: true,
	},
});

const distanceChanged = (distance) => {
	console.log(distance);
};
</script>

<template>
	<ClientOnly>
		<div class="w-full h-full bg-black text-white relative">
			<TreeFinderMap @distance-changed="distanceChanged" :tree="tree" />
			<TreeFinderDisplay />
		</div>
	</ClientOnly>
</template>
