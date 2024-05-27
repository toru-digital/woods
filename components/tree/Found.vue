<script setup>
import { reactive, ref } from "vue";

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
</script>

<template>
	<div
		class="w-full h-full bg-black relative bg-cover bg-center"
		:style="'background-image:url(' + tree.img + ')'"
	>
		<div class="display-container">
			<div class="display-bg">
				<div class="tick-icon"></div>
				<p class="font-bold">You found the Tulip Tree!</p>
				<p>tree info</p>
				<p>etc etc</p>
				<p>etc etc</p>
				<div class="secondary-button mt-4">Read More</div>
				<div class="secondary-button mt-3">Back to Trees</div>
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
