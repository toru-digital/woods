<script setup>
import { reactive } from "vue";

const props = defineProps({
	tree: {
		required: true,
	},
	distance: {
		required: true,
	},
});

const user_data = reactive({
	is_initiated: false,
});

onUnmounted(function () {
	user_data.is_initiated = false;
});
</script>
<template>
	<div class="compass-container">
		<div class="compass-bg">
			<div class="compass">
				<div
					class="compass-circle"
					v-if="user_data.is_initiated"
					:style="{
						transform: `translate(-50%, -50%) rotate(${-user_data.deg}deg)`,
					}"
				>
					<div
						class="compass-arrow"
						:style="{
							transform: `translate(-50%, -50%) rotate(${calculateBearing(
								user_data.lat,
								user_data.lon,
								tree.lat,
								tree.lon
							)}deg)`,
						}"
					/>
				</div>
				<div v-else class="compass-blank">
					<button
						class="bg-transparent text-white font-semibold py-2 px-4 border border-white rounded"
						@click="startCompass"
					>
						Start compass
					</button>
				</div>
			</div>
			<div class="back-button" @click="router.push(back_link)"></div>
			<div class="debug-button" @click="router.push(debug_link)"></div>

			<div class="mt-4">
				<p
					class="text-center text-bold text-xl text-white"
					v-if="tree == null || user_data.lat == 0"
				>
					...
				</p>
				<p
					class="font-mont text-center text-bold text-xl text-white"
					v-else
				>
					{{ props.distance < 0 ? "..." : props.distance + "km" }}
					<span v-if="user_data.is_initiated">
						{{
							toOrdinal(
								calculateBearing(
									user_data.lat,
									user_data.lon,
									tree.lat,
									tree.lon
								)
							)
						}}
					</span>
				</p>
				<p class="font-mont text-center text-white">
					to {{ tree.title }}
					<span class="text-red-500">
						{{ user_data.error }}&nbsp;
					</span>
				</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
.compass-container {
	width: 100% !important;
	display: flex;
	position: absolute;
	z-index: 20000;
	top: 0;
	left: 0;
	padding: 20px;
}

.compass-container .compass-bg {
	background-color: rgba(255, 122, 65, 0.97);
	padding: 20px;
	border-radius: 30px;
	margin: 0 auto;
	position: relative;
	width: 100%;
}

.compass-container .compass-bg .back-button,
.compass-container .compass-bg .debug-button {
	width: 30px;
	height: 30px;
	background-size: contain;
	background-repeat: no-repeat;
	position: absolute;
	top: 20px;
	cursor: pointer;
}

.compass-container .compass-bg .back-button {
	background-image: url(/icons/back-orange.png);
	left: 20px;
}

.compass-container .compass-bg .debug-button {
	background-image: url(/icons/debug.png);
	right: 20px;
	opacity: 0.25;
}

.compass {
	width: 200px;
	height: 200px;
	overflow: hidden;
	border-radius: 50%;
	margin: auto;
	position: relative;
}

.compass .compass-circle,
.compass .compass-arrow,
.compass .compass-blank {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	/* transition: transform 0.1s ease-out; */
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
}

.compass .compass-circle {
	background-image: url(/icons/compass-orange.png);
}

.compass .compass-blank {
	background-image: url(/icons/compass-blank.png);
	align-items: center;
	justify-content: center;
	display: flex;
}

.compass .compass-arrow {
	background-image: url(/icons/arrow-orange.png);
}
</style>
