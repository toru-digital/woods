<template>
	<section>
		<div v-if="selected_tree == null" class="p-4">...</div>
		<div v-else>
			<TreeBanner
				:image="selected_tree.img"
				:title="selected_tree.title"
				:subtitle="selected_tree.scientific_name"
				:find_route="
					'/find/' + selected_tree.inaturalist_observation_id
				"
			/>

			<div v-for="(content, i) in selected_tree.content" :key="i">
				<TreeText
					v-if="content.type == 'text'"
					:title="content.title"
					:text="content.content"
				/>
				<TreeImage
					v-if="content.type == 'image'"
					:title="content.title"
					:source="content.source"
				/>
			</div>
		</div>
	</section>
</template>

<script setup>
const store = useStore();
const route = useRoute();
import { useStore } from "vuex";

import { getTreeBySlug } from "../data/trees.js";
const selected_tree = ref(null);

onMounted(function () {
	selected_tree.value = getTreeBySlug(route.params.slug);

	if (selected_tree.value == null) {
		router.push("/trees");
	}
});
</script>
