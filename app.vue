<script setup>
import { reactive } from "vue";

const screens = [{ title: "Home" }];

const state = reactive({
	screen_index: 0,
});
</script>

<template>
	<div class="w-full h-screen">
		<section class="z-0 relative">
			<Home v-if="state.screen_index == 0" />
		</section>
		<!-- <section id="bottom-navigation" class="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"> // if shown only tablet/mobile-->
		<section
			id="bottom-navigation"
			class="block fixed inset-x-0 bottom-0 z-10 bg-white shadow"
		>
			<div id="tabs" class="flex justify-between">
				<MenuCard
					:title="screen.title"
					v-for="(screen, index) in screens"
					@click="state.screen_index = index"
					:active="index === state.screen_index"
					:key="screen.title"
				/>
			</div>
		</section>
	</div>
</template>
