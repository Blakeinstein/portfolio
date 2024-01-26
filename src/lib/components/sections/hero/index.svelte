<script lang="ts">
  import Section from "$lib/layouts/section.svelte";
  import ProjectPreview from "./ProjectPreview.svelte";
  import type { ProjectMetaData } from "$lib/data/ProjectData";
  import SkillsGrid from "./SkillsGrid.svelte";

  export let allProjects: ProjectMetaData[] = [];
</script>

<Section class="col head">
  <div class="blaine gradient-text">
    <span>B</span>
    <span>L</span>
    <span>A</span>
    <span>I</span>
    <span>N</span>
    <span>E</span>
  </div>
  <SkillsGrid />
</Section>

<Section class="headline">
  <ProjectPreview {allProjects} />
</Section>

<style lang="postcss">
  .blaine {
    width: 90vw;
    margin: 5rem 0;
    color: var(--color-main);
    padding: 3rem 0;
    line-height: 0.75;
    letter-spacing: 0;
    font-weight: 700;
    text-align: center;
    display: flex;
    justify-content: space-around;
    font-size: calc(90vw / 6);
    pointer-events: none;
    user-select: none;

    span:nth-child(1), span:nth-child(6) {
      font-size: 1.6em;
    }

    span {
      font-size: 1.25em;
    }
  }

  :global(.head) {
    align-items: center;
  }
</style>