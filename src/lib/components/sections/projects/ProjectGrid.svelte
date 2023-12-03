<script lang="ts">
  import type { ProjectMetaData } from "$lib/data/ProjectData";
	import ProjectCell from "./ProjectCell.svelte";

  export let allProjects: ProjectMetaData[];
</script>

<div class="col">
  {#each allProjects as projectData}
    <ProjectCell {projectData} />
  {/each}
</div>

<style>
  .col {
    flex-grow: 1;
    justify-content: space-around;
  }

  @media (min-width: 1024px) {
    .col {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      padding: 1rem;
      gap: 1.5rem;
      display: grid;
      grid-auto-rows: 32vmin;
    }
  }
</style>