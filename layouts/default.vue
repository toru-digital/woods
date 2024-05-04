<template>
	<div class="w-screen flex flex-col bg-overflow items-center">
		<div
			class="body bg-body w-full max-w-lg overflow-y-auto h-[calc(100dvh-80px)]"
		>
			<slot />
		</div>
		<div
			class="footer bg-footer h-[80px] w-full max-w-lg flex flex-row gap-20 justify-center"
		>
			<FooterMenu />
		</div>
	</div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

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
	// window.addEventListener("touchend", enableFullscreen);
	// document.body.webkitRequestFullscreen();
});

onUnmounted(function () {
	// window.removeEventListener("touchend", enableFullscreen);
});
</script>
