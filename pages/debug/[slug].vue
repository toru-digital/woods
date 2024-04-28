<template>
	<section class="flex flex-col w-full h-full flex-col">
		<div
			v-if="selected_tree == null"
			class="w-full h-16 grid place-items-center"
		>
			<p class="w-full p-8 text-lg">...loading</p>
		</div>
		<div v-else>
			<div class="relative overflow-x-auto">
				<table
					class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
				>
					<tbody>
						<tr
							v-for="row in rows"
							:key="row.title"
							class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
						>
							<th
								scope="row"
								class="px-6 py-4 font-medium text-gray-900 dark:text-white"
							>
								{{ row.label }}
							</th>
							<td class="px-6 py-4">{{ row.value }}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</section>
</template>

<script setup>
import { getTreeBySlug } from "../data/trees.js";
import { useStore } from "vuex";
import { reactive } from "vue";

const router = useRouter();
const route = useRoute();
const store = useStore();

const selected_tree = ref(null);

const getRows = function () {
	if (selected_tree == undefined) return [];
	console.log("selected_tree", selected_tree, selected_tree);

	const bearing = calculateBearing(
		store.state.latitude,
		store.state.longitude,
		selected_tree.lat,
		selected_tree.lon
	);

	const bearing_difference = store.state.northern_axis - bearing;

	const distance_to_tree = getDistance(
		store.state.latitude,
		store.state.longitude,
		selected_tree.lat,
		selected_tree.lon
	);

	return [
		{
			label: "Title",
			value: selected_tree.title + "!!",
		},
		{
			label: "Slug",
			value: selected_tree.slug + "ewwe",
		},
		{
			label: "Tree Lat",
			value: selected_tree.lat,
		},
		{
			label: "Tree Lon",
			value: selected_tree.lon,
		},
		{
			label: "Your Latitude",
			value: store.state.latitude,
		},
		{
			label: "Your Longitude",
			value: store.state.longitude,
		},
		{
			label: "Northern Axis",
			value: store.state.northern_axis,
		},
		{
			label: "Your Bearing",
			value: bearing,
		},
		{
			label: "Northern - Your Bearing",
			value: bearing_difference,
		},
		{
			label: "Distance to Tree",
			value: distance_to_tree + " KM",
		},
		{
			label: "Last Permission Errror",
			value: store.state.setPermissionsLastError,
		},
	];
};

const rows = reactive(getRows());

onMounted(function () {
	selected_tree.value = getTreeBySlug(route.params?.slug);

	console.log(selected_tree.value);

	if (selected_tree.value == null) {
		router.push("/trees");
	}
});
</script>
