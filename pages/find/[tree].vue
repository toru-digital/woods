<template>
	<section class="flex flex-col w-full h-full flex-col">
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
			<div class="w-full h-32 text-white flex flex-col">
				<p class="w-full text-center">
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
				<div
					class="w-full flex flex-row justify-between flex-1 grid grid-cols-2"
				>
					<div class="w-full h-full grid place-items-center">
						<div
							class="w-16 aspect-square rounded-full bg-red-500 block grid place-items-center"
						></div>
					</div>
					<div class="w-full h-full grid place-items-center">
						<div
							class="w-16 aspect-square rounded-full bg-red-500 block grid place-items-center"
						></div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { getTreeById } from "../data/trees.js";
import { calculateBearing, getDistance } from "../data/utils.js";

const router = useRouter();

const selected_tree = ref(null);

onMounted(function () {
	selected_tree.value = getTreeById(route.params.tree);

	if (selected_tree.value == null) {
		router.push("/trees");
	}
});
</script>
