/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				pageBackgroundColor: "white",
				custom: {
					pageBackground: {
						white: "white",
						blue: "#EEF7FC",
						purple: "rgba(248,243,253,1)",
					},
					darkText: "#160623",
					blue: {
						light: "#CEEDFF",
						medium: "#3CB7FC",
						dark: "#1890CA",
						darker: "#0872A6",
					},
					purple: {
						light: "#DDC8F6",
						dark: "#8C2ADA",
					},
					footerBackground: "#16425B"
				}
			},
			fontFamily: {
				DIN: "'din-2014', 'Poppins', sans-serif",
				Merriweather: "'Merriweather', serif",
				Poppins: "'Poppins', 'din-2014', sans-serif"
			}
		},
	},
	plugins: [],
}
