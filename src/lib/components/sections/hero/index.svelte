<script lang="ts">
  import Ellipsis from "./Ellipsis.svelte";
  import CopyWrite from "./CopyWrite.svelte";
  import ProjectPreview from "./ProjectPreview.svelte";
	import Button from "$lib/components/elements/atoms/Button.svelte";
	import Icon from "@iconify/svelte";
  import type { ProjectMetaData } from "$lib/data/ProjectData";

  export let allProjects: ProjectMetaData[] = [];
</script>

<div class="grid-center">
  <h1 class="">
    Hi! I'm
    <div class="gradient-text">Blaine</div>.
  </h1>
</div>
<Ellipsis>
  <div class="col">
    <CopyWrite />
    <Button class="copy-btn" href="/about">
      About me
      <Icon icon="mdi:arrow-right" class="icon" />
    </Button>
  </div>
</Ellipsis>
<ProjectPreview {allProjects} />

<style lang="postcss">
  .grid-center {
    height: 50vh;
  }
  h1 {
    color: var(--color-primary-content);
    padding: 0.5rem 3rem;
    text-align: center;
    font-size: 6rem;
    line-height: 1;
    word-spacing: 0.5rem;
  }

  .gradient-text {
    display: inline;
  }

  .col {
    letter-spacing: 0.05em;
    color: var(--color-primary-content);
    font-size: 1.5rem;
    line-height: 2rem;
    align-items: center;
    gap: 0.5rem;
  }

  :global(.copy-btn) {
    letter-spacing: 0.05em;
    font-size: 1.25rem;
    line-height: 1.75rem;
    gap: 0.5rem;
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 8rem/* 128px */;
      line-height: 1;
    }
  }
</style>