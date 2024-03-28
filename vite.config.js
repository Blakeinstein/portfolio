import { join } from 'path';

import { sveltekit } from '@sveltejs/kit/vite';
import { partytownVite } from '@builder.io/partytown/utils';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		partytownVite({
      // @ts-expect-error as per docs
      dest: join(__dirname, 'dist', '~partytown')
    })
	]
};

export default config;
