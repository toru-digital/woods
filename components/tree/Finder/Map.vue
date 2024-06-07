<script setup>
import { reactive, ref } from "vue";

const props = defineProps({
	tree: {
		required: true,
	},
});

const map = ref(null);
const delapre_position = [52.224723, -0.887954];
const user_data = reactive({
	lat: 0,
	lon: 0,
});

const locationHandler = function (position) {
	const { latitude, longitude } = position.coords;

	const distance = getDistance(
		props.tree.lat,
		props.tree.lon,
		latitude,
		longitude
	);

	user_data.lat = latitude;
	user_data.lon = longitude;
};

const tick = () => {
	navigator.geolocation.getCurrentPosition(locationHandler);
};

onNuxtReady(async () => {
	if (!process.client || !navigator.geolocation) return;
	position_interval = setInterval(tick, 1000);
	tick();
});
</script>
<template>
	<LMap
		id="map"
		ref="map"
		:center="[tree.lat, tree.lon]"
		:zoom="15"
		:options="{ zoomControl: false, attributionControl: false }"
	>
		<LTileLayer
			url="https://d1up0v8yxutj1v.cloudfront.net/{z}/{x}/{y}.png"
			attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
			layer-type="base"
			:max-zoom="18"
			name="OpenStreetMap"
		/>
		<LMarker :lat-lng="[tree.lat, tree.lon]">
			<LIcon icon-url="/icons/tree_icon.png" :icon-size="[35, 35]" />
			<LPopup>
				<div
					class="cursor-pointer text-lg font-bold text-mont"
					v-on:click="$emit('select-tree', tree.slug)"
				>
					<img
						:src="tree.images[0].src"
						class="w-32 h-32 object-cover rounded-lg"
					/>
					{{ tree.title }}
				</div>
			</LPopup>
		</LMarker>
		<LMarker
			:if="user_data.lat != 0 && user_data.lon != 0"
			:lat-lng="[user_data.lat, user_data.lon]"
		>
			<LIcon icon-url="/icons/user_icon.png" :icon-size="[35, 35]" />
		</LMarker>
	</LMap>
</template>
