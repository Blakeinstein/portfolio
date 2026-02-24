<script lang="ts">
	import SEO from '$lib/components/SEO/index.svelte';
	import Footer from "$lib/components/footer/index.svelte";
	import Hero from '$lib/components/sections/hero/index.svelte';
  import type { ProjectMetaData } from '$lib/data/ProjectData';

  let { data }: { data: { allProjects: ProjectMetaData[] } } = $props();

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

<Hero allProjects={data.allProjects}/>
<Footer />
