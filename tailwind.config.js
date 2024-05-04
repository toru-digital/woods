/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/**/*.vue",
		"./pages/**/*.vue",
		"./pages/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./error.vue",
	],
	theme: {
		extend: {
			colors: {
				"forest-900" : "#0A2D2F",
				"mint-400" : "#54B286",
				"blaze-400" : "#FA7143",
				"forest-600" : "#3B7276",
				"mint-200" : "#81D6AE",
				"blaze-200" : "#FB9F7C",
				black : "#000000",
				"grey-100" : "#F0EEEE",
				white : "#FFFFFF",

				overflow: '#0A2D2F',
				header: '#0A2D2F',
				body: '#FFFFFF',
				footer: '#0A2D2F',
			},
			fontSize: {
				tiny: '0.5rem',
			},
			fontFamily: {
				sig: ['Sigmar One', 'ui-serif', 'serif'],
				mont: ['Montserrat', 'sans-serif'],
				sans: ['"Arial"', 'sans-serif']
			}
		},
	},
	plugins: [],
}

