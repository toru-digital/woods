<script setup>
definePageMeta({
	layout: "trees",
});

// import { useStore } from "vuex";
// const store = useStore();
// const router = useRouter();
// const onTreeClickedOn = function (tree) {
// 	store.commit(
// 		"setActiveInaturalistObservationId",
// 		tree.inaturalist_observation_id
// 	);
// 	router.push("/trees/" + tree.inaturalist_observation_id);
// };
</script>

<template>
	<section class="flex flex-col w-full h-full">
		<p>Trees!</p>
		<div class="shrink h-full overflow-y-auto"></div>
	</section>
</template>
