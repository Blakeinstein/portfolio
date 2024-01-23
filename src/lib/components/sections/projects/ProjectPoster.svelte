<script async script lang="ts">
  import { TechConstants, type ProjectMetaData } from "$lib/data/ProjectData";
  import Icon from "@iconify/svelte";
  import Lightbox from "$lib/components/elements/lightbox/index.svelte";

  export let projectData: ProjectMetaData;
</script>


<div class="card col gap">
  <header>
    <div class="col wf">
      <hr class="wf" />
      <span class="project-date">{projectData.year || "20XX"}</span>
    </div>
    <h2 class="project-title">{projectData.name}</h2>
  </header>
  <picture>
    <img
      class="wf"
      style={`view-transition-name: project-${projectData.slug}-img`}
      src={projectData.thumbnail}
      alt={projectData.slug}
    />
  </picture>
  {#if projectData.images}
    <Lightbox images={projectData.images} />
  {/if}
  <footer class="col">
    {#if projectData.techs}
      <div class="techs" style="view-transition-name: project-tech-box">
        {#each projectData.techs as techName}
          <span
            data-blobity-tooltip="{techName}"
            data-blobity-magnetic="false"
            style:background={TechConstants[techName]?.color}
          >
            <Icon class="icon" icon={TechConstants[techName]?.icon} />
          </span>
        {/each}
      </div>
    {/if}
    <p class="project-desc">{projectData.description}</p>
    {#if projectData.links}
      <div>
        {#each projectData.links as link}
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            data-blobity-tooltip={link.href}
          >
            <Icon class="icon" icon={link.icon} />
            { link.type }
          </a>
        {/each}
      </div>
    {/if}
  </footer>
</div>

<style lang="postcss">
  .card {
    border: 2px solid var(--color-primary);
    padding: 2rem;
    background-color: var(--color-bg-primary);
    height: fit-content;
  }

  hr {
    border: 0;
    height: 0.5rem;
    background-color: var(--color-primary); 
  }

  footer {
    gap: 2rem;

    a {
      padding: 0.5rem;
      border-radius: 0.375rem;
      font-size: 1.25rem;
      line-height: 1.75rem;
      text-transform: capitalize;
      display: inline-flex;
      gap: 0.25rem;
      align-items: center;

      &:hover {
        text-decoration: underline;
        color: var(--color-bg-secondary);
      }
    }
  }

  .project-date {
    padding: 0.5rem 1rem;
    display: inline;
    align-self: flex-end;
    background-color: var(--color-primary);
    color: var(--color-bg-primary);
    width: fit-content;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .project-title {
    font-size: 4.5rem;
    line-height: 1;
    color: var(--color-primary);
    margin-top: -1rem;
  }

  .techs {
    display: flex;
    align-self: flex-end;
    > span {
      display: inline-grid;
      place-items: center;
      width: 4rem;
      height: 2rem;
      color: var(--color-primary);
    }
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

  @media (min-width: 1024px) {
    .card {
      max-width: 50%;
      box-shadow: 0 0 #0000, 0 0 #0000, 0 20px 25px -5px rgb(0 0 0 / 0.1);
    }
  }
</style>