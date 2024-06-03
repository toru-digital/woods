<script setup>
const user_data = reactive({
	lat: 0,
	lon: 0,
});

const locationHandler = function (position) {
	const { latitude, longitude } = position.coords;

	user_data.lat = latitude;
	user_data.lon = longitude;
};

onNuxtReady(async () => {
	if (!process.client || !navigator.geolocation) return;

	navigator.geolocation.getCurrentPosition(locationHandler);
});
</script>

<template>
	<div v-if="user_data.lat == 0 && user_data.lon == 0" class="pt-2 px-2">
		<p>Loading...</p>
	</div>
	<div v-else>
		<div
			v-for="group in getTreeDistanceGroups(user_data.lat, user_data.lon)"
		>
			<div class="gap-2 pt-2 px-2">
				<p>{{ group.title }}</p>
			</div>
			<div
				class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-2 p-2"
			>
				<TreesGridBlock
					v-for="tree in group.trees"
					:image="tree.images[0].src"
					v-on:click="
						$emit('select-tree', tree.inaturalist_observation_id)
					"
					:title="tree.title"
					:key="tree.inaturalist_observation_id"
				/>
			</div>
		</div>
		<div
			class="pt-2 px-2"
			v-if="
				getTreeDistanceGroups(user_data.lat, user_data.lon).length == 0
			"
		>
			<p>No trees within 1km</p>
		</div>
	</div>
</template>
