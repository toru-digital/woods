/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./**/index.html",
		"./**/*.{js}",
		"!./dist/**/*",
	],
	theme: {
		extend: {},
	},
	plugins: [],
}

