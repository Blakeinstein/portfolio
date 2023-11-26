import { join } from 'path';

import { sveltekit } from '@sveltejs/kit/vite';
import { partytownVite } from '@builder.io/partytown/utils';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		partytownVite({
      dest: join(process.cwd(), '.svelte-kit/output/client/~partytown')
    })
	]
};

export default config;
