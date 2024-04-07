<template>
	<section>
		<div v-if="selected_tree == null" class="p-4">...</div>
		<div v-else>
			<div class="relative">
				<img src="/images/temp-tree-1.jpg" />
				<img
					src="/theme/title-block/top-left.png"
					class="absolute bottom-0 left-0"
				/>
				<img
					src="/theme/title-block/top-right.png"
					class="absolute bottom-0 right-0"
				/>
			</div>
			<div
				style="background-image: url(/theme/title-block/middle.png)"
				class="relative pb-8"
			>
				<img
					src="/theme/title-block/bottom.png"
					class="absolute bottom-0 w-full"
				/>
				<div class="relative p-3">
					<h1
						class="font-sig text-white text-3xl relative uppercase leading-9"
					>
						{{ selected_tree.title }}
					</h1>
				</div>
			</div>

			<div class="p-3 mt-2">
				<h1
					class="font-sig text-forest-900 text-lg uppercase leading-9"
				>
					Description
				</h1>
				<p class="font-mont text-sm">
					Common holly (Ilex aquifolium) is an evergreen tree native
					to Europe, North Africa, and Southwest Asia. It has glossy,
					spiny leaves and produces bright red berries in autumn.
					Commonly associated with Christmas decorations due to its
					red berries and glossy foliage. It holds symbolic importance
					in various cultural and religious traditions.
				</p>
			</div>
			<img src="/images/temp-tree-2.jpg" />
			<div class="p-3 mt-2">
				<p class="font-mont text-sm">
					Provides habitat and food for wildlife, with birds consuming
					its berries and using the dense foliage for shelter and
					nesting. Hardy and adaptable, growing in various soil types
					and tolerating different conditions, including urban
					environments. Propagated from seeds or cuttings.
					Historically used for woodwork, dye-making, and medicinal
					purposes (although mildly toxic if ingested in large
					quantities).
				</p>
				<h1
					class="font-sig text-forest-900 text-lg uppercase leading-9 mt-4"
				>
					Leaf
				</h1>
			</div>

			<img src="/images/temp-tree-3.jpg" />
			<p>...</p>
		</div>
	</section>
</template>

<script setup>
const store = useStore();
const route = useRoute();
import { useStore } from "vuex";

import { getTrees, getTreeById } from "../data/trees.js";
const selected_tree = ref(null);

onMounted(function () {
	selected_tree.value = getTreeById(route.params.tree);

	if (selected_tree.value == null) {
		router.push("/trees");
	}
});
</script>
