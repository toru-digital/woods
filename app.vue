<script setup>
import { reactive } from "vue";

const screens = [
	{ title: "Home", icon: "Home.svg" },
	{ title: "Trees", icon: "Trees.svg" },
	{ title: "Quest", icon: "Quest.svg" },
];

const state = reactive({
	screen_index: 0,
});
</script>

<template>
	<div class="w-full h-screen flex flex-col">
		<section class="shrink h-full overflow-y-auto">
			<Home v-if="state.screen_index == 0" />
			<Trees v-if="state.screen_index == 1" />
			<Quest v-if="state.screen_index == 2" />
		</section>
		<section class="flex justify-between shrink-0">
			<MenuCard
				:title="screen.title"
				:icon="screen.icon"
				v-for="(screen, index) in screens"
				@click="state.screen_index = index"
				:active="index === state.screen_index"
				:key="screen.title"
			/>
		</section>
	</div>
</template>
