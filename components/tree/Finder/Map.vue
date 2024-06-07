<script setup>
import { reactive, ref } from "vue";
const delapre_position = [52.224723, -0.887954];
</script>

<template>
	<LMap
		id="map"
		ref="map"
		:center="getMapCenter()"
		:bounds="getMapBounds()"
		:zoom="zoom"
		:v-if="user_data.lat != 0 && user_data.lon != 0"
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
