<template>
	<section>
		<div v-if="tree == null" class="p-4">{{ tree_slug }}</div>
		<div v-else>
			<TreeBanner
				:image="tree.img"
				:title="tree_slug"
				:subtitle="tree.scientific_name"
				:find_route="'/find/' + tree.slug"
			/>

			<div v-for="(content, i) in tree.content" :key="i">
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
const { data: tree } = await useFetch(`/api/tree/${slug}`, {
	key: slug,
});
</script>
