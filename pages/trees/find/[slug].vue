<template>
	<!-- <TreeFinder
		v-if="tree != null"
		:tree="tree"
		:back_link="'/trees/' + tree.slug"
		:debug_link="'/debug/' + tree.slug"
	/> -->
	HI
</template>

<script setup>
const route = useRoute();
const slug = route.params?.slug;
const { data: tree } = await useFetch(`/api/tree/${slug}`, {
	key: slug,
});
</script>
