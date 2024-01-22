/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			screens: {
				sm: '640px',
				md: '768px',
				xmd: '840px',
				lg: '990px',
				xlg: '1152px',
				xl: '1280px',
				'2xl': '1536px'
			},
			container: {
				center: true,
				screens: {
					sm: '640px',
					md: '767.98px',
					xmd: '840px',
					lg: '991.98px',
					xlg: '1152px',
					xl: '1280px',
					'2xl': '1536px'
				}
			},
			colors: {
				primary: '#4CAF4F',
				secondary: '#263238',
				info: '#2194F3',
				warning: '#FBC02D',
				danger: '#E53835',
				success: '#2E7D31',
				black: '#263238',
				D_grey: '#4D4D4D',
				grey: '#717171',
				L_grey: '#89939E',
				grey_blue: '#ABBED1',
				silver: '#F5F7FA'
			},
			boxShadow: {
				base: '0 4px 20px rgba(18, 24, 30, 0.25)'
			},
			fontSize: {
				32: '32px'
			},
			borderRadius: {
				base: '10px'
			}
		}
	},
	plugins: []
}
