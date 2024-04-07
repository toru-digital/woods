<script lang="ts" setup>
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
	<div class="w-full h-full flex flex-col">
		<Sensors />
		<section class="shrink grow overflow-y-auto">
			<Home v-if="state.screen_index == 0" />
			<Trees v-if="state.screen_index == 1" />
			<Quest v-if="state.screen_index == 2" />
			<Debug v-if="state.screen_index == -1" />
		</section>
		<section class="flex justify-between shrink-0 bg-forest-900">
			<MenuCard
				:title="screen.title"
				:icon="screen.icon"
				v-for="(screen, index) in screens"
				@click="state.screen_index = index"
				@dblclick="state.screen_index = -1"
				:active="index === state.screen_index"
				:key="screen.title"
			/>
		</section>
	</div>
</template>
