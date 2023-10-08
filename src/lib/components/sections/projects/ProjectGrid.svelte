<script lang="ts">
  import type { ProjectMetaData } from "$lib/data/ProjectData";
	import ProjectCell from "./ProjectCell.svelte";

  export let allProjects: ProjectMetaData[];
</script>

<div
  class="flex flex-col lg:grid grid-cols-4 lg:p-4 gap-6 grow justify-around auto-rows-[32vmin]"
>
  {#each allProjects as projectData}
    <ProjectCell {projectData} />
  {/each}
</div>
