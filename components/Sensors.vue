<template>
	<div class="sensors"></div>
</template>

<script lang="ts">
import type { IWorldPosition } from "../interfaces/IWorldPosition";

export default defineComponent({
	data: function () {
		return {
			position_watcher: null,
		};
	},
	mounted: function () {
		this.setupOrientation();
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
		setupOrientation: function () {
			const instance = this;
			const is_ios =
				navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
				navigator.userAgent.match(/AppleWebKit/);

			if (is_ios) {
				DeviceOrientationEvent.requestPermission()
					.then(function (response: any) {
						if (response === "granted") {
							window.addEventListener(
								"deviceorientation",
								instance.onGetDeviceOrientation,
								true
							);
							instance.$store.commit(
								"setPermissionsLastError",
								""
							);
						} else {
							instance.$store.commit(
								"setPermissionsLastError",
								"Device orientation has to be allowed!"
							);
						}
					})
					.catch(function () {
						instance.$store.commit(
							"setPermissionsLastError",
							"Device orientation is not supported!"
						);
					});
			} else {
				window.addEventListener(
					"deviceorientationabsolute",
					instance.onGetDeviceOrientation,
					true
				);
			}
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
		onGetDeviceOrientation: function (event: any) {
			console.log(event);
			this.$store.commit(
				"setNorthernAxis",
				event.webkitCompassHeading || event.alpha
			);
		},
		onGetDevicePosition: function (event: any) {
			if (
				this.$store.state.latitude === 0 &&
				this.$store.state.longitude === 0
			) {
				this.$store.commit("setPermissionsLastError", "");
				this.$store.commit("setPermissionsHasGps", true);
				this.$store.commit("setWorldPositions", [
					{
						id: 1,
						title: "North Pole",
						position: {
							latitude: 90,
							longitude: 0,
						},
					},
				] as IWorldPosition[]);
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
