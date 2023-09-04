<script lang="ts">
	import SEO from '$lib/components/SEO/index.svelte';
	import Hero from '$lib/components/sections/hero/index.svelte';

	let seoProps = {
		breadcrumbs: [
			{
				name: 'home',
				slug: ''
			}
		],
		title: 'Home',
		slug: ''
	};
</script>

<SEO {...seoProps} />

<Hero />
