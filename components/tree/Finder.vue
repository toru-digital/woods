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
	compass_style: "",
});

const isIOS =
	navigator != null &&
	navigator.userAgent != null &&
	navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
	navigator.userAgent.match(/AppleWebKit/);

let pointDegree;

const calcDegreeToPoint = function (latitude, longitude) {
	// Qibla geolocation
	const point = {
		lat: 21.422487,
		lng: 39.826206,
	};

	const phiK = (point.lat * Math.PI) / 180.0;
	const lambdaK = (point.lng * Math.PI) / 180.0;
	const phi = (latitude * Math.PI) / 180.0;
	const lambda = (longitude * Math.PI) / 180.0;
	const psi =
		(180.0 / Math.PI) *
		Math.atan2(
			Math.sin(lambdaK - lambda),
			Math.cos(phi) * Math.tan(phiK) -
				Math.sin(phi) * Math.cos(lambdaK - lambda)
		);
	return Math.round(psi);
};

const locationHandler = function (position) {
	console.log(position);
	const { latitude, longitude } = position.coords;
	pointDegree = calcDegreeToPoint(latitude, longitude);

	if (pointDegree < 0) {
		pointDegree = pointDegree + 360;
	}
};

onNuxtReady(async () => {
	if (!process.client || !navigator.geolocation) return;

	navigator.geolocation.getCurrentPosition(locationHandler);

	if (!isIOS) {
		window.addEventListener("deviceorientationabsolute", handler, true);
	}
});

const startCompass = function () {
	user_data.log = "START";
	if (!isIOS) return;

	DeviceOrientationEvent.requestPermission()
		.then((response) => {
			console.log(response);
			if (response === "granted") {
				window.addEventListener("deviceorientation", handler, true);
			} else {
				alert("has to be allowed!");
			}
		})
		.catch(() => alert("not supported"));
};

const handler = function (e) {
	user_data.log = "@@@";
	user_data.deg = user_data.deg =
		e.webkitCompassHeading || Math.abs(e.alpha - 360);

	user_data.log = user_data.deg + "@";
	user_data.compass_style = `transform: translate(-50%, -50%) rotate(${-user_data.deg}deg)`;
};
</script>

<template>
	<div class="compass">
		<div
			class="compass-circle"
			:style="{
				transform: `translate(-50%, -50%) rotate(${-user_data.deg}deg)`,
			}"
		/>
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
	background-image: url(/images/compass.jpg);
}

.compass .compass-arrow {
	background-image: url(/images/arrow.png);
}
</style>
