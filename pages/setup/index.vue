<template>
	<transition name="fade">
		<div class="w-screen h-screen grid place-items-center">
			<p class="text-white text-2xl">Tap to Begin!</p>
		</div>
	</transition>
</template>

<script setup>
	import { useRouter } from "vue-router";

	const router = useRouter();

	definePageMeta({
		layout: "minimal",
	});

	const enableFullscreen = () => {
		document.body.webkitRequestFullscreen();

		if (
			document.fullscreenElement ||
			document.webkitFullscreenElement ||
			document.mozFullScreenElement
		) {
			router.push("/");
		}
	};

	onMounted(function () {
		document.body.webkitRequestFullscreen();
		window.addEventListener("touchend", enableFullscreen);

		if (
			document.fullscreenElement ||
			document.webkitFullscreenElement ||
			document.mozFullScreenElement
		) {
			router.push("/");
		}
	});

	onUnmounted(function () {
		window.removeEventListener("touchend", enableFullscreen);
	});
</script>
