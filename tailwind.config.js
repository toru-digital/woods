/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./error.vue",
	],
	theme: {
		extend: {
			colors: {
				overflow: '#033336',
				header: '#033336',
				body: '#FFA883',
				footer: '#033336',
				white: '#FFFFFF',
			},
			fontSize: {
				tiny: '0.5rem',
			},
		},
	},
	plugins: [],
}

