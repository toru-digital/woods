<script setup>
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

definePageMeta({
	layout: "trees",
});

const onSelectTree = function (tree_slug) {
	router.push("/trees/" + tree_slug);
};
</script>

<template>
	<section class="flex flex-col w-full h-full">
		<div class="shrink h-full overflow-y-auto">
			<TreesGrid v-on:select-tree="onSelectTree" />
		</div>
	</section>
</template>
