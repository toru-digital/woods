<template>
	<div
		class="bg-white w-full h-full overflow-y-scroll grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-4 px-4 py-6"
	>
		<TreesGridBlock
			v-for="tree in getTrees()"
			:image="tree.img"
			v-on:clickedon="onTreeClickedOn(tree)"
			:title="tree.title"
			:key="tree.inaturalist_observation_id"
		/>
	</div>
</template>

<script setup>
import { getTrees } from "../data/trees";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

const onTreeClickedOn = function (tree) {
	store.commit(
		"setActiveInaturalistObservationId",
		tree.inaturalist_observation_id
	);
	router.push("/trees/" + tree.inaturalist_observation_id);
};
</script>
