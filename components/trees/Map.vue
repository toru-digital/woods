<script setup>
import { ref, reactive } from "vue";
import { getTrees } from "../../data/trees";

const user_data = reactive({
	log: "...",
	lat: 0,
	lon: 0,
});

const delapre_position = [52.224723, -0.887954];

const locationHandler = function (position) {
	const { latitude, longitude } = position.coords;

	const distance = getDistance(
		delapre_position[0],
		delapre_position[1],
		latitude,
		longitude
	);

	if (distance < 1) {
		user_data.lat = latitude;
		user_data.lon = longitude;
	}
};

const getMapCenter = () => {
	if (user_data.lat == 0 && user_data.lon == 0) return delapre_position;
	return [user_data.lat, user_data.lon];
};

onNuxtReady(async () => {
	if (!process.client || !navigator.geolocation) return;

	navigator.geolocation.getCurrentPosition(locationHandler);
});

const zoom = ref(18);
</script>

<template>
	<LMap ref="map" :zoom="zoom" :center="getMapCenter()">
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
			<LPopup>
				<div
					class="cursor-pointer text-lg font-bold text-mont"
					v-on:click="$emit('select-tree', tree.slug)"
				>
					<img
						:src="tree.img"
						class="w-32 h-32 object-cover rounded-lg"
					/>
					{{ tree.title }}
				</div>
			</LPopup>
		</LMarker>

		<LCircleMarker
			radius="10"
			color="red"
			:if="user_data.lat != 0 && user_data.lon != 0"
			:lat-lng="[user_data.lat, user_data.lon]"
		>
		</LCircleMarker>
	</LMap>
</template>
