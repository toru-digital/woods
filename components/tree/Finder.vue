<script setup>
import { reactive } from "vue";

const props = defineProps({
	tree: {
		required: true,
	},
});

const user_data = reactive({
	error: "",
	deg: 0,
	is_initiated: false,
});

const isIOS = getIsIOS();
const isAndroid = getIsAndroid();
let testInterval = null;

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

onUnmounted(function () {
	window.removeEventListener("deviceorientation", handler, true);
	window.removeEventListener("deviceorientationabsolute", handler, true);
	clearInterval(testInterval);
	user_data.is_initiated = false;
});
</script>

<template>
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
				class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
				@click="startCompass"
			>
				Start compass
			</button>
		</div>
	</div>
	<div class="mt-6">
		<p
			class="text-center text-bold text-2xl text-slate-300"
			v-if="tree == null || $store.state.latitude == 0"
		>
			...
		</p>
		<p class="text-center text-bold text-2xl" v-else>
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
			to {{ tree.title }}
		</p>

		<p class="text-center text-red-500">{{ user_data.error }}&nbsp;</p>
	</div>
</template>

<style scoped>
.compass {
	position: relative;
	width: 320px;
	height: 320px;
	border-radius: 50%;
	margin: auto;
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
	transition: transform 0.1s ease-out;
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
}

.compass .compass-circle {
	background-image: url(/images/compass.png);
}

.compass .compass-blank {
	background-image: url(/images/compass-blank.png);
	align-items: center;
	justify-content: center;
	display: flex;
}

.compass .compass-arrow {
	background-image: url(/images/arrow.png);
}
</style>
