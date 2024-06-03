<script setup>
const props = defineProps({
	images: {
		type: Array,
		required: true,
	},
});
</script>
<template>
	<div>
		<div class="slider">
			<div class="slides">
				<div
					class="bg-forest-900 bg-contain bg-center realtive bg-no-repeat"
					:style="{ backgroundImage: `url(${image.src})` }"
					v-for="(image, index) in images"
					:key="index"
				>
					<div
						class="absolute w-full bottom-4 left-0 flex flex-row-reverse content-center"
					>
						<div
							class="bg-forest-900 rounded-full text-white px-2 py-0 mr-1"
						>
							{{ index + 1 }}/{{ images.length }}
						</div>
						<div
							v-for="(tag, index) in image.tags"
							:key="index + 'tag'"
							class="bg-forest-900 rounded-full text-white px-2 py-0 mr-1"
						>
							{{ tag }}
						</div>
					</div>
				</div>
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
	height: 400px;
	transform-origin: center center;
	transform: scale(1);
	transition: transform 0.5s;
	position: relative;

	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
}

.slides::-webkit-scrollbar {
	display: none;
}
</style>
