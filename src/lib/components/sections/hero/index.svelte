<script lang="ts">
  import Section from "$lib/layouts/section.svelte";
  import ProjectPreview from "./ProjectPreview.svelte";
  import type { ProjectMetaData } from "$lib/data/ProjectData";
  import HeroPlaque from "./HeroPlaque.svelte";

  let { allProjects = [] }: { allProjects?: ProjectMetaData[] } = $props();
</script>

<HeroPlaque />

<Section class="headline">
  <ProjectPreview {allProjects} />
</Section>