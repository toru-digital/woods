<template>
	<section class="flex flex-col w-full h-full flex-col">
		<div v-if="tree == null" class="w-full h-16 grid place-items-center">
			<p class="w-full p-8 text-lg">...loading</p>
		</div>
		<div v-else>
			<div class="w-full h-16 grid place-items-center">
				<p class="w-full p-8 text-lg">
					{{ tree ? tree.title : "" }}
				</p>
			</div>
			<div class="flex flex-1 overflow-hidden">
				<div
					v-if="tree != null"
					class="w-full h-full grid place-items-center"
				>
					<img
						class="flex-1 aspect-square min-w-[340px] w-[20vw]"
						:style="
							'transform: rotate(' +
							($store.state.orientation_alpha -
								calculateBearing(
									$store.state.latitude,
									$store.state.longitude,
									tree.lat,
									tree.lon
								)) +
							'deg)'
						"
						:src="'/icons/arrow.svg'"
					/>
				</div>
			</div>
			<div>
				<p>
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
					meters
				</p>
				<router-link
					:to="'/debug/' + tree.slug"
					class="cursor-pointer mt-2 text-blue-500"
				>
					debug
				</router-link>
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
