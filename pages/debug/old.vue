<script setup>
import { getTrees, getTreeById } from "../data/trees.js";
import { getCompassAngle } from "../data/utils.js";
const props = defineProps({});
const selected_tree_id = ref(0);

const selected_tree = ref(null);

watch(selected_tree_id, (new_value) => {
	if (new_value != 0) {
		selected_tree.value = getTreeById(new_value);
	} else {
		selected_tree.value = null;
	}
});
</script>

<template>
	<section class="flex flex-col w-full h-full">
		<div class="w-full h-full flex flex-col justify-between bg-blaze-200">
			<div class="w-full h-16 grid place-items-center bg-forest-900">
				<select
					v-model="selected_tree_id"
					class="appearance-none !outline-none bg-transparent w-full h-full text-left m-0 p-0 px-8 border-0"
				>
					<option value="0" disabled selected>Select a tree</option>
					<option
						v-for="tree in getTrees()"
						:key="tree.inaturalist_observation_id"
						:value="tree.inaturalist_observation_id"
					>
						{{ tree.title }}
					</option>
				</select>
			</div>
			<div class="flex flex-1">
				<div
					v-if="selected_tree != null"
					class="w-full h-full grid place-items-center"
				>
					<img
						:style="
							'transform: rotate(' +
							getCompassAngle(
								52.2082674234163,
								-0.8967455461123081,
								selected_tree.lat,
								selected_tree.lon
							) +
							'deg)'
						"
						:src="'/icons/arrow.svg'"
					/>
				</div>
			</div>
			<div>
				<div class="w-full h-32 text-white">
					<p class="w-full text-center">1 meter right</p>
					<div
						class="w-full h-full flex flex-row justify-between flex-1"
					>
						<div class="w-1/2 h-full grid place-items-center">
							<div
								class="w-16 aspect-square rounded-full bg-red-500 block grid place-items-center"
							></div>
						</div>
						<div class="w-1/2 h-full grid place-items-center">
							<div
								class="w-16 aspect-square rounded-full bg-red-500 block grid place-items-center"
							></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
