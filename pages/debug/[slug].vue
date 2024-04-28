<template>
	<section class="flex flex-col w-full h-full flex-col">
		<div>
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
import { useStore } from "vuex";

const route = useRoute();
const store = useStore();
const slug = route.params?.slug;
const { data: tree } = await useFetch(`/api/tree/${slug}`, {
	key: slug,
});

const getRows = function () {
	console.log("tree");
	return [];
	const bearing = calculateBearing(
		store.state.latitude,
		store.state.longitude,
		tree.lat,
		tree.lon
	);

	const bearing_difference = store.state.northern_axis - bearing;

	const distance_to_tree = getDistance(
		store.state.latitude,
		store.state.longitude,
		tree.lat,
		tree.lon
	);

	return [
		{
			label: "Title",
			value: tree.title + "!!",
		},
		{
			label: "Slug",
			value: tree.slug + "ewwe",
		},
		{
			label: "Tree Lat",
			value: tree.lat,
		},
		{
			label: "Tree Lon",
			value: tree.lon,
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
</script>
