<script setup>
const props = defineProps({
	image: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<div class="relative">
		<img :src="image" />
		<img
			src="/theme/title-block/top-left.png"
			class="absolute bottom-0 left-0 w-[47px]"
		/>
		<img
			src="/theme/title-block/top-right.png"
			class="absolute bottom-0 right-0 w-[47px]"
		/>
	</div>
</template>
