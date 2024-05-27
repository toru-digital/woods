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
				<h3>You found the Tulip Tree!</h3>
				<p>ekewje</p>
				<p>ekewje</p>
				<p>ekewje</p>
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
	padding: 20px;
	border-radius: 30px;
	margin: 0 auto;
	position: relative;
	width: 100%;
	backdrop-filter: blur(10px);
}
</style>
