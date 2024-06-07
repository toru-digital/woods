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

const user_data = reactive({
	distance: -1,
});

const distanceChanged = (distance) => {
	user_data.distance = distance;
};
</script>

<template>
	<ClientOnly>
		<div class="w-full h-full bg-black text-white relative">
			<TreeFinderMap @distance-changed="distanceChanged" :tree="tree" />
			<TreeFinderDisplay :distance="user_data.distance" :tree="tree" />
		</div>
	</ClientOnly>
</template>
