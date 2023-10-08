<script lang="ts">
  import { TechConstants, type ProjectMetaData } from "$lib/data/ProjectData";
  import Icon from "@iconify/svelte";

  export let projectData: ProjectMetaData;

  $: console.log(projectData);
</script>


<div class="lg:basis-1/2 card">
  <header>
    <div class="flex flex-col w-full">
      <hr class="w-full h-2 bg-black" />
      <span class="project-date">{2017}</span>
    </div>
    <h2 class="project-title">{projectData.name}</h2>
  </header>
  <img
    class="rounded-md w-full h-full"
    src={projectData.thumbnail}
    alt={projectData.slug}
    style={`view-transition-name: project-${projectData.slug}-img`}
  />
  <footer class="flex flex-col gap-8">
    {#if projectData.techs}
      <div class="flex self-end" style="view-transition-name: project-tech-box">
        {#each projectData.techs as techName}
          <span
            class="inline-grid place-items-center w-16 h-8 text-white"
            data-blobity-tooltip="{techName}"
            data-blobity-magnetic="false"
            style:background={TechConstants[techName]?.color}
          >
            <Icon class="fill-current w-6 h-6" icon={TechConstants[techName]?.icon} />
          </span>
        {/each}
      </div>
    {/if}
    <p class="project-desc">{projectData.description}</p>
    {#if projectData.links}
      <div>
        {#each projectData.links as link}
          <a
            class="p-2 rounded-md hover:underline hover:text-slate-500 text-xl capitalize inline-flex gap-1 items-center"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            data-blobity-tooltip={link.href}
          >
            <Icon class="fill-current w-6 h-6" icon={link.icon} />
            { link.type }
          </a>
        {/each}
      </div>
    {/if}
  </footer>
</div>

<style lang="postcss">
  .card {
    @apply flex flex-col lg:border-2 lg:shadow-xl bg-slate-200 p-8 border-black gap-4;
  }
  .project-date {
    @apply px-4 py-2 inline self-end w-fit bg-black text-white font-semibold text-2xl;
  }
  .project-title {
    @apply text-7xl font-black text-black -mt-4;
  }

  ::view-transition-old(project-tech-box) {
    transform-origin: right;
    animation: 90ms cubic-bezier(0.075, 0.82, 0.165, 1) both fade-out,
      300ms cubic-bezier(0.4, 0, 0.2, 1) both scale-out;
  }

  ::view-transition-new(project-tech-box) {
    transform-origin: right;
    animation: 210ms cubic-bezier(0.075, 0.82, 0.165, 1) both fade-in,
      300ms cubic-bezier(0.4, 0, 0.2, 1) both scale-in;
  }

  @keyframes scale-in {
    from {
      scale: 100% 0%;
    }
    to {
      scale: 100% 100%;
    }
  }

  @keyframes scale-out {
    from {
      scale: 100% 100%;
    }
    to {
      scale: 100% 0%;
    }
  }
</style>