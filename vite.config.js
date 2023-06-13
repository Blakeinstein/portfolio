import { sveltekit } from '@sveltejs/kit/vite';
import glsl from 'vite-plugin-glsl';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		glsl({
			compress: false
		})
	]
};

export default config;
