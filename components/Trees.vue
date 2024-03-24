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

const onSelectTree = (tree_id) => {
	state.tree_id = tree_id;
};
</script>

<template>
	<section class="flex flex-col w-full h-full" v-show="state.tree_id == -1">
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
		<div class="shrink h-full overflow-y-auto">
			<TreesGrid
				v-on:select-tree="onSelectTree"
				v-if="state.screen_index == 0"
			/>
			<TreesNear v-if="state.screen_index == 1" />
			<TreesMap v-if="state.screen_index == 2" />
		</div>
	</section>
	<section class="flex flex-col w-full h-full" v-if="state.tree_id != -1">
		<div class="border-b border-gray-200 dark:border-gray-700 shrink-0">
			<ul
				class="flex flex-wrap gap-2 text-sm font-medium text-center text-gray-500 p-3"
			>
				<button
					class="bg-slate-100 text-slate-900 py-2 px-4 no-underline rounded-full bg-blue font-bold text-sm btn-primary"
					v-on:click="state.tree_id = -1"
				>
					<img
						src="/icons/20dp/black/back.svg"
						class="w-4 h-4 inline-block mb-1"
					/>
				</button>
			</ul>
		</div>
		<Tree :tree_id="state.tree_id"></Tree>
	</section>
</template>
