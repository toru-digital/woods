<script setup>
import { reactive } from "vue";

const trees = [
	{
		title: "Mulberry Tree",
		inaturalist_observation_id: 140281316,
		lat: "52.224408",
		lon: "-0.890492",
		img: "https://static.inaturalist.org/photos/240105711/small.jpg",
	},
];

const user_data = reactive({
	lat: 0,
	lon: 0,
	log: "...",
});

const onReceiveLocation = (position) => {
	user_data.log += "callReceived. ";
	user_data.lat = position.coords.latitude;
	user_data.lon = position.coords.longitude;
};

const onLocationError = (err) => {
	user_data.log += `ERROR(${err.code}): ${err.message}`;
};

const updateMyPosition = function () {
	user_data.log += "updateMyPosition. ";
	if (!process.client || !navigator.geolocation) return;
	user_data.log += "callMade. ";
	navigator.geolocation.getCurrentPosition(onReceiveLocation, onLocationError);
};

const deg2rad = (degrees) => {
	var pi = Math.PI;
	return degrees * (pi / 180);
};

const getDistance = (lat1, lon1, lat2, lon2) => {
	if (lat2 == 0 && lon2 == 0) return "...";

	const R = 6371; // Radius of the earth in km
	const dLat = deg2rad(lat2 - lat1); // deg2rad below
	const dLon = deg2rad(lon2 - lon1);
	const a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(deg2rad(lat1)) *
			Math.cos(deg2rad(lat2)) *
			Math.sin(dLon / 2) *
			Math.sin(dLon / 2);
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	const d = R * c; // Distance in km
	return d.toFixed(2) + " km";
};

const getUserPosition = () => {
	if (user_data.lat == 0 && user_data.lon == 0) return "...";
	return user_data.lat + ", " + user_data.lon;
};
</script>

<template>
	<div class="container my-12 mx-auto px-4 md:px-12">
		<button
			class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
			@click="
				user_data.log = 'CLICK. ';
				updateMyPosition();
			"
		>
			Update My Position
		</button>
		<h2>Your position: {{ getUserPosition() }}</h2>
		<h2>log: {{ user_data.log }}</h2>
	</div>
	<div class="container my-12 mx-auto px-4 md:px-12">
		<div class="flex flex-wrap -mx-1 lg:-mx-4">
			<Card
				v-for="tree in trees"
				:image="tree.img"
				:title="tree.title"
				:meta_1="getDistance(tree.lat, tree.lon, user_data.lat, user_data.lon)"
				:key="tree.inaturalist_observation_id"
			>
				<a
					target="_blank"
					:href="
						'https://www.inaturalist.org/observations/' +
						tree.inaturalist_observation_id
					"
					class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
				>
					iNaturalist </a
				><a
					class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
					:href="'geo:' + tree.lat + ',' + tree.lon"
					target="_blank"
					>Geo</a
				><a
					class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
					:href="
						'http://maps.apple.com/?ll=' +
						tree.lat +
						',' +
						tree.lon +
						'&z=20&q=' +
						tree.title
					"
					target="_blank"
					>Apple</a
				>
			</Card>
		</div>
	</div>
</template>
