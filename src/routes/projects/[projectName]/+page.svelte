<script lang="ts">
	import SEO from '$lib/components/SEO/index.svelte';
  import ProjectPage from "$lib/components/sections/projects/ProjectPage.svelte";
  import type { ProjectMetaData } from "$lib/data/ProjectData";
  import type { Component } from "svelte";

  let { data }: { data: {
    content: Component
    projectData: ProjectMetaData
    allProjects: ProjectMetaData[]
  } } = $props();

	let seoProps = $derived({
		breadcrumbs: [
			{
				name: data.projectData.name,
				slug: data.projectData.slug
			}
		],
		title: data.projectData.name,
    slug: data.projectData.slug
	});
</script>

<SEO {...seoProps} />

<ProjectPage projectData={data.projectData} allProjects={data.allProjects}>
  <data.content />
</ProjectPage>