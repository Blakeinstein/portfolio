<script lang="ts">
  import ProjectPage from "$lib/components/sections/projects/ProjectPage.svelte";
  import type { ProjectData } from "$lib/data/ProjectData";

  export let data: {
    projectKey: string,
    projectData: ProjectData
  };
</script>

<ProjectPage projectKey={data.projectKey} projectData={data.projectData} />