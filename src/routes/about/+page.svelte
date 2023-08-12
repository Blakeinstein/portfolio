<script lang="ts">
	import SEO from '$lib/components/SEO/index.svelte';
	import MainLayout from '$lib/layouts/main.svelte';
	import Hero from '$lib/components/sections/about/index.svelte';
	import Experience from '$lib/components/sections/experience/index.svelte';

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
<MainLayout>
	<Hero />
	<Experience />
</MainLayout>

