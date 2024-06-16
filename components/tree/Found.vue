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
				<div class="back-button" @click="$emit('backClick')"></div>
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
	top: 0;
	left: 0;
	padding: 20px;
}

.display-container .display-bg {
	background-color: rgba(255, 122, 65, 0.97);
	padding: 40px 20px 20px 20px;
	border-radius: 30px;
	margin: 0 auto;
	position: relative;
	width: 100%;
	min-height: 288px;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

.display-container .display-bg .back-button {
	width: 30px;
	height: 30px;
	background-size: contain;
	background-repeat: no-repeat;
	position: absolute;
	top: 20px;
	left: 20px;
	cursor: pointer;
	background-image: url(/icons/back-orange.png);
}
</style>
