// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	base : "/woods/",
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				home: resolve(__dirname, 'home/index.html'),
				explore: resolve(__dirname, 'explore/index.html'),
				map: resolve(__dirname, 'map/index.html'),
				trees: resolve(__dirname, 'trees/index.html'),
			},
		},
	},
})