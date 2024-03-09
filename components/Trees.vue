<script setup>
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
      <a
        :href="
          'https://www.inaturalist.org/observations/' +
          tree.inaturalist_observation_id
        "
      >
        {{ tree.title }}
      </a>
      <img :src="tree.img" />
    </li>
  </ul>
</template>
