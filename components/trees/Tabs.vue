<template>
	<ul
		class="border-b h-[70px] border-gray-200 flex flex-wrap gap-2 text-sm font-medium text-center text-gray-500 p-3 items-end"
	>
		<TreesTab
			:title="screen.title"
			:icon="screen.icon"
			v-for="(screen, index) in screens"
			@click="router.push(screen.path)"
			:active="isActive(screen.path)"
			:key="screen.title"
		/>
	</ul>
</template>

<script setup>
const router = useRouter();
const route = useRoute();

const screens = [
	{ title: "Trees", icon: "trees.svg", path: "/trees" },
	{ title: "Near Me", icon: "near.svg", path: "/trees/near-me" },
	{ title: "Map", icon: "map.svg", path: "/trees/map" },
];

const isActive = (path) => {
	if (route == null) {
		return false;
	}

	if (path === "/trees") {
		return route.fullPath === "/trees";
	}

	return route.fullPath.startsWith(path);
};
</script>
