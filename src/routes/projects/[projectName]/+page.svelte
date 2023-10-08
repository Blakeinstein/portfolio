<script lang="ts">
  import ProjectPage from "$lib/components/sections/projects/ProjectPage.svelte";
  import type { ProjectMetaData } from "$lib/data/ProjectData";
  import type { SvelteComponent } from "svelte";

  export let data: {
    content: typeof SvelteComponent
    projectData: ProjectMetaData
    allProjects: ProjectMetaData[]
  };
</script>

<ProjectPage projectData={data.projectData} allProjects={data.allProjects}>
  <svelte:component this={data.content} />
</ProjectPage>