<script lang="ts">
	import SEO from '$lib/components/SEO/index.svelte';
	import Hero from '$lib/components/sections/hero/index.svelte';
  import type { ProjectMetaData } from '$lib/data/ProjectData';

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

  export let data: {
    allProjects: ProjectMetaData[];
  }
</script>

<SEO {...seoProps} />

<Hero allProjects={data.allProjects}/>
