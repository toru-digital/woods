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
	accuracy: 0,
	distance: -1,
});

const userPositionChanged = (data) => {
	const { lat, lon, accuracy } = data;

	user_data.lat = lat;
	user_data.lon = lon;
	user_data.accuracy = accuracy;
	user_data.distance = getDistance(props.tree.lat, props.tree.lon, lat, lon);

	const arrived = user_data.distance < 0.02;
	if (arrived) {
		router.push(props.found_link);
	}
};

const getDistanceStr = () => {
	if (user_data.distance < 0) return "...";

	const distance =
		user_data.distance < 0.5
			? user_data.distance * 1000 + "m"
			: user_data.distance + "km";

	return distance;
};

const getAccuracyStr = () => {
	if (user_data.accuracy == null) return "";
	return "(+/- " + Math.round(user_data.accuracy) + "m)";
};
</script>

<template>
	<ClientOnly>
		<div class="w-full h-full bg-black text-white relative">
			<TreeFinderMap
				@position-changed="userPositionChanged"
				:tree="tree"
			/>
			<TreeFinderDisplay
				:distance="getDistanceStr()"
				:accuracy="getAccuracyStr()"
				:lat="user_data.lat"
				:lon="user_data.lon"
				:tree="tree"
				@back-click="() => router.push(back_link)"
				@debug-click="() => router.push(debug_link)"
			/>
		</div>
	</ClientOnly>
</template>
