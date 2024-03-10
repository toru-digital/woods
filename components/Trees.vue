<script setup>
const prefix = "https://www.inaturalist.org/observations/";
const trees = [
	{
		title: "Mulberry Tree",
		inaturalist_observation_id: 140281316,
		lat: "52.224408",
		lon: "-0.890492",
		img: "https://static.inaturalist.org/photos/240105711/small.jpg",
	},
];
</script>

<template>
	<div class="container my-12 mx-auto px-4 md:px-12">
		<div class="flex flex-wrap -mx-1 lg:-mx-4">
			<Card v-for="tree in trees" :key="tree.inaturalist_observation_id" />
		</div>
	</div>
</template>
