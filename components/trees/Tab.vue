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
	active: {
		type: Boolean,
		required: true,
	},
});
</script>

<template>
	<li class="me-2">
		<a
			href="#"
			class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg group"
			:class="{
				'border-gray-300 text-slate-600 border-slate-600': active,
				'': !active,
			}"
		>
			<img
				:src="`/icons/20dp/` + icon"
				class="w-4 h-4 me-2 inline-block mb-1"
				:class="{ 'opacity-100': active, 'opacity-30': !active }"
			/>
			{{ title }}
		</a>
	</li>
</template>
