<template>
	<section>
		<div v-if="tree == undefined" class="p-4">...</div>
		<div v-else>
			<TreeBanner
				:images="tree.images"
				:title="tree.title"
				:subtitle="tree.scientific_name"
				:find_route="'/trees/find/' + tree.slug"
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
