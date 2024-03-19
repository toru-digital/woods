<script setup>
import { ref } from "vue";
import { trees } from "../data/trees";

const zoom = ref(18);
</script>

<template>
	<div style="height: 100vh; width: 100vw">
		<LMap ref="map" :zoom="zoom" :center="[52.224723, -0.887954]">
			<LTileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
				layer-type="base"
				name="OpenStreetMap"
			/>
			<LMarker
				v-for="tree in trees"
				:key="tree.inaturalist_observation_id"
				:lat-lng="[tree.lat, tree.lon]"
			>
				<LTooltip direction="top">{{ tree.title }}!!</LTooltip>
			</LMarker>
		</LMap>
	</div>
</template>
