<template>
	<FooterCard
		v-for="screen in menu"
		:key="screen.title"
		:title="screen.title"
		:icon="screen.icon"
		:path="screen.path"
		:active="isActive(screen.path)"
	/>
</template>

<script setup>
import menu from "@data/menu";

const route = useRoute();

const isActive = (path) => {
	if (route == null) {
		return false;
	}

	if (path === "/" && route.fullPath === "/") {
		return route.fullPath === path;
	}

	if (path === "/") {
		return route.fullPath === path;
	}

	return route.fullPath.startsWith(path);
};
</script>
