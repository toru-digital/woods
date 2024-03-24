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
	<button
		class="py-2 px-4 no-underline rounded-full bg-blue font-bold text-sm btn-primary"
		:class="{
			'bg-slate-900 text-slate-100': active,
			'bg-blue-100 text-slate-900': !active,
		}"
	>
		<img
			:src="`/icons/20dp/` + (active ? 'white' : 'black') + `/` + icon"
			class="w-4 h-4 inline-block mb-1"
		/>
		{{ title }}
	</button>
</template>
