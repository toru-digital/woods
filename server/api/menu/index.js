
export default defineEventHandler((event) => {
	return [
		{ title: "Home", icon: "home.png", path: '/' },
		{ title: "Trees", icon: "trees.png", path: '/trees' },
		{ title: "Trails", icon: "trails.png", path: '/trails' },
	];
 })