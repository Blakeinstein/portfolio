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
  <div class="blaine gradient-text">
    <span>B</span>
    <span>L</span>
    <span>A</span>
    <span>I</span>
    <span>N</span>
    <span>E</span>
  </div>
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
  .blaine {
    width: 100vw;
    color: var(--color-primary-content);
    padding: 3rem;
    line-height: 0.75;
    letter-spacing: 0;
    font-weight: 700;
    text-align: center;
    display: flex;
    justify-content: space-around;
    font-size: calc(100vw / 6);

    span:nth-child(1), span:nth-child(6) {
      font-size: 1.6em;
    }

    span {
      font-size: 1.25em;
    }
  }

  .grid-center {
    height: 50vh;
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