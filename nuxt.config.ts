// https://nuxt.com/docs/api/configuration/nuxt-config

import Path from 'path';

export default defineNuxtConfig({
	app: {
		head: {
			meta: [{
				name: "theme-color",
				content: "#0A2D2F"
			}],
			link: [{
				rel: "icon",
				sizes: "any",
				href: "/favicon.ico"
			},{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},{
				rel: "icon",
				type: "apple-touch-icon",
				href: "/apple-touch-icon.png"
			},{
				rel: "manifest",
				href: "/site.webmanifest"
			}],
		}
	},
	modules: ['nuxt3-leaflet', "@nuxt/image"],
	devtools: { enabled: true },
	css: [
		'~/assets/css/main.css',
		'~/assets/css/animations.css',
	],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	alias: {
		"@data": Path.resolve(__dirname, "./data"),
		"@components": Path.resolve(__dirname, "./components"),
		"@layouts": Path.resolve(__dirname, "./layouts"),
		"@pages": Path.resolve(__dirname, "./pages"),
		"@plugins": Path.resolve(__dirname, "./plugins"),
		"@static": Path.resolve(__dirname, "./static"),
		"@store": Path.resolve(__dirname, "./store"),
		"@interfaces": Path.resolve(__dirname, "./interfaces"),
	},
	ssr: false
})
