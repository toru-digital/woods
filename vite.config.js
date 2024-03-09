// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	base : "/woods/",
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html')
			},
		},
	},
})