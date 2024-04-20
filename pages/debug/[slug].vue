<template>
	<section class="flex flex-col w-full h-full flex-col">
		<div
			v-if="selected_tree == null"
			class="w-full h-16 grid place-items-center"
		>
			<p class="w-full p-8 text-lg">...loading</p>
		</div>
		<div v-else>
			<div class="w-full h-16 grid place-items-center">
				<p class="w-full p-8 text-lg">
					Debug {{ selected_tree ? selected_tree.title : "" }}
				</p>
			</div>
		</div>
	</section>
</template>

<script setup>
import { getTreeBySlug } from "../data/trees.js";

const router = useRouter();
const route = useRoute();

const selected_tree = ref(null);

onMounted(function () {
	selected_tree.value = getTreeBySlug(route.params?.slug);

	if (selected_tree.value == null) {
		router.push("/trees");
	}
});
</script>
