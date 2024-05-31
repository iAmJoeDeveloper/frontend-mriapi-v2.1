/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {
				'.scrollbar-thin': {
					scrollbarWidth: 'thin',
					scrollbarColor: '#ced6e0 white',
				},
				'.scrollbar-webkit': {
					'&::-webkit-scrollbar': {
						width: '8px',
					},
					'&::-webkit-scrollbar-track': {
						background: 'white',
					},
					'&::-webkit-scrollbar-thumb': {
						backgroundColor: 'rgb(63 63 64)',
						borderRadius: '40px',
						border: '1px solid white',
					},
				},
			}
			addUtilities(newUtilities, ['responsive', 'hover'])
		},
	],
}
