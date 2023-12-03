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
  <div class="minimap">
    {#each allProjects as projectData}
      <a
        href={`/projects/${projectData.slug}`}
        aria-current={active === projectData.slug ? "page" : undefined}
        data-blobity-tooltip={projectData.name}
        style:grid-column={projectData.col}
        style:grid-row={projectData.row}
      >
        <picture>
          <img
            class="wf"
            style={active !== projectData.slug ? `view-transition-name: project-${projectData.slug}-img` : ""}
            src={projectData.thumbnail}
            alt={projectData.slug}
          />
        </picture>
      </a>
    {/each}
  </div>
</div>

<style>
  a {
    width: 4rem;
    border-radius: 0.125rem;
  }

  a[aria-current='page'] {
    filter: grayscale(1);
    opacity: 0.75;
    pointer-events: none;
    cursor: default;
  }

  .minimap {
    display: inline-grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.25rem;
  }
</style>