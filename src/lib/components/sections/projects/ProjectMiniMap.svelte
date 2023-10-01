<script lang="ts">
  import { ProjectData } from "$lib/data/ProjectData";
  import classNames from "classnames";
  import { expoInOut } from "svelte/easing";
  import { fly } from "svelte/transition";

  export let active: string;
</script>

<div in:fly={{ y: 80, opacity: 0, duration: 1200, delay: 400, easing: expoInOut }}>
  <h5>Mini Map:</h5>
  <div class="inline-grid grid-cols-4 gap-1">
    {#each Object.entries(ProjectData) as [projectKey, projectData]}
      <a
        href={`/projects/${projectKey}`}
        class={classNames(
          "w-12 rounded-sm",
          active === projectKey && "opacity-75 grayscale pointer-events-none cursor-default"
        )}
        style:grid-column={projectData.col}
        style:grid-row={projectData.row}
      >
        <img
          src={projectData.thumbnail}
          alt={projectKey}
          class="w-full"
          style={active !== projectKey ? `view-transition-name: project-${projectKey}-img` : ""}
        />
      </a>
    {/each}
  </div>
</div>