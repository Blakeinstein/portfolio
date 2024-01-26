<script lang="ts">
  import Title from "$lib/components/elements/atoms/Title.svelte";
import type { ProjectMetaData } from "$lib/data/ProjectData";
	import ProjectCell from "./ProjectCell.svelte";

  export let allProjects: ProjectMetaData[];
</script>

<div class="col">
  {#each allProjects as projectData}
    <ProjectCell {projectData} />
  {/each}
  <div
    class="info grid-center"
    style:grid-column={2}
    style:grid-row={1}
  >
    <Title noArrow size="sm">
      Projects
    </Title>
  </div>
  <div 
    class="info grid-center" 
    style:grid-column={2}
    style:grid-row={2}
  >
    <span>
      A collection of projects I've worked on over the years.
    </span>
  </div>
</div>

<style>
  .col {
    flex-grow: 1;
    gap: 1.5rem;
    justify-content: space-around;
  }

  .info {
    display: none;
  }

  @media (min-width: 1024px) {
    .info {
      display: grid;
    }
    .col {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      padding: 1rem;
      display: grid;
      grid-auto-rows: 30%;
    }
  }
</style>