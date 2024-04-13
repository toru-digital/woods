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
	find_route: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<div
		style="background-image: url(/theme/title-block/middle.png)"
		class="relative pb-8"
	>
		<img
			src="/theme/title-block/bottom.png"
			class="absolute bottom-0 w-full"
		/>
		<div class="relative p-3">
			<h1
				class="font-sig text-white text-3xl relative uppercase leading-9"
			>
				{{ title }}
			</h1>
			<h2
				v-if="subtitle"
				class="font-mont text-white text-md relative uppercase leading-9"
			>
				{{ subtitle }}
			</h2>

			<div
				@click="() => router.push(find_route)"
				class="bg-blaze-400 rounded-full px-6 py-2 text-white font-sig uppercase mt-4 mb-2 inline-block text-xl cursor-pointer select-none"
			>
				Find
			</div>
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
