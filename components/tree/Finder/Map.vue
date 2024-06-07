<script setup>
import { reactive, ref } from "vue";

import * as Sync from "@/components/tree/Finder/Sync";

const props = defineProps({
	tree: {
		required: true,
	},
});

const mainMap = ref(null);
const topMap = ref(null);
let tick_interval = null;
const user_data = reactive({
	lat: 0,
	lon: 0,
});

const locationHandler = function (position) {
	const { latitude, longitude } = position.coords;

	const distance = getDistance(
		props.tree.lat,
		props.tree.lon,
		latitude,
		longitude
	);

	user_data.lat = latitude;
	user_data.lon = longitude;
};

const locationError = function (error) {
	alert("Error getting location");
	console.log(error);
};

let maps_synced = false;

const tick = () => {
	navigator.geolocation.getCurrentPosition(locationHandler, locationError, {
		enableHighAccuracy: true,
		maximumAge: 1000,
	});
	if (!maps_synced) syncMaps();
};

const syncMaps = () => {
	if (topMap.value.leafletObject == undefined) return;
	if (mainMap.value.leafletObject == undefined) return;
	if (maps_synced) return;

	mainMap.value.leafletObject.sync(topMap.value.leafletObject, {
		offsetFn: L.Sync.offsetHelper([0, 0], [0, 1]),
	});

	maps_synced = true;
};

onNuxtReady(async () => {
	if (!process.client || !navigator.geolocation) return;
	tick_interval = setInterval(tick, 1000);
	tick();

	syncMaps();
});

const getMapBounds = () => {
	const user_pos_set = user_data.lat != 0 && user_data.lon != 0;

	const user_pos = {
		lat: user_pos_set ? user_data.lat : props.tree.lat,
		lon: user_pos_set ? user_data.lon : props.tree.lon,
	};

	return [
		[
			Math.max(user_pos.lat, props.tree.lat),
			Math.max(user_pos.lon, props.tree.lon),
		],
		[
			Math.min(user_pos.lat, props.tree.lat),
			Math.min(user_pos.lon, props.tree.lon),
		],
	];
};

onUnmounted(function () {
	clearInterval(tick_interval);
});
</script>
<template>
	<div class="maps">
		<div class="map-container pointer-events-none">
			<LMap
				id="topMap"
				ref="topMap"
				:center="[tree.lat, tree.lon]"
				:zoom="15"
				:options="{ zoomControl: false, attributionControl: false }"
			>
				<LTileLayer
					url="https://d1up0v8yxutj1v.cloudfront.net/{z}/{x}/{y}.png"
					attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
					layer-type="base"
					:max-zoom="18"
					name="OpenStreetMap"
				/>
			</LMap>
		</div>
		<div class="map-container">
			<LMap
				id="mainMap"
				ref="mainMap"
				:center="[tree.lat, tree.lon]"
				:bounds="getMapBounds()"
				:zoom="15"
				:options="{ zoomControl: false, attributionControl: false }"
			>
				<LTileLayer
					url="https://d1up0v8yxutj1v.cloudfront.net/{z}/{x}/{y}.png"
					attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
					layer-type="base"
					:max-zoom="18"
					name="OpenStreetMap"
				/>
				<LMarker :lat-lng="[tree.lat, tree.lon]">
					<LIcon
						icon-url="/icons/tree_icon.png"
						:icon-size="[35, 35]"
					/>
				</LMarker>
				<LMarker
					:if="user_data.lat != 0 && user_data.lon != 0"
					:lat-lng="[user_data.lat, user_data.lon]"
				>
					<LIcon
						icon-url="/icons/user_icon.png"
						:icon-size="[35, 35]"
					/>
				</LMarker>
				<LRectangle :bounds="getMapBounds()" />
			</LMap>
		</div>
	</div>
</template>

<style scoped>
.maps {
	width: 100%;
	height: 100%;
	background: red;
	display: flex;
	flex-direction: column;
}

.maps .map-container {
	width: 100%;
	height: 50%;
}
</style>
