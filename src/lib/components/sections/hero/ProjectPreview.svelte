<script lang="ts">
	import Button from "$lib/components/elements/atoms/Button.svelte";
  import type { ProjectMetaData } from "$lib/data/ProjectData";
  import Section from "$lib/layouts/section.svelte";
	import Icon from "@iconify/svelte";
  import PreviewCard from "./PreviewCard.svelte";
  import { browser } from "$app/environment";

  export let allProjects: ProjectMetaData[] = [];

  let activeIdx = 3;

  const increment = () => {
    activeIdx = (activeIdx + 1) % allProjects.length;
  };

  if (browser) {
    setInterval(increment, 3000);
  }
</script>
<Section>
  <div class="col gap">
    <Button href="/projects" class="prev-btn">
      Check all projects!
      <Icon icon="mdi:arrow-right" class="icon" />
    </Button>
    <div class="card-holder">
      {#each allProjects as project, index}
        <PreviewCard project={project} {index} {activeIdx}/>
      {/each}
    </div>
  </div>
</Section>

<style>
  .col {
    padding: 4rem;
    align-items: center;
    overflow: clip;
  }

  :global(.prev-btn) {
    padding: 0.5rem 1rem;
  }
  .card-holder {
    position: relative;
    width: 100vmin;
    height: 80vh;
    perspective: 500px;
    transform-style: preserve-3d;
    margin: 5rem 0;
  }
</style>