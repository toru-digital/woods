<script setup>
import { reactive, ref } from "vue";
import * as Sync from "@/components/tree/Finder/Sync";

const emit = defineEmits(["positionChanged"]);
const props = defineProps({
	tree: {
		required: true,
	},
});

const map1 = ref(null);
const map2 = ref(null);

let tick_interval = null;
const user_data = reactive({
	lat: 0,
	lon: 0,
	accuracy: 0,
});

const locationHandler = function (position) {
	const { latitude, longitude, accuracy } = position.coords;
	if (accuracy == null || accuracy > 25) return;

	user_data.lat = latitude;
	user_data.lon = longitude;
	user_data.accuracy = accuracy;

	emit("positionChanged", user_data);
};

const locationError = function (error) {
	alert("Error getting location");
	console.log(error);
	navigator.geolocation.clearWatch(watchID);
	watchID = null;
};

let maps_synced = false;
let watchID = null;
const tick = () => {
	if (watchID == null) {
		watchID = navigator.geolocation.watchPosition(
			locationHandler,
			locationError,
			{
				enableHighAccuracy: true,
				maximumAge: 0,
			}
		);
	}

	if (!maps_synced) syncMaps();
};

const syncMaps = () => {
	if (map1.value.leafletObject == undefined) return;
	if (map2.value.leafletObject == undefined) return;
	if (maps_synced) return;

	map2.value.leafletObject.sync(map1.value.leafletObject, {
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
	const padding = 0.0005;

	const user_pos = {
		lat: user_pos_set ? user_data.lat : props.tree.lat,
		lon: user_pos_set ? user_data.lon : props.tree.lon,
	};

	return [
		[
			Math.min(user_pos.lat, props.tree.lat) - padding,
			Math.min(user_pos.lon, props.tree.lon),
		],
		[
			Math.max(user_pos.lat, props.tree.lat) + padding,
			Math.max(user_pos.lon, props.tree.lon),
		],
	];
};

onUnmounted(function () {
	clearInterval(tick_interval);
	navigator.geolocation.clearWatch(watchID);
});
</script>
<template>
	<div class="maps">
		<div class="map-container pointer-events-none">
			<LMap
				ref="map1"
				:center="[tree.lat, tree.lon]"
				:bounds="getMapBounds()"
				:maxZoom="17"
				:zoom="15"
				:zoomAnimation="false"
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
				<!-- <LRectangle :bounds="getMapBounds()" /> -->
			</LMap>
		</div>
		<div class="map-container">
			<LMap
				ref="map2"
				:center="[tree.lat, tree.lon]"
				:bounds="getMapBounds()"
				:maxZoom="17"
				:zoom="15"
				:zoomAnimation="false"
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
				<!-- <LRectangle :bounds="getMapBounds()" /> -->
			</LMap>
		</div>
	</div>
</template>

<style scoped>
.maps {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
}

.maps .map-container:first-child {
	width: 100%;
	height: 320px;
}

.maps .map-container:last-child {
	width: 100%;
	height: calc(100% - 320px);
}
</style>
