<template>
	<section class="flex flex-col w-full h-full flex-col">
		<div>
			<div class="relative overflow-x-auto">
				<TreesCompass />
				<table class="debug-table">
					<tbody>
						<tr class="debug-tr">
							<th class="debug-th" scope="row">title</th>
							<td class="debug-td">{{ tree.title }}</td>
						</tr>
						<tr class="debug-tr">
							<th class="debug-th" scope="row">slug</th>
							<td class="debug-td">{{ tree.slug }}</td>
						</tr>
						<tr class="debug-tr">
							<th class="debug-th" scope="row">tree latitude</th>
							<td class="debug-td">{{ tree.lat }}</td>
						</tr>
						<tr class="debug-tr">
							<th class="debug-th" scope="row">tree longitude</th>
							<td class="debug-td">{{ tree.lon }}</td>
						</tr>
						<tr class="debug-tr">
							<th class="debug-th" scope="row">your latitude</th>
							<td class="debug-td">
								{{ $store.state.latitude }}
							</td>
						</tr>
						<tr class="debug-tr">
							<th class="debug-th" scope="row">your longitude</th>
							<td class="debug-td">
								{{ $store.state.longitude }}
							</td>
						</tr>
						<tr class="debug-tr">
							<th class="debug-th" scope="row">
								Orientation Alpha
							</th>
							<td class="debug-td">
								{{ $store.state.orientation_alpha }}
							</td>
						</tr>
						<tr class="debug-tr">
							<th class="debug-th" scope="row">
								Orientation Absolute
							</th>
							<td class="debug-td">
								{{ $store.state.orientation_absolute }}
							</td>
						</tr>
						<tr class="debug-tr">
							<th class="debug-th" scope="row">Your Bearing</th>
							<td class="debug-td">
								{{
									calculateBearing(
										store.state.latitude,
										store.state.longitude,
										tree.lat,
										tree.lon
									)
								}}
							</td>
						</tr>
						<tr class="debug-tr">
							<th class="debug-th" scope="row">
								Alpha - Your Bearing
							</th>
							<td class="debug-td">
								{{
									$store.state.orientation_alpha -
									calculateBearing(
										store.state.latitude,
										store.state.longitude,
										tree.lat,
										tree.lon
									)
								}}
							</td>
						</tr>
						<tr class="debug-tr">
							<th class="debug-th" scope="row">
								Distance to Tree
							</th>
							<td class="debug-td">
								{{
									getDistance(
										$store.state.latitude,
										$store.state.longitude,
										tree.lat,
										tree.lon
									)
								}}KM
							</td>
						</tr>
						<tr class="debug-tr">
							<th class="debug-th" scope="row">
								Last Permission Errror
							</th>
							<td class="debug-td">
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
import { useStore } from "vuex";

const route = useRoute();
const store = useStore();
const slug = route.params?.slug;
const { data: tree } = await useFetch(`/api/tree/${slug}`, {
	key: slug,
});
</script>
