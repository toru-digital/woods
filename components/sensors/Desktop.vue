<template>
	<div class="dekstop-sensors"></div>
</template>

<script lang="ts">
export default defineComponent({
	mounted: function () {
		this.$store.commit("setOrientationAlpha", 0);
	},
});
</script>
