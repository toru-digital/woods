<template>
	<TreeFound
		v-if="tree != null"
		:tree="tree"
		back_link="/trees"
		:more_link="'/trees/' + tree.slug"
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
