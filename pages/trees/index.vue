<script setup>
import { reactive } from "vue";

const screens = [
	{ title: "Trees", icon: "trees.svg" },
	{ title: "Near Me", icon: "near.svg" },
	{ title: "Map", icon: "map.svg" },
];

const state = reactive({
	screen_index: 0,
	tree_id: -1,
});

definePageMeta({
	layout: "trees",
});

// import { useStore } from "vuex";
// const store = useStore();
// const router = useRouter();
// const onTreeClickedOn = function (tree) {
// 	store.commit(
// 		"setActiveInaturalistObservationId",
// 		tree.inaturalist_observation_id
// 	);
// 	router.push("/trees/" + tree.inaturalist_observation_id);
// };
</script>

<template>
	<section class="flex flex-col w-full h-full">
		<div class="border-b border-gray-200 dark:border-gray-700 shrink-0">
			<ul
				class="flex flex-wrap gap-2 text-sm font-medium text-center text-gray-500 p-3"
			>
				<TreesTab
					:title="screen.title"
					:icon="screen.icon"
					v-for="(screen, index) in screens"
					@click="state.screen_index = index"
					:active="index === state.screen_index"
					:key="screen.title"
				/>
			</ul>
		</div>
		<p>{{ state.screen_index }}!</p>
		<div class="shrink h-full overflow-y-auto"></div>
	</section>
</template>
