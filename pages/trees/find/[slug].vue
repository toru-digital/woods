<template>
	<TreeFinder
		v-if="tree != null"
		:tree="tree"
		:back_link="'/trees/' + tree.slug"
		:found_link="'/trees/found/' + tree.slug"
		:debug_link="'/trees/debug/' + tree.slug"
	/>
</template>

<script setup>
definePageMeta({
	layout: "minimal",
});

const route = useRoute();
const slug = route.params?.slug;
const { data: tree } = await useFetch(`/api/tree/${slug}`, {
	key: slug,
});
</script>
