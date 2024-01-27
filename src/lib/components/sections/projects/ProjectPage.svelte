<script lang="ts">
  import Icon from "@iconify/svelte";
  import { fly } from 'svelte/transition';
  import "./prism.css";

	import type { ProjectMetaData } from "$lib/data/ProjectData";
  import Section from "$lib/layouts/section.svelte";
  import ProjectMiniMap from "./ProjectMiniMap.svelte";
  import { expoInOut } from "svelte/easing";
  import ProjectPoster from "./ProjectPoster.svelte";

  export let projectData: ProjectMetaData;
  export let allProjects: ProjectMetaData[];
</script>

<Section class="grid-center head">
  <div
    class="col wf"
  >
    <ProjectPoster {projectData} />
    <div class="col head">
      <div class="guide">
        <a
          href="/projects"
          class=""
          in:fly={{ y: 80, opacity: 0, duration: 1200, delay: 400, easing: expoInOut }}
        >
          <Icon icon="fluent-mdl2:back" class="iconl" />
          Back
        </a>
        <ProjectMiniMap active={projectData.slug} {allProjects} />
      </div>
      <div
        class="desc-box"
        in:fly={{ y: 80, opacity: 0, duration: 1200, delay: 0, easing: expoInOut }}
      >
        <slot>
          <p>
            {projectData.description}
          </p>
        </slot>
      </div>
    </div>
  </div>
</Section>

<style lang="postcss">
  .col.wf {
    gap: 1.5rem;
    justify-content: space-around;
    margin-bottom: 2rem;
    max-width: 90vw;
  }

  .col.head {
    gap: 4rem;
  }

  .guide {
    display: none;
    gap: 0.5rem;
    align-items: center;
  }

  .guide a {
    display: inline-flex;
    gap: 0.5rem;
    padding: 0.5rem;
    width: 6rem;
    align-items: center;
    font-size: 1.125rem;
    line-height: 1.75rem;
    &:hover {
      text-decoration: underline;
    }
  }

  .desc-box {
    view-transition-name: project-desc;
    max-width: none;
    color: var(----color-secondary-content);

    :global(p) {
      display: contents;
    }

    > * {
      margin-bottom: 0.5rem;
    }

    :global(a) {
      color: #3182ce;

      &:hover {
        color: #2c5282,
      }
    }

    :global(h1) {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    :global(h2) {
      font-size: 1.75rem;
      margin: 0.5rem 0;
    }
  }

  @media (min-width: 1024px) {
    .col.wf {
      flex-direction: row;
      padding: 4rem;
    }

    .col.head {
      max-width: 50%;
      padding: 3rem 0;
    }

    .guide {
      display: flex;
    }
  }
</style>