<template>
	<div class="sensors">
		<AndroidSensors v-if="checkAndroid()" />
		<IosSensors v-else-if="checkIpad() || checkIphone()" />
	</div>
</template>

<script lang="ts">
import type { IWorldPosition } from "../interfaces/IWorldPosition";
import AndroidSensors from "./_sensors/AndroidSensors.vue";
import IosSensors from "./_sensors/IosSensors.vue";

export default defineComponent({
	components: {
		AndroidSensors,
		IosSensors,
	},
	data: function () {
		return {
			position_watcher: null,
		};
	},
	mounted() {
		this.setupLocation();
		this.setupScreen();
	},
	beforeDestroy: function () {
		navigator.geolocation.clearWatch(this.position_watcher);
		window.removeEventListener(
			"deviceorientation",
			this.onGetDeviceOrientation,
			true
		);
	},
	methods: {
		checkIphone: function () {
			if (!navigator || !navigator.userAgent) return false;
			const u = navigator.userAgent;
			return !!u.match(/iPhone/i);
		},
		checkAndroid: function () {
			if (!navigator || !navigator.userAgent) return false;
			const u = navigator.userAgent;
			return !!u.match(/Android/i);
		},
		checkIpad: function () {
			if (!navigator || !navigator.userAgent) return false;
			const u = navigator.userAgent;
			return !!u.match(/iPad/i);
		},
		checkIsApple: function () {
			if (!navigator || !navigator.userAgent) return false;
			const u = navigator.userAgent;
			return u.includes("Safari");
		},
		checkMobile: function () {
			if (!navigator || !navigator.userAgent) return false;
			const u = navigator.userAgent;
			return !!u.match(/Android/i) || !!u.match(/iPhone/i);
		},
		setupLocation: function () {
			const instance = this;
			const geo_settings = {
				enableHighAccuracy: true,
				timeout: 5000,
				maximumAge: 0,
			};
			this.$store.commit("setPermissionsHasGps", false);

			navigator.permissions
				.query({ name: "geolocation" })
				.then(function (result) {
					if (result.state == "granted") {
						instance.$store.commit("setPermissionsLastError", "");
					} else if (result.state == "prompt") {
						instance.position_watcher =
							navigator.geolocation.watchPosition(
								instance.onGetDevicePosition,
								instance.onGetDevicePositionError,
								geo_settings
							);
						instance.$store.commit("setPermissionsLastError", "");
					} else if (result.state == "denied") {
						instance.$store.commit(
							"setPermissionsLastError",
							"Geolocation has to be allowed!"
						);
					}

					navigator.geolocation.getCurrentPosition(
						instance.onGetDevicePosition,
						instance.onGetDevicePositionError,
						geo_settings
					);
				});
		},
		setupScreen: function () {
			try {
				screen.lockOrientationUniversal(["portrait-primary"]);
			} catch {}
			try {
				screen.orientation.lock("portrait-primary");
			} catch {}
			try {
				screen.lockOrientation("portrait-primary");
			} catch {}
		},
		onGetDevicePosition: function (event: any) {
			if (
				this.$store.state.latitude === 0 &&
				this.$store.state.longitude === 0
			) {
				this.$store.commit("setPermissionsLastError", "");
				this.$store.commit("setPermissionsHasGps", true);
				// this.$store.commit("setWorldPositions", [
				// 	{
				// 		id: 1,
				// 		title: "North Pole",
				// 		position: {
				// 			latitude: 90,
				// 			longitude: 0,
				// 		},
				// 	},
				// ] as IWorldPosition[]);
			}

			this.$store.commit("setLatitude", event.coords.latitude);
			this.$store.commit("setLongitude", event.coords.longitude);
		},
		onGetDevicePositionError: function (event: any) {
			this.$store.commit(
				"setPermissionsLastError",
				"GPS Error: " + event.message
			);
		},
	},
});
</script>
