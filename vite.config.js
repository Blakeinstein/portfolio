import { join } from 'path';

import { sveltekit } from '@sveltejs/kit/vite';
import glsl from 'vite-plugin-glsl';
import { partytownVite } from '@builder.io/partytown/utils';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		partytownVite({
      dest: join(process.cwd(), '.svelte-kit/output/client/~partytown')
    }),
		glsl({
			compress: false
		})
	]
};

export default config;
