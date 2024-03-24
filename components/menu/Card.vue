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
	icon: {
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
		class="bg-slate-100 cursor-pointer w-full justify-center inline-block text-center pt-3 pb-5"
	>
		<img
			:src="`/icons/40dp/black/` + icon"
			class="h-8 w-8 inline-block mb-1"
			:class="{ 'opacity-100': active, 'opacity-30': !active }"
		/>
	</div>
</template>
