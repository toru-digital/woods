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

<style>
html,
body,
#__nuxt,
#__layout {
	height: 100% !important;
	width: 100% !important;
	background: #fafafa;
}
</style>

<template>
	<div class="w-full h-full flex flex-col">
		<section class="shrink grow overflow-y-auto">
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
