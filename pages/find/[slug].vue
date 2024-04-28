<template>
	<section class="flex flex-col w-full h-full flex-col">
		<div v-if="tree == null" class="w-full h-16 grid place-items-center">
			<p class="w-full p-8 text-lg">...loading</p>
		</div>
		<div v-else>
			<div class="flex flex-1 overflow-hidden">
				<div
					v-if="tree != null"
					class="w-full h-full grid place-items-center"
				>
					<img
						class="flex-1 aspect-square min-w-[340px] w-[20vw]"
						:style="
							'transform: rotate(' +
							($store.state.orientation_absolute
								? $store.state.orientation_alpha -
								  calculateBearing(
										$store.state.latitude,
										$store.state.longitude,
										tree.lat,
										tree.lon
								  )
								: calculateBearing(
										$store.state.latitude,
										$store.state.longitude,
										tree.lat,
										tree.lon
								  ) - $store.state.orientation_alpha) +
							'deg)'
						"
						:src="'/icons/arrow.svg'"
					/>
				</div>
			</div>
			<div>
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
				<p class="text-center cursor-pointer mt-2 text-blue-500">
					<router-link :to="'/trees/' + tree.slug">
						Back
					</router-link>
					|
					<router-link :to="'/debug/' + tree.slug">
						debug
					</router-link>
				</p>
			</div>
		</div>
	</section>
</template>

<script setup>
const route = useRoute();
const slug = route.params?.slug;
const { data: tree } = await useFetch(`/api/tree/${slug}`, {
	key: slug,
});
</script>
