<script lang="ts">
  import Icon from "@iconify/svelte";
  import { fly } from 'svelte/transition';
	import type { ProjectMetaData } from "$lib/data/ProjectData";
  import Section from "$lib/layouts/section.svelte";
  import ProjectMiniMap from "./ProjectMiniMap.svelte";
  import { expoInOut } from "svelte/easing";
  import ProjectPoster from "./ProjectPoster.svelte";

  export let projectData: ProjectMetaData;
  export let allProjects: ProjectMetaData[];
</script>

<Section class="grid place-items-center">
  <div
    class="flex flex-col lg:flex-row gap-6 w-full justify-around mb-8 lg:p-16"
  >
    <ProjectPoster {projectData} />
    <div class="flex flex-col gap-16 lg:basis-1/2 items-around lg:py-12">
      <div class="hidden lg:flex gap-2 items-center">
        <a
          href="/projects"
          class="inline-flex gap-2 p-2 hover:underline w-24 items-center text-lg"
          in:fly={{ y: 80, opacity: 0, duration: 1200, delay: 400, easing: expoInOut }}
        >
          <Icon icon="fluent-mdl2:back" class="w-4 h-4" />
          Back
        </a>
        <ProjectMiniMap active={projectData.slug} {allProjects} />
      </div>
      <div
        class="flex flex-col gap-4 desc-box"
        in:fly={{ y: 80, opacity: 0, duration: 1200, delay: 0, easing: expoInOut }}
      >
        <slot>
          <p>{projectData.description}</p>
        </slot>
      </div>
      <div>
        
      </div>
    </div>
  </div>
</Section>

<style>
  .desc-box {
    view-transition-name: project-desc;

  }
</style>