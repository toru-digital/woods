<script setup lang="ts">
useSeoMeta({
	title: "Delapre Tree Trails",
	ogTitle: "Delapre Tree Trails",
	description:
		"Embark on a digital journey through the enchanting landscapes of Delapré Abbey with our interactive Tree Quest. Discover the rich tapestry of history and nature, explore ancient woodlands, and connect with the stories of each unique tree that graces this historic estate.",
	ogDescription:
		"Embark on a digital journey through the enchanting landscapes of Delapré Abbey with our interactive Tree Quest. Discover the rich tapestry of history and nature, explore ancient woodlands, and connect with the stories of each unique tree that graces this historic estate.",
	// ogImage: "https://example.com/image.png",
	// twitterCard: "summary_large_image",
});
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link
			href="https://fonts.cdnfonts.com/css/sigmar-one"
			rel="stylesheet"
		/>
		<link
			href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
			rel="stylesheet"
		/>
	</NuxtLayout>
	<Services />
</template>
