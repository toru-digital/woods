<template>
	<TreesNear v-on:select-tree="onSelectTree" />
</template>
<script setup>
definePageMeta({
	layout: "trees",
});
</script>
