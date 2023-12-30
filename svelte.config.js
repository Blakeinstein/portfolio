import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

import seqPreprocessor from 'svelte-sequential-preprocessor';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { mdsvex } from 'mdsvex';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.svx'],
	highlight: {
		alias: { brolang: "elixir" }
	}
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte', '.svx'],
	preprocess: [
		seqPreprocessor([vitePreprocess(), mdsvex(mdsvexOptions)]),
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true
		})
	}
};

export default config;
