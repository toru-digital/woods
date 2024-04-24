<template>
	<section>
		<div v-if="selected_tree == null" class="p-4">{{ tree_slug }}</div>
		<div v-else>
			<TreeBanner
				:image="selected_tree.img"
				:title="tree_slug"
				:subtitle="selected_tree.scientific_name"
				:find_route="'/find/' + selected_tree.slug"
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
const route = useRoute();
const slug = route.params.slug;
const { data: selected_tree } = await useFetch(`/api/tree/${slug}`, {
	key: slug,
});

// onMounted(function () {
// 	selected_tree.value = getTreeBySlug(route.params.slug);

// 	if (selected_tree.value == null) {
// 		router.push("/trees");
// 	}
// });
</script>
