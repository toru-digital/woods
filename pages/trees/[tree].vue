<template>
	<section>
		<div v-if="selected_tree == null" class="p-4">...</div>
		<div v-else>
			<div class="relative">
				<img src="/images/temp-tree-1.jpg" />
				<img
					src="/theme/title-block/top-left.png"
					class="absolute bottom-0 left-0"
				/>
				<img
					src="/theme/title-block/top-right.png"
					class="absolute bottom-0 right-0"
				/>
			</div>
			<div
				style="background-image: url(/theme/title-block/middle.png)"
				class="relative pb-8"
			>
				<img
					src="/theme/title-block/bottom.png"
					class="absolute bottom-0 w-full"
				/>
				<div class="relative">
					<h1>jji{{ selected_tree.title }}</h1>
					<h1>jji{{ selected_tree.title }}</h1>
					<h1>jji{{ selected_tree.title }}</h1>
				</div>
			</div>

			<br />
			<p>...</p>
			<img src="/images/temp-tree-2.jpg" />
			<p>...</p>
			<img src="/images/temp-tree-3.jpg" />
			<p>...</p>
		</div>
	</section>
</template>

<script setup>
const store = useStore();
const route = useRoute();
import { useStore } from "vuex";

import { getTrees, getTreeById } from "../data/trees.js";
const selected_tree = ref(null);

onMounted(function () {
	selected_tree.value = getTreeById(route.params.tree);

	if (selected_tree.value == null) {
		router.push("/trees");
	}
});
</script>
