<script lang="ts">
	import Button from "$lib/components/elements/atoms/Button.svelte";
  import type { ProjectMetaData } from "$lib/data/ProjectData";
  import Section from "$lib/layouts/section.svelte";
	import Icon from "@iconify/svelte";
  import PreviewCard from "./PreviewCard.svelte";
  import Marquee from "$lib/animations/marquee.svelte";

  export let allProjects: ProjectMetaData[] = [];

  $: featuredProjects = allProjects.filter(project => project.featured)
</script>
<Section class="headline">
  <div class="col gap">
    <Marquee>
      {#each {length: 6} as _}
        <h3>
          Featured Work!
        </h3>
      {/each}
    </Marquee>
    
    <div class="featured wf">
      {#each featuredProjects as project}
        <PreviewCard project={project}/>
      {/each}
      <div class="grid-center">
        <Button href="/projects" class="prev-btn">
          Check all projects!
          <Icon icon="mdi:arrow-right" class="icon" />
        </Button>
      </div>
    </div>
  </div>
</Section>

<style>
  .col {
    padding: 4rem 0;
    align-items: center;
    overflow: clip;
  }

  :global(.headline) {
    background: var(--color-primary-content);
    color: var(--color-primary);
    margin: 4rem 0;
  }

  .featured {
    display: grid;
    grid-template-columns: auto;
    gap: 0.5rem;
  }

  h3 {
    font-size: 4rem;
  }

  @media (min-width: 1024px) {
    .featured {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>