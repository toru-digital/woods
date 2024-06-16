<script setup>
import { reactive, ref, getCurrentInstance } from "vue";
import * as Sync from "@/components/tree/Finder/Sync";

const emit = defineEmits(["positionChanged"]);
const props = defineProps({
	tree: {
		required: true,
	},
});

const maps = ref();
const accuracy_threshold = 25;

let tick_interval = null;
const user_data = reactive({
	lat: 0,
	lon: 0,
	accuracy: 0,
});

const locationHandler = function (position) {
	const { latitude, longitude, accuracy } = position.coords;
	if (accuracy == null) return;

	// accuracy > accuracy_threshold

	user_data.lat = latitude;
	user_data.lon = longitude;
	user_data.accuracy = accuracy;

	emit("positionChanged", user_data);
};

const locationError = function (error) {
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
	if (maps.value[0]?.leafletObject == undefined) return;
	if (maps.value[1]?.leafletObject == undefined) return;
	if (maps_synced) return;

	maps.value[1].leafletObject.sync(maps.value[0].leafletObject, {
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
		<LMap
			ref="maps"
			v-for="i in 2"
			class="map-container"
			:class="{ 'pointer-events-none': i == 1 }"
			:data-index="index"
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
				<LIcon icon-url="/icons/tree_icon.png" :icon-size="[35, 35]" />
			</LMarker>
			<LMarker
				:if="user_data.lat != 0 && user_data.lon != 0"
				:lat-lng="[user_data.lat, user_data.lon]"
			>
				<LIcon icon-url="/icons/user_icon.png" :icon-size="[35, 35]" />
			</LMarker>
			<LCircle
				:lat-lng="[user_data.lat, user_data.lon]"
				:radius="user_data.accuracy"
				fillColor="white"
				fillOpacity="0.6"
				dashArray="1, 5"
				color="#FE7C43"
			/>
		</LMap>
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
