<script lang="ts">
	import SEO from '$lib/components/SEO/index.svelte';
	import BuildingScene from '$lib/components/buildings/index.svelte';
	import Section from '$lib/layouts/section.svelte';

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

<Section>
	<BuildingScene slot="background" />
	<h1 class="text-2xl">This is some overlay text</h1>
</Section>
