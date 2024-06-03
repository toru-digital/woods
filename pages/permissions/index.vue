<template>
	<transition name="fade">
		<div class="w-full h-full grid place-items-center bg-white">
			<div v-if="!$store.state.permissions_has_gps">
				<img
					src="/public/permissions/map.png"
					class="w-[75vw] mx-auto aspect-square mb-4"
				/>
				<p class="w-full text-center text-2xl font-bold mb-8">
					Location is key!
				</p>
				<p class="text-center text-md mx-16">
					Your location is used to find content nearby.
				</p>

				<div class="w-full grid place-items-center mt-32 gap-y-4">
					<button
						class="bg-blaze-400 active:bg-blaze-200 active:scale-95 transition-all text-white rounded-full px-8 py-4 w-[50vw] max-w-[200px]"
						:class="
							testing_has_gps
								? 'pointer-events-none opacity-25'
								: ''
						"
						@click="onAllowGPSAccess"
					>
						Allow Access
					</button>
					<button
						class="text-gray-400 active:bg-gray-100 active:scale-95 transition-all rounded-full px-8 py-4 w-[50vw] max-w-[200px]"
						:class="
							testing_has_gps
								? 'pointer-events-none opacity-25'
								: ''
						"
						@click="onDeniedClicked"
					>
						No Thanks
					</button>
					<button :class="!testing_has_gps ? 'opacity-0' : ''">
						Testing GPS...
					</button>
				</div>
			</div>
			<div
				v-if="
					$store.state.permissions_has_gps &&
					!$store.state.permissions_has_compass
				"
			>
				<img
					src="/public/permissions/compass.png"
					class="w-[75vw] mx-auto aspect-square mb-4"
				/>
				<p class="w-full text-center text-2xl font-bold mb-8">
					Which way?
				</p>
				<p class="text-center text-md mx-16">
					Your compass is needed to help you find your way.
				</p>

				<div class="w-full grid place-items-center mt-32 gap-y-4">
					<button
						class="bg-blaze-400 active:bg-blaze-200 active:scale-95 transition-all text-white rounded-full px-8 py-4 w-[50vw] max-w-[200px]"
						:class="
							testing_has_compass
								? 'pointer-events-none opacity-25'
								: ''
						"
						@click="onAllowCompassAccess"
					>
						Allow Access
					</button>
					<button
						class="text-gray-400 active:bg-gray-100 active:scale-95 transition-all rounded-full px-8 py-4 w-[50vw] max-w-[200px]"
						:class="
							testing_has_compass
								? 'pointer-events-none opacity-25'
								: ''
						"
						@click="onDeniedClicked"
					>
						No Thanks
					</button>
					<button :class="!testing_has_compass ? 'opacity-0' : ''">
						Testing Compass...
					</button>
				</div>
			</div>
			<div
				v-if="
					$store.state.permissions_has_gps &&
					$store.state.permissions_has_compass &&
					!$store.state.permissions_has_fullscreen
				"
			>
				<img
					src="/public/permissions/find.png"
					class="w-[75vw] mx-auto aspect-square mb-4"
				/>
				<p class="w-full text-center text-2xl font-bold mb-8">
					Time to fill up!
				</p>
				<p class="text-center text-md mx-16">
					For the best experiance this service will go full screen.
				</p>

				<div class="w-full grid place-items-center mt-32 gap-y-4">
					<button
						class="bg-blaze-400 active:bg-blaze-200 active:scale-95 transition-all text-white rounded-full px-8 py-4 w-[50vw] max-w-[200px]"
						:class="
							testing_has_fullscreen
								? 'pointer-events-none opacity-25'
								: ''
						"
						@click="onAllowFullscreen"
					>
						Allow Access
					</button>
					<button
						class="text-gray-400 active:bg-gray-100 active:scale-95 transition-all rounded-full px-8 py-4 w-[50vw] max-w-[200px]"
						:class="
							testing_has_fullscreen
								? 'pointer-events-none opacity-25'
								: ''
						"
						@click="onDeniedClicked"
					>
						No Thanks
					</button>
					<button :class="!testing_has_fullscreen ? 'opacity-0' : ''">
						Testing Fullscreen...
					</button>
				</div>
			</div>
		</div>
	</transition>
</template>

<script setup lang="ts">
import { useStore } from "vuex";

definePageMeta({
	layout: "minimal",
});

const store = useStore();
const router = useRouter();

const testing_has_gps: any = ref(false);
const testing_has_compass: any = ref(false);
const testing_has_fullscreen: any = ref(false);

const onAllowGPSAccess = function () {
	testing_has_gps.value = true;
	store.state.services
		.testLocationPermission()
		.then(function () {
			store.state.services
				.watchLocation()
				.then(function () {
					store.commit("setPermissionsHasGps", true);
				})
				.catch(function () {
					router.push("/permissions/denied");
				});
		})
		.catch(function () {
			router.push("/permissions/denied");
		});
};

const onAllowCompassAccess = function () {
	testing_has_compass.value = true;
	store.state.services
		.testCompassPermission()
		.then(function () {
			store.state.services
				.watchCompass()
				.then(function () {
					setTimeout(function () {
						store.commit("setPermissionsHasCompass", true);
					}, 500);
				})
				.catch(function () {
					router.push("/permissions/denied");
				});
		})
		.catch(function () {
			router.push("/permissions/denied");
		});
};

const onAllowFullscreen = function () {
	testing_has_fullscreen.value = true;
	if (
		document.fullscreenElement ||
		document.webkitFullscreenElement ||
		document.mozFullScreenElement
	) {
		router.push("/");
	} else {
		setTimeout(function () {
			if (
				document.fullscreenElement ||
				document.webkitFullscreenElement ||
				document.mozFullScreenElement
			) {
				router.push("/");
			} else {
				router.push("/permissions/denied");
			}
		}, 500);
	}

	document.body
		.webkitRequestFullscreen()
		.then(function () {
			store.commit("setPermissionsHasFullscreen", true);
			router.push("/");
		})
		.catch(function () {
			router.push("/permissions/denied");
		});
};

const onDeniedClicked = function () {
	router.push("/permissions/denied");
};
</script>
