// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	base : "/logo/",
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html')
			},
		},
	},
})