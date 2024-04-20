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
							class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
						>
							<th
								scope="row"
								class="px-6 py-4 font-medium text-gray-900 dark:text-white"
							>
								Title
							</th>
							<td class="px-6 py-4">{{ selected_tree.title }}</td>
						</tr>
						<tr
							class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
						>
							<th
								scope="row"
								class="px-6 py-4 font-medium text-gray-900 dark:text-white"
							>
								Slug
							</th>
							<td class="px-6 py-4">{{ selected_tree.slug }}</td>
						</tr>
						<tr
							class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
						>
							<th
								scope="row"
								class="px-6 py-4 font-medium text-gray-900 dark:text-white"
							>
								Tree Lat
							</th>
							<td class="px-6 py-4">{{ selected_tree.lat }}</td>
						</tr>
						<tr class="bg-white dark:bg-gray-800">
							<th
								scope="row"
								class="px-6 py-4 font-medium text-gray-900 dark:text-white"
							>
								Tree Lon
							</th>
							<td class="px-6 py-4">{{ selected_tree.lon }}</td>
						</tr>
						<tr class="bg-white dark:bg-gray-800">
							<th
								scope="row"
								class="px-6 py-4 font-medium text-gray-900 dark:text-white"
							>
								Northern Axis
							</th>
							<td class="px-6 py-4">
								{{ $store.state.northern_axis }}
							</td>
						</tr>

						<tr class="bg-white dark:bg-gray-800">
							<th
								scope="row"
								class="px-6 py-4 font-medium text-gray-900 dark:text-white"
							>
								Your Lat
							</th>
							<td class="px-6 py-4">
								{{ $store.state.latitude }}
							</td>
						</tr>

						<tr class="bg-white dark:bg-gray-800">
							<th
								scope="row"
								class="px-6 py-4 font-medium text-gray-900 dark:text-white"
							>
								Your Lon
							</th>
							<td class="px-6 py-4">
								{{ $store.state.longitude }}
							</td>
						</tr>

						<tr class="bg-white dark:bg-gray-800">
							<th
								scope="row"
								class="px-6 py-4 font-medium text-gray-900 dark:text-white"
							>
								Your Bearing
							</th>
							<td class="px-6 py-4">
								{{
									calculateBearing(
										$store.state.latitude,
										$store.state.longitude,
										selected_tree.lat,
										selected_tree.lon
									)
								}}
							</td>
						</tr>

						<tr class="bg-white dark:bg-gray-800">
							<th
								scope="row"
								class="px-6 py-4 font-medium text-gray-900 dark:text-white"
							>
								Northern Bearing - Your Bearing
							</th>
							<td class="px-6 py-4">
								{{
									$store.state.northern_axis -
									calculateBearing(
										$store.state.latitude,
										$store.state.longitude,
										selected_tree.lat,
										selected_tree.lon
									)
								}}
							</td>
						</tr>

						<tr class="bg-white dark:bg-gray-800">
							<th
								scope="row"
								class="px-6 py-4 font-medium text-gray-900 dark:text-white"
							>
								Distance to Tree
							</th>
							<td class="px-6 py-4">
								{{
									getDistance(
										$store.state.latitude,
										$store.state.longitude,
										selected_tree.lat,
										selected_tree.lon
									)
								}}
								KM
							</td>
						</tr>

						<tr class="bg-white dark:bg-gray-800">
							<th
								scope="row"
								class="px-6 py-4 font-medium text-gray-900 dark:text-white"
							>
								Last Permission Error
							</th>
							<td class="px-6 py-4">
								{{ $store.state.setPermissionsLastError }}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</section>
</template>

<script setup>
import { getTreeBySlug } from "../data/trees.js";
import { calculateBearing, getDistance } from "../data/utils.js";

const router = useRouter();
const route = useRoute();

const selected_tree = ref(null);

onMounted(function () {
	selected_tree.value = getTreeBySlug(route.params?.slug);

	if (selected_tree.value == null) {
		router.push("/trees");
	}
});
</script>
