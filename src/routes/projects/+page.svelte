<script lang="ts">
	import SEO from '$lib/components/SEO/index.svelte';
	import ProjectGrid from "$lib/components/sections/projects/ProjectGrid.svelte";
  import Section from "$lib/layouts/section.svelte";
  import type { ProjectMetaData } from "$lib/data/ProjectData";

  let { data }: { data: { allProjects: ProjectMetaData[] } } = $props();

	let seoProps = {
		breadcrumbs: [
			{
				name: 'Projects',
				slug: 'projects'
			}
		],
		title: 'Projects',
		slug: 'projects'
	};
</script>

<SEO {...seoProps} />

<Section class="col" head>
  <ProjectGrid allProjects={data.allProjects}/>
</Section>
