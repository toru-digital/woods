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
  <ul>
    <li v-for="tree in trees" :key="tree.inaturalist_observation_id">
      <h3>{{ tree.title }}</h3>
      <a
        target="_blank"
        :href="
          'https://www.inaturalist.org/observations/' +
          tree.inaturalist_observation_id
        "
      >
        View on iNaturalist
      </a>
      <br />
      <a href="geo:{{tree.lat}},{{tree.lon}}" target="_blank">View on Map</a>
      <br />
      <img :src="tree.img" />
    </li>
  </ul>
</template>
