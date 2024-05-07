<template>
	<div v-if="tree == null">...</div>
	<TreeFinder
		v-else
		:tree="tree"
		:back_link="'/trees/' + tree.slug"
		:debug_link="'/debug/' + tree.slug"
	/>
</template>

<script setup>
const route = useRoute();
const slug = route.params?.slug;
const { data: tree } = await useFetch(`/api/tree/${slug}`, {
	key: slug,
});
</script>
