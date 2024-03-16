<template>
	<!-- <ul>
		<li><a href="#">Home</a></li>
		<li><a href="#">Explore</a></li>
		<li><a href="#">Map</a></li>
		<li><a href="#">Trees</a></li>
	</ul>
	<Trees />
	 -->
	<div class="w-full h-screen">
		<!-- <section id="bottom-navigation" class="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"> // if shown only tablet/mobile-->
		<section
			id="bottom-navigation"
			class="block fixed inset-x-0 bottom-0 z-10 bg-white shadow"
		>
			<div id="tabs" class="flex justify-between">
				<MenuCard />
				<MenuCard />
				<MenuCard />
				<MenuCard />
				<MenuCard />
			</div>
		</section>
	</div>
</template>
