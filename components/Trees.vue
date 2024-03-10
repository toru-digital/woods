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
			<Card
				v-for="tree in trees"
				:image="tree.img"
				:title="tree.title"
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

<!-- <template>
  <ul>
    <li>
      <h3>{{ tree.title }}</h3>
      <a
        
        
      >
        View on 
      </a>
      <br />
      
      <br />
      <img :src="tree.img" />
    </li>
  </ul>
</template> -->
