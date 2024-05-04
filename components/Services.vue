<template>
	<div class="services"></div>
</template>

<script lang="ts">
	export default defineComponent({
		mounted: function () {
			this.$store.commit("setServices", this);
			if (
				!this.$store.state.permissions_has_gps ||
				!this.$store.state.permissions_has_compass ||
				!this.$store.state.permissions_has_fullscreen
			) {
				this.$router.push("/permissions");
			}
		},
		methods: {
			testLocationPermission: function () {
				return new Promise(function (resolve, reject) {
					navigator.permissions
						.query({ name: "geolocation" })
						.then(function (result) {
							if (result.state === "granted") {
								resolve(null);
							} else if (result.state === "prompt") {
								resolve(null);
							} else if (result.state === "denied") {
								reject({ message: result.state });
							}
						});
				});
			},
			watchLocation: function () {
				const instance: any = this;
				const geo_settings = {
					enableHighAccuracy: true,
					timeout: 10000,
					maximumAge: 0,
				};
				var had_callback: boolean = false;

				return new Promise(function (resolve, reject) {
					const onGotPosition = function (event: any) {
						instance.$store.commit("setLatitude", event.coords.latitude);
						instance.$store.commit("setLongitude", event.coords.longitude);

						if (!had_callback) {
							had_callback = true;
							resolve(null);
						}
					};

					const onGotPositionError = function (event: any) {
						if (!had_callback) {
							had_callback = true;
							reject(event);
						}
					};

					navigator.geolocation.watchPosition(
						onGotPosition,
						onGotPositionError,
						geo_settings
					);
				});
			},
			testCompassPermission: function () {
				return new Promise(function (resolve, reject) {
					navigator.permissions
						.query({ name: "magnetometer" })
						.then(function (result) {
							if (result.state === "granted") {
								resolve(null);
							} else if (result.state === "prompt") {
								resolve(null);
							} else if (result.state === "denied") {
								reject({ message: result.state });
							}
						});
				});
			},
			watchCompass: function () {
				const instance: any = this;
				var had_callback: boolean = false;

				return new Promise(function (resolve, reject) {
					const onGotHeading = function (event: any) {
						instance.$store.commit(
							"setNorthernAxis",
							event.webkitCompassHeading || event.alpha
						);

						if (!had_callback) {
							had_callback = true;
							resolve(null);
						}
					};

					window.addEventListener("deviceorientation", onGotHeading, true);
				});
			},
		},
	});
</script>
