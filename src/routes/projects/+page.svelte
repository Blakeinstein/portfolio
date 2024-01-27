<script lang="ts">
	import SEO from '$lib/components/SEO/index.svelte';
	import ProjectGrid from "$lib/components/sections/projects/ProjectGrid.svelte";
  import Section from "$lib/layouts/section.svelte";
  import type { ProjectMetaData } from "$lib/data/ProjectData";

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

  export let data: {
    allProjects: ProjectMetaData[];
  }
</script>

<SEO {...seoProps} />

<Section class="col" head>
  <ProjectGrid allProjects={data.allProjects}/>
</Section>
