<template>
	<section class="flex flex-col w-full h-full flex-col">
		<div v-if="tree == null" class="w-full h-16 grid place-items-center">
			<p class="w-full p-8 text-lg">...loading</p>
		</div>
		<div v-else>
			<div class="p-10">
				<TreeFinder :tree="tree" />
			</div>
			<div>
				<p class="text-center cursor-pointer mt-2 text-blue-500">
					<router-link :to="'/trees/' + tree.slug">
						Back
					</router-link>
					|
					<router-link :to="'/debug/' + tree.slug">
						debug
					</router-link>
				</p>
			</div>
		</div>
	</section>
</template>

<script setup>
const route = useRoute();
const slug = route.params?.slug;
const { data: tree } = await useFetch(`/api/tree/${slug}`, {
	key: slug,
});
</script>
