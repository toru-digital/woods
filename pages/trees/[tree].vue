<template>
	<section>
		<div v-if="selected_tree == null" class="p-4">...</div>
		<div v-else>
			<TreeBanner :image="selected_tree.img" />
			<TreeTitle :title="selected_tree.title" />

			<div class="p-3 mt-2">
				<h1
					class="font-sig text-forest-900 text-lg uppercase leading-9"
				>
					Description
				</h1>
				<!-- <p v-for="copy in selected_tree.copy" class="font-mont text-sm">
					{{ copy }}
				</p> -->
			</div>
			<img src="/images/temp-tree-2.jpg" />
			<div class="p-3 mt-2">
				<h1
					class="font-sig text-forest-900 text-lg uppercase leading-9 mt-4"
				>
					Leaf
				</h1>
			</div>

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
