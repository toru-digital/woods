<script setup>
import { reactive, ref } from "vue";
import nuxtStorage from "nuxt-storage";

const router = useRouter();

const props = defineProps({
	tree: {
		required: true,
	},
	back_link: {
		required: true,
	},
	more_link: {
		required: true,
	},
});

const setFound = (tree) => {
	let found = nuxtStorage.localStorage.getData("found_trees");
	if (found == null) found = [];
	if (found.includes(tree.slug)) return;

	found.push(tree.slug);
	nuxtStorage.localStorage.setData("found_trees", found, 3650, "d");
};

onMounted(function () {
	setFound(props.tree);
});
</script>

<template>
	<div
		class="w-full h-full bg-black relative bg-cover bg-center"
		:style="'background-image:url(' + tree.images[0].src + ')'"
	>
		<div class="display-container">
			<div class="display-bg">
				<div class="text-white mb-1 mt-4">
					<p class="font-bold text-xl">
						You found the {{ tree.title }}!
					</p>
					<p>tree info</p>
					<p>etc etc</p>
					<p>etc etc</p>
				</div>
				<div
					@click="() => router.push(more_link)"
					class="secondary-button-white text-[#41C265] mt-4 w-full"
				>
					Read More
				</div>
				<div
					@click="() => router.push(back_link)"
					class="secondary-button-white-outline mt-3 w-full"
				>
					Back to Trees
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.display-container {
	width: 100% !important;
	display: flex;
	position: absolute;
	z-index: 20000;
	top: 0;
	left: 0;
	padding: 20px;
}

.display-container .display-bg {
	background-color: rgba(65, 194, 101, 0.98);
	padding: 20px;
	border-radius: 30px;
	margin: 0 auto;
	position: relative;
	width: 100%;
	min-height: 288px;

	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	flex-direction: column;
}
</style>
