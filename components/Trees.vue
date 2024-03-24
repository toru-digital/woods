<script setup>
import { reactive } from "vue";

const screens = [
	{ title: "Trees", icon: "trees.svg" },
	{ title: "Near Me", icon: "near.svg" },
	{ title: "Map", icon: "map.svg" },
];

const state = reactive({
	screen_index: 0,
});
</script>

<template>
	<div class="border-b border-gray-200 dark:border-gray-700">
		<ul
			class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400"
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
	<TreesGrid v-if="state.screen_index == 0" />
	<TreesMap v-if="state.screen_index == 1" />
	<TreesNear v-if="state.screen_index == 2" />
</template>
