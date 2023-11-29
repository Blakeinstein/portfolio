<script lang="ts">
	import Button from "$lib/components/elements/atoms/Button.svelte";
  import type { ProjectMetaData } from "$lib/data/ProjectData";
  import Section from "$lib/layouts/section.svelte";
	import Icon from "@iconify/svelte";
  import PreviewCard from "./PreviewCard.svelte";
  import { browser } from "$app/environment";

  export let allProjects: ProjectMetaData[] = [];

  let activeIdx = 0;

  const increment = () => {
    activeIdx = (activeIdx + 1) % allProjects.length;
  };

  if (browser) {
    setInterval(increment, 3000);
  }
</script>
<Section>
  <div class="flex flex-col gap-4 mx-12 items-center overflow-clip">
    <Button href="/projects" class="= px-4 py-2 font-xl">
      Check all projects!
      <Icon icon="mdi:arrow-right" class="w-6 h-6" />
    </Button>
    <div class="relative card-holder">
      {#each allProjects as project, index}
        <PreviewCard project={project} {index} {activeIdx}/>
      {/each}
    </div>
  </div>
</Section>

<style>
  .card-holder {
    width: 100vmin;
    height: 80vh;
    perspective: 500px;
    transform-style: preserve-3d;
  }
</style>