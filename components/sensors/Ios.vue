<template>
	<div class="ios-sensors"></div>
</template>

<script lang="ts">
	export default defineComponent({
		data: function () {
			return {
				position_watcher: null,
			};
		},
		mounted: function () {
			this.setupOrientation();
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
				DeviceOrientationEvent.requestPermission()
					.then(function (response: any) {
						if (response === "granted") {
							window.addEventListener(
								"deviceorientation",
								instance.onGetDeviceOrientation,
								true
							);
							instance.$store.commit("setPermissionsLastError", "");
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
			},
			onGetDeviceOrientation: function (event: any) {
				this.$store.commit(
					"setNorthernAxis",
					event.webkitCompassHeading || event.alpha
				);
			},
		},
	});
</script>
