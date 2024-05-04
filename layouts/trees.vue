<template>
	<div class="w-screen flex flex-col bg-overflow items-center">
		<div class="header bg-forest-900 h-[70px] max-w-lg w-full">
			<TreesTabs />
		</div>
		<div
			class="body bg-body w-full max-w-lg overflow-y-auto h-[calc(100dvh-150px)]"
		>
			<slot />
		</div>
		<div
			class="footer bg-forest-900 h-[80px] w-full max-w-lg flex flex-row gap-20 justify-center"
		>
			<FooterMenu />
		</div>
	</div>
</template>

<script setup></script>
