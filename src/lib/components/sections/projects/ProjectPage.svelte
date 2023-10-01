<script lang="ts">
  import Icon from "@iconify/svelte";
  import { fade, fly } from 'svelte/transition';
  import Button from "$lib/components/elements/atoms/Button.svelte";
  import Title from "$lib/components/elements/atoms/Title.svelte";
	import type { ProjectData } from "$lib/data/ProjectData";
  import Section from "$lib/layouts/section.svelte";
  import ProjectMiniMap from "./ProjectMiniMap.svelte";
  import { expoInOut } from "svelte/easing";

  export let projectKey: string;
  export let projectData: ProjectData;
</script>

<Section class="grid place-items-center">
  <div
    class="flex flex-col lg:flex-row gap-6 w-full items-center justify-around mb-8 p-2"
  >
    <div class="lg:basis-1/2">
      <img
        class="rounded-md w-full h-full"
        src={projectData.thumbnail}
        alt={projectKey}
        style={`view-transition-name: project-${projectKey}-img`} />
    </div>
    <div class="flex flex-col gap-16 lg:basis-1/2 items-around">
      <a
        href="/projects"
        class="inline-flex gap-2 p-2 hover:underline w-24 items-center text-lg"
        in:fly={{ y: 80, opacity: 0, duration: 1200, delay: 400, easing: expoInOut }}
      >
        <Icon icon="fluent-mdl2:back" class="w-4 h-4" />
        Back
      </a>
      <div
        class="flex flex-col gap-4 desc-box"
        in:fly={{ y: 80, opacity: 0, duration: 1200, delay: 0, easing: expoInOut }}
      >
        <Title noArrow size="sm">{projectData.name}</Title>
        <p class="italic text-md mb-2">{projectData.description}</p>

        <span class="text-lg font-semibold">Links:</span>
        <ul class="flex gap-2">
          {#each projectData.links as link}
            <li>
              <Button href={link.href}>
                <Icon icon={link.icon} class="w-6 h-6" />
                {link.type}
              </Button>
            </li>
          {/each}
        </ul>
      </div>
      <div>
        <ProjectMiniMap active={projectKey} />
      </div>
    </div>
  </div>
</Section>

<style>
  .desc-box {
    view-transition-name: project-desc;
  }

</style>