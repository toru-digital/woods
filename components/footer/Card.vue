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
	<router-link
		:to="path"
		class="cursor-pointer justify-center inline-block text-center pt-4 pb-4"
	>
		<img
			:src="`/theme/nav-` + (active ? `active` : `inactive`) + `/` + icon"
			class="h-10 w-auto inline-block mb-1"
		/>
	</router-link>
</template>
