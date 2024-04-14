<script setup></script>

<template>
	<TreesNear v-on:select-tree="onSelectTree" />
	<TreesMap v-on:select-tree="onSelectTree" />
</template>
