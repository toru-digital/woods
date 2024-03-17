<script setup>
import { reactive } from "vue";

const props = defineProps({});

const user_data = reactive({
	log: "...",
});

const isIOS =
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
	user_data.log = "START. ";
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
	console.log(e);
	user_data.log = "HANDLER! ";
	const compass_deg = e.webkitCompassHeading || Math.abs(e.alpha - 360);
	user_data.log = compass_deg;
	// compass = ;
	// compassCircle.style.transform = `translate(-50%, -50%) rotate(${-compass}deg)`;

	// // ±15 degree
	// if (
	// 	(pointDegree < Math.abs(compass) && pointDegree + 15 > Math.abs(compass)) ||
	// 	pointDegree > Math.abs(compass + 15) ||
	// 	pointDegree < Math.abs(compass)
	// ) {
	// 	myPoint.style.opacity = 0;
	// } else if (pointDegree) {
	// 	myPoint.style.opacity = 1;
	// }
};
</script>

<template>
	<div class="compass">
		<div class="arrow"></div>
		<div class="compass-circle"></div>
		<div class="my-point"></div>
	</div>
	<h2 class="text-center">log: {{ user_data.log }}</h2>
	<div class="flex justify-center mt-8">
		<button
			class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
			@click="startCompass"
		>
			Start compass
		</button>
	</div>
</template>

<style scoped>
.compass {
	position: relative;
	width: 320px;
	height: 320px;
	border-radius: 50%;
	box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
	margin: auto;
}

.compass > .arrow {
	position: absolute;
	width: 0;
	height: 0;
	top: -20px;
	left: 50%;
	transform: translateX(-50%);
	border-style: solid;
	border-width: 30px 20px 0 20px;
	border-color: red transparent transparent transparent;
	z-index: 1;
}

.compass > .compass-circle,
.compass > .my-point {
	position: absolute;
	width: 80%;
	height: 80%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	transition: transform 0.1s ease-out;
	background: url(https://cdn.onlinewebfonts.com/svg/img_467023.png) center
		no-repeat;
	background-size: contain;
}

.compass > .my-point {
	opacity: 0;
	width: 20%;
	height: 20%;
	background: rgb(8, 223, 69);
	border-radius: 50%;
	transition: opacity 0.5s ease-out;
}
</style>
