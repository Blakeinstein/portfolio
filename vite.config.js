import { sveltekit } from '@sveltejs/kit/vite';
import glsl from 'vite-plugin-glsl';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), glsl()],
	ssr: {
		noExternal: ['three', 'troika-three-text']
	}
};

export default config;
