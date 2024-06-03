<script setup>
const props = defineProps({
	image: {
		type: String,
		required: true,
	},
});
</script>
<template>
	<div>
		<div class="slider">
			<div class="slides">
				<div id="slide-1">1</div>
				<div id="slide-2">2</div>
				<div id="slide-3">3</div>
				<div id="slide-4">4</div>
				<div id="slide-5">5</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
* {
	box-sizing: border-box;
}

.slider {
	width: 100%;
	text-align: center;
	overflow: hidden;
}

.slides {
	display: flex;
	background-color: #0a2d2f;

	overflow-x: auto;
	scroll-snap-type: x mandatory;

	scroll-behavior: smooth;
	-webkit-overflow-scrolling: touch;
}

.slides > div {
	scroll-snap-align: start;
	flex-shrink: 0;
	width: 100%;
	height: 300px;
	background: #eee;
	transform-origin: center center;
	transform: scale(1);
	transition: transform 0.5s;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 100px;
}

img {
	object-fit: cover;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
</style>
