<script lang="ts">
  import Ellipsis from "./Ellipsis.svelte";
  import CopyWrite from "./CopyWrite.svelte";
  import ProjectPreview from "./ProjectPreview.svelte";
	import Button from "$lib/components/elements/atoms/Button.svelte";
	import Icon from "@iconify/svelte";
  import type { ProjectMetaData } from "$lib/data/ProjectData";

  export let allProjects: ProjectMetaData[] = [];
</script>

<div class="h-[50vh] grid place-items-center">
  <h1 class="text-8xl lg:text-9xl font-black hero-title px-12 py-2 text-center">
    Hi! I'm
    <div class="inline gradient-text">Blaine</div>.
  </h1>
</div>
<Ellipsis>
  <div class="tracking-wider text-gray-800 text-2xl flex items-center flex-col gap-2">
    <CopyWrite />
    <Button class="text-xl tracking-wider gap-2" href="/about">
      About me
      <Icon icon="mdi:arrow-right" class="w-6 h-6" />
    </Button>
  </div>
</Ellipsis>
<ProjectPreview {allProjects} />

<style lang="postcss">
  .hero-title {
    word-spacing: 0.5rem;
  }
</style>