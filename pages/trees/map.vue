<template>
	<TreesMap v-on:select-tree="onSelectTree" />
</template>
<script setup>
import { useStore } from "vuex";
const router = useRouter();

definePageMeta({
	layout: "trees",
});

const onSelectTree = function (tree_slug) {
	router.push("/trees/" + tree_slug);
};
</script>
