<script setup>
import { reactive, ref } from "vue";

const map = ref(null);
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
});

const user_data = reactive({
	error: "",
	deg: 0,
	is_initiated: false,
	log: "...",
	lat: 0,
	lon: 0,
});

const delapre_position = [52.224723, -0.887954];

const locationHandler = function (position) {
	const { latitude, longitude } = position.coords;

	// const distance = getDistance(
	// 	delapre_position[0],
	// 	delapre_position[1],
	// 	latitude,
	// 	longitude
	// );

	user_data.lat = latitude;
	user_data.lon = longitude;
};

const isIOS = getIsIOS();
const isAndroid = getIsAndroid();
let testInterval = null;
let position_interval = null;

const getMapCenter = () => {
	if (user_data.lat == 0 && user_data.lon == 0) return delapre_position;
	return [user_data.lat, user_data.lon];
};

onNuxtReady(async () => {
	if (!process.client || !navigator.geolocation) return;

	navigator.geolocation.getCurrentPosition(locationHandler);
});

const zoom = ref(15);

const startCompass = function () {
	const testing = true;

	if (isIOS) {
		DeviceOrientationEvent.requestPermission()
			.then((response) => {
				if (response === "granted") {
					window.addEventListener("deviceorientation", handler, true);
					user_data.is_initiated = true;
				} else {
					user_data.error = "Compass permission not granted";
				}
			})
			.catch(() => {
				user_data.error = "Compass functionality not supported";
			});
	} else if (isAndroid) {
		window.addEventListener("deviceorientationabsolute", handler, true);
		user_data.is_initiated = true;
	} else if (testing) {
		testInterval = setInterval(rotate, 1000);
		user_data.is_initiated = true;
	}
};

const rotate = function () {
	user_data.deg = (user_data.deg + 5) % 360;
};

const handler = function (e) {
	user_data.deg = user_data.deg =
		e.webkitCompassHeading || Math.abs(e.alpha - 360);
};

const getMapBounds = () => {
	const user_pos_set = user_data.lat != 0 && user_data.lon != 0;

	const tree_pos = {
		lat: props.tree.lat,
		lon: props.tree.lon,
	};

	const user_pos = {
		lat: user_pos_set ? user_data.lat : tree_pos.lat,
		lon: user_pos_set ? user_data.lon : tree_pos.lon,
	};

	let top_left = [
		Math.max(user_pos.lat, tree_pos.lat),
		Math.max(user_pos.lon, tree_pos.lon),
	];

	const bottom_right = [
		Math.min(user_pos.lat, tree_pos.lat),
		Math.min(user_pos.lon, tree_pos.lon),
	];

	//force the markers to the botttom of the screen
	const height = bottom_right[0] - top_left[0];
	top_left[0] -= height * 2;

	return [top_left, bottom_right];
};

const updateMap = () => {
	map.value.leafletObject.fitBounds(getMapBounds());
};

onUnmounted(function () {
	window.removeEventListener("deviceorientation", handler, true);
	window.removeEventListener("deviceorientationabsolute", handler, true);
	clearInterval(testInterval);
	clearInterval(position_interval);

	user_data.is_initiated = false;
});
</script>

<template>
	<ClientOnly>
		<div class="w-full h-full bg-black relative">
			<LMap
				id="map"
				ref="map"
				:center="getMapCenter()"
				:bounds="getMapBounds()"
				:zoom="zoom"
				:v-if="user_data.lat != 0 && user_data.lon != 0"
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
				<LMarker
					:if="user_data.lat != 0 && user_data.lon != 0"
					:lat-lng="[user_data.lat, user_data.lon]"
				>
					<LIcon
						icon-url="/icons/user_icon.png"
						:icon-size="[35, 35]"
					/>
				</LMarker>
			</LMap>
			<div class="compass-container">
				<div class="compass-bg">
					<div class="compass">
						<div
							class="compass-circle"
							v-if="user_data.is_initiated"
							:style="{
								transform: `translate(-50%, -50%) rotate(${-user_data.deg}deg)`,
							}"
						>
							<div
								class="compass-arrow"
								:style="{
									transform: `translate(-50%, -50%) rotate(${calculateBearing(
										$store.state.latitude,
										$store.state.longitude,
										tree.lat,
										tree.lon
									)}deg)`,
								}"
							/>
						</div>
						<div v-else class="compass-blank">
							<button
								class="bg-transparent text-white font-semibold py-2 px-4 border border-white rounded"
								@click="startCompass"
							>
								Start compass
							</button>
						</div>
					</div>
					<div
						class="back-button"
						@click="router.push(back_link)"
					></div>
					<div
						class="debug-button"
						@click="router.push(debug_link)"
					></div>

					<div class="mt-4">
						<p
							class="text-center text-bold text-xl text-white"
							v-if="tree == null || $store.state.latitude == 0"
						>
							...
						</p>
						<p
							class="font-mont text-center text-bold text-xl text-white"
							v-else
						>
							{{
								getDistance(
									$store.state.latitude,
									$store.state.longitude,
									tree.lat,
									tree.lon
								)
							}}KM
							<span v-if="user_data.is_initiated">
								{{
									toOrdinal(
										calculateBearing(
											$store.state.latitude,
											$store.state.longitude,
											tree.lat,
											tree.lon
										)
									)
								}}
							</span>
						</p>
						<p class="font-mont text-center text-white">
							to {{ tree.title }}
							<span class="text-red-500">
								{{ user_data.error }}&nbsp;
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	</ClientOnly>
</template>

<style scoped>
.compass-container {
	width: 100% !important;
	display: flex;
	position: absolute;
	z-index: 20000;
	top: 0;
	left: 0;
	padding: 20px;
}

.compass-container .compass-bg {
	background-color: rgba(255, 122, 65, 0.9);
	padding: 20px;
	border-radius: 30px;
	margin: 0 auto;
	position: relative;
	width: 100%;
}

.compass-container .compass-bg .back-button,
.compass-container .compass-bg .debug-button {
	width: 30px;
	height: 30px;
	background-size: contain;
	background-repeat: no-repeat;
	position: absolute;
	top: 20px;
	cursor: pointer;
}

.compass-container .compass-bg .back-button {
	background-image: url(/icons/back-orange.png);
	left: 20px;
}

.compass-container .compass-bg .debug-button {
	background-image: url(/icons/debug.png);
	right: 20px;
	opacity: 0.25;
}

.compass {
	width: 200px;
	height: 200px;
	overflow: hidden;
	border-radius: 50%;
	margin: auto;
	position: relative;
}

.compass .compass-circle,
.compass .compass-arrow,
.compass .compass-blank {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	/* transition: transform 0.1s ease-out; */
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
}

.compass .compass-circle {
	background-image: url(/icons/compass-orange.png);
}

.compass .compass-blank {
	background-image: url(/icons/compass-blank.png);
	align-items: center;
	justify-content: center;
	display: flex;
}

.compass .compass-arrow {
	background-image: url(/icons/arrow-orange.png);
}
</style>
