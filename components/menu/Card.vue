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
	<router-link :to="path" class='w-full h-full'>
		<div
			class="cursor-pointer w-full justify-center inline-block text-center pt-3 pb-5"
		>
			<img
				:src="`/icons/40dp/white/` + icon"
				class="h-8 w-8 inline-block mb-1"
				:class="{ 'opacity-100': active, 'opacity-30': !active }"
			/>
		</div>
	</router-link>
</template>
