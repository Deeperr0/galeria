/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				darkGray: "#7D7D7D",
				lightGray: "#E5E5E5",
				veryLightGray: "#F3F3F3",
			},
			fontFamily: {
				libre: ["Libre Baskerville", "serif"],
			},
		},
	},
	plugins: [],
};
