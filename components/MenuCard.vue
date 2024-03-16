<script setup>
import {
	MapIcon,
	HomeIcon,
	ListBulletIcon,
	ArrowUpCircleIcon,
} from "@heroicons/vue/24/solid";

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	active: {
		type: Boolean,
		required: true,
	},
});

const icons = {
	Home: HomeIcon,
	Explore: ArrowUpCircleIcon,
	Map: MapIcon,
	Trees: ListBulletIcon,
};
</script>

<template>
	<div
		class="cursor-pointer w-full justify-center inline-block text-center pt-2 pb-1"
	>
		<component
			:is="icons[title]"
			class="h-6 w-6 inline-block mb-1"
			:class="{ 'text-blue-500': active, 'text-slate-400': !active }"
		/>
		<span
			class="tab tab-home block text-xs"
			:class="{ 'text-blue-500': active, 'text-slate-400': !active }"
			>{{ title }} {{ icon }}</span
		>
	</div>
</template>
