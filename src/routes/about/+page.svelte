<script lang="ts">
	import SEO from '$lib/components/SEO/index.svelte';
	import Hero from '$lib/components/sections/about/index.svelte';
	import Experience from '$lib/components/sections/experience/index.svelte';

	let seoProps = {
		breadcrumbs: [
			{
				name: 'About',
				slug: 'about'
			}
		],
		title: 'About',
		slug: ''
	};
</script>

<SEO {...seoProps} />

<Hero />
<Experience />
