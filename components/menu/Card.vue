<script setup>
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	icon: {
		type: String,
		required: true,
	},
	path: {
		type: String,
		required: true,
	},
	active: {
		type: Boolean,
		required: true,
	},
});
</script>

<template>
	<router-link :to="path" class="w-full h-full">
		<div
			class="cursor-pointer w-full justify-center inline-block text-center pt-3 pb-5"
		>
			<img
				:src="
					`/theme/nav-` +
					(active ? `active` : `inactive`) +
					`/` +
					icon
				"
				class="h-8 w-auto inline-block mb-1"
			/>
		</div>
	</router-link>
</template>
