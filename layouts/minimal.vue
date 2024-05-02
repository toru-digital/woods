<template>
	<div class="w-screen h-screen flex flex-col bg-overflow">
		<slot />
		<div class="hidden">
			<Sensors />
		</div>
	</div>
</template>
