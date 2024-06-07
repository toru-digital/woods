<script setup>
const router = useRouter();

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
	lat: 0,
	lon: 0,
	distance: -1,
});

const userPositionChanged = (position) => {
	const [lat, lon] = position;

	user_data.lat = lat;
	user_data.lon = lon;
	user_data.distance = getDistance(props.tree.lat, props.tree.lon, lat, lon);
};
</script>

<template>
	<ClientOnly>
		<div class="w-full h-full bg-black text-white relative">
			<TreeFinderMap
				@user-position-changed="userPositionChanged"
				:tree="tree"
			/>
			<TreeFinderDisplay
				:distance="user_data.distance"
				:lat="user_data.lat"
				:lon="user_data.lon"
				:tree="tree"
				@back-click="() => router.push(back_link)"
				@debug-click="() => router.push(debug_link)"
			/>
		</div>
	</ClientOnly>
</template>
