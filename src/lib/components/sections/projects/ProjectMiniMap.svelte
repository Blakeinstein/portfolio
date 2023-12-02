<script lang="ts">
  import type { ProjectMetaData } from "$lib/data/ProjectData";
  import classNames from "classnames";
  import { expoInOut } from "svelte/easing";
  import { fly } from "svelte/transition";

  export let active: string;
  export let allProjects: ProjectMetaData[];
</script>

<div
  in:fly={{ y: 80, opacity: 0, duration: 1200, delay: 400, easing: expoInOut }}
  style="view-transition-name: project-mini-map;"
>
  <h5>Mini Map:</h5>
  <div class="inline-grid grid-cols-4 gap-1">
    {#each allProjects as projectData}
      <a
        href={`/projects/${projectData.slug}`}
        class={
          classNames(
            "w-12 rounded-sm",
            active === projectData.slug && "opacity-75 grayscale pointer-events-none cursor-default"
          )
        }
        data-blobity-tooltip={projectData.name}
        style:grid-column={projectData.col}
        style:grid-row={projectData.row}
      >
        <picture>
          <img
            class="w-full"
            style={active !== projectData.slug ? `view-transition-name: project-${projectData.slug}-img` : ""}
            src={projectData.thumbnail}
            alt={projectData.slug}
          />
        </picture>
      </a>
    {/each}
  </div>
</div>