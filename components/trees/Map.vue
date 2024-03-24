<script setup>
import { ref, reactive } from "vue";
import { getTrees } from "../../data/trees";

const user_data = reactive({
	log: "...",
	lat: 52.224723,
	lon: -0.887954,
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

const zoom = ref(18);
</script>

<template>
	<LMap ref="map" :zoom="zoom" :center="[user_data.lat, user_data.lon]">
		<LTileLayer
			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
			layer-type="base"
			max-zoom="30"
			name="OpenStreetMap"
		/>
		<LMarker
			v-for="tree in getTrees()"
			:key="tree.inaturalist_observation_id"
			:lat-lng="[tree.lat, tree.lon]"
		>
			<LPopup>{{ tree.title }}</LPopup>
		</LMarker>

		<LCircleMarker
			radius="10"
			color="red"
			:lat-lng="[user_data.lat, user_data.lon]"
		>
		</LCircleMarker>
	</LMap>
</template>
