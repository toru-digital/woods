<script setup>
import { reactive } from "vue";

const props = defineProps({
	tree: {
		required: true,
	},
});

const user_data = reactive({
	log: "...",
	deg: 0,
});

const isIOS = getIsIOS();
const isAndroid = getIsAndroid();

const startCompass = function () {
	user_data.log = "START";
	const testing = true;

	if (isIOS) {
		console.log("ONE");
		DeviceOrientationEvent.requestPermission()
			.then((response) => {
				if (response === "granted") {
					window.addEventListener("deviceorientation", handler, true);
				} else {
					alert("has to be allowed!");
				}
			})
			.catch(() => alert("not supported"));
	} else if (isAndroid) {
		console.log("TWO");
		window.addEventListener("deviceorientationabsolute", handler, true);
	} else if (testing) {
		console.log("THREE");
		setInterval(rotate, 1000);
	}
};

const rotate = function () {
	console.log("ROTATE");
	user_data.deg = (user_data.deg + 5) % 360;

	user_data.log = Math.round(user_data.deg) + "°";
};

const handler = function (e) {
	user_data.log = "@@@";
	user_data.deg = user_data.deg =
		e.webkitCompassHeading || Math.abs(e.alpha - 360);

	user_data.log = Math.round(user_data.deg) + "°";
};
</script>

<template>
	<div class="compass">
		<div
			class="compass-circle"
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
	</div>
	<div class="mt-10">
		<h2 class="text-center">log: {{ user_data.log }}</h2>
		<div class="flex justify-center mt-8">
			<button
				class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
				@click="startCompass"
			>
				Start compass
			</button>
		</div>
	</div>
	<p class="text-center text-bold text-2xl">
		{{
			tree == null
				? "?"
				: getDistance(
						$store.state.latitude,
						$store.state.longitude,
						tree.lat,
						tree.lon
				  )
		}}
		KM to {{ tree.title }}
	</p>
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
.compass .compass-arrow {
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

.compass .compass-arrow {
	background-image: url(/images/arrow.png);
}
</style>
