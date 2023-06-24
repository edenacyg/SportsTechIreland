module.exports = {
	content: [
		'./src/**/*.{ce.vue,vue,js,ts,html,hbs,jsx,tsx}',
	],
	presets: [
		require('./tailwind.preset.projectname.js')
	],

	theme: {
		extend: {
			width: {
			'35p': '35%',
			}
		}	
	}
}
