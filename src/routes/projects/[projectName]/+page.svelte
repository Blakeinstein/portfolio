<script lang="ts">
	import SEO from '$lib/components/SEO/index.svelte';
  import ProjectPage from "$lib/components/sections/projects/ProjectPage.svelte";
  import type { ProjectMetaData } from "$lib/data/ProjectData";
  import type { SvelteComponent } from "svelte";

  export let data: {
    content: typeof SvelteComponent
    projectData: ProjectMetaData
    allProjects: ProjectMetaData[]
  };

	let seoProps = {
		breadcrumbs: [
			{
				name: data.projectData.name,
				slug: data.projectData.slug
			}
		],
		title: data.projectData.name,
    slug: data.projectData.slug
	};
</script>

<SEO {...seoProps} />

<ProjectPage projectData={data.projectData} allProjects={data.allProjects}>
  <svelte:component this={data.content} />
</ProjectPage>