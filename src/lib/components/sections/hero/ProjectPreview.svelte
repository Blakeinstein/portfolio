<script lang="ts">
	import Button from "$lib/components/elements/atoms/Button.svelte";
  import type { ProjectMetaData } from "$lib/data/ProjectData";
	import Icon from "@iconify/svelte";
  import PreviewCard from "./PreviewCard.svelte";
  import Marquee from "$lib/animations/marquee.svelte";

  export let allProjects: ProjectMetaData[] = [];

  $: featuredProjects = allProjects.filter(project => project.featured)
</script>

<div class="featured-mq col gap">
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
      <div class="col gap more">
        <span>
          Each project I undertake is fueled by a deep passion and a commitment to excellence. My hands craft with care, and my mind works with creativity, transforming every idea into a meaningful and meticulously crafted reality. This portfolio is more than a collection of work; it's a reflection of my dedication to making every vision come alive with simplicity and elegance.
        </span>
        <Button href="/projects">
          All projects
          <Icon icon="mdi:arrow-right" class="icon" />
        </Button>
      </div>
    </div>
  </div>
</div>

<style>
  .more {
    max-width: 80%;

    span {
      font-style: italic;
    }
  }

  .featured-mq {
    padding: 4rem 0;
    align-items: center;
    overflow: clip;
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