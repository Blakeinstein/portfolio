const autoprefixer = require('autoprefixer');
const nesting = require('postcss-nesting');

const config = {
	plugins: [
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		nesting(),
		//But others, like autoprefixer, need to run after,
		autoprefixer
	]
};

module.exports = config;
