<script setup>
const router = useRouter();

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	subtitle: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	find_route: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<div class="bg-forest-900 px-3 pt-3 pb-1 flex w-full gap-2">
		<div class="grow">
			<h1
				class="font-sig text-white text-3xl relative uppercase leading-7 m-0 p-0"
			>
				{{ title }}
			</h1>
			<h2
				v-if="subtitle"
				class="font-mont text-white text-md relative uppercase leading-7 m-0 p-0"
			>
				{{ subtitle }}
			</h2>
		</div>
		<div class="grow-0">
			<div
				@click="() => router.push(find_route)"
				class="bg-blaze-400 rounded-full px-6 py-2 text-white font-sig uppercase inline-block text-xl cursor-pointer select-none"
			>
				Find
			</div>
		</div>
	</div>

	<div class="relative w-full">
		<img :src="image" class="w-full" />

		<img
			src="/theme/title-block/top-left.png"
			class="absolute bottom-0 left-0 w-[25px]"
		/>
		<img
			src="/theme/title-block/top-right.png"
			class="absolute bottom-0 right-0 w-[25px]"
		/>
	</div>
	<div
		style="background-image: url(/theme/title-block/middle.png)"
		class="relative pb-8"
	>
		<img
			src="/theme/title-block/bottom.png"
			class="absolute bottom-0 w-full"
		/>
		<div class="relative p-3">
			<div class="flex gap-2">
				<div
					class="bg-forest-600 rounded-full px-3 py-1 text-white font-mont mt-4 mb-2 inline-block text-sm select-none"
				>
					Evergreen
				</div>
				<div
					class="bg-forest-600 rounded-full px-3 py-1 text-white font-mont mt-4 mb-2 inline-block text-sm select-none"
				>
					123
				</div>
			</div>
		</div>
	</div>
</template>
