<template>
	<div class="android-sensors"></div>
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
			window.addEventListener(
				"deviceorientationabsolute",
				instance.onGetDeviceOrientation,
				true
			);
		},
		onGetDeviceOrientation: function (event: any) {
			this.$store.commit(
				"setOrientationAlpha",
				event.webkitCompassHeading || event.alpha
			);
		},
	},
});
</script>
