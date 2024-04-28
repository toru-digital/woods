<template>
	<section class="flex flex-col w-full h-full flex-col">
		<div
			v-if="selected_tree == null"
			class="w-full h-16 grid place-items-center"
		>
			<p class="w-full p-8 text-lg">...loading</p>
		</div>
		<div v-else>
			<div class="w-full h-16 grid place-items-center">
				<p class="w-full p-8 text-lg">
					{{ selected_tree ? selected_tree.title : "" }}
				</p>
			</div>
			<div class="flex flex-1 overflow-hidden">
				<div
					v-if="selected_tree != null"
					class="w-full h-full grid place-items-center"
				>
					<img
						class="flex-1 aspect-square min-w-[340px] w-[20vw]"
						:style="
							'transform: rotate(' +
							($store.state.northern_axis -
								calculateBearing(
									$store.state.latitude,
									$store.state.longitude,
									selected_tree.lat,
									selected_tree.lon
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
						selected_tree == null
							? "?"
							: getDistance(
									$store.state.latitude,
									$store.state.longitude,
									selected_tree.lat,
									selected_tree.lon
							  )
					}}
					meters
				</p>
				<router-link
					:to="'/debug/' + selected_tree.slug"
					class="cursor-pointer mt-2 text-blue-500"
				>
					debug
				</router-link>
			</div>
		</div>
	</section>
</template>

<script setup>
import { getTreeBySlug } from "../data/trees.js";

const router = useRouter();
const route = useRoute();

const selected_tree = ref(null);

onMounted(function () {
	selected_tree.value = getTreeBySlug(route.params?.slug);

	if (selected_tree.value == null) {
		router.push("/trees");
	}
});
</script>
