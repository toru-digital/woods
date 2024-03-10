<script setup>
const props = defineProps({
	image: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
		<article class="overflow-hidden rounded-lg shadow-lg">
			<a href="#">
				<img alt="Placeholder" class="block h-auto w-full" :src="image" />
			</a>

			<header
				class="flex items-center justify-between leading-tight p-2 md:p-4"
			>
				<h1 class="text-lg">{{ title }}</h1>
				<p class="text-grey-darker text-sm">...</p>
			</header>

			<footer class="flex items-center justify-between leading-none p-2 md:p-4">
				<a
					class="flex items-center no-underline hover:underline text-black"
					href="#"
				>
					<img
						alt="Placeholder"
						class="block rounded-full"
						src="https://picsum.photos/32/32/?random"
					/>
					<p class="ml-2 text-sm">...</p>
				</a>
				<a class="no-underline text-grey-darker hover:text-red-dark" href="#">
					<span class="hidden">Like</span>
					<i class="fa fa-heart"></i>
				</a>
			</footer>
		</article>
	</div>
</template>

<!-- <template>
  <ul>
    <li>
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
</template> -->
