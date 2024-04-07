<template>
	<div class="w-screen flex flex-col bg-overflow">
		<div class="header bg-header h-[80px]">
			<Header />
		</div>
		<div
			class="body bg-body max-w-screen overflow-y-auto h-[calc(100dvh-160px)]"
		>
			<slot />
		</div>
		<div
			class="footer bg-footer h-[80px] flex flex-row gap-20 justify-center"
		>
			<MenuCard
				v-for="screen in menu"
				:key="screen.title"
				:title="screen.title"
				:icon="screen.icon"
				:path="screen.path"
				:active="isActive(screen.path)"
			/>
		</div>
		<div class="hidden">
			<Sensors />
		</div>
	</div>
</template>

<script setup>
import menu from "@data/menu";
import { useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

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

const enableFullscreen = () => {
	document.body.webkitRequestFullscreen();

	if (
		!(
			document.fullscreenElement ||
			document.webkitFullscreenElement ||
			document.mozFullScreenElement
		)
	) {
		router.push("/setup");
	}
};

onMounted(function () {
	window.addEventListener("touchend", enableFullscreen);
	document.body.webkitRequestFullscreen();
});

onUnmounted(function () {
	window.removeEventListener("touchend", enableFullscreen);
});
</script>
