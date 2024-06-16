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
				<div class="tick-icon"></div>
				<p class="font-bold">You found the {{ tree.title }}!</p>
				<p>tree info</p>
				<p>etc etc</p>
				<p>etc etc</p>
				<div
					@click="() => router.push(more_link)"
					class="secondary-button mt-4"
				>
					Read More
				</div>
				<div
					@click="() => router.push(back_link)"
					class="secondary-button mt-3"
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
	bottom: 0;
	left: 0;
	padding: 20px;
}

.display-container .display-bg {
	background-color: rgba(255, 255, 255, 0.57);
	padding: 55px 20px 20px 20px;
	border-radius: 30px;
	margin: 0 auto;
	position: relative;
	width: 100%;
	backdrop-filter: blur(10px);
}

.display-container .display-bg .tick-icon {
	width: 55px;
	height: 55px;
	background-size: contain;
	background-repeat: no-repeat;
	position: absolute;
	top: -20px;
	cursor: pointer;
	background-image: url(/icons/tick-orange.png);
	left: calc(50% - 27.5px);
}
</style>
