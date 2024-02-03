<script lang="ts">
  import Section from "$lib/layouts/section.svelte";
  import ProjectPreview from "./ProjectPreview.svelte";
  import type { ProjectMetaData } from "$lib/data/ProjectData";
  import HeroPlaque from "./HeroPlaque.svelte";

  export let allProjects: ProjectMetaData[] = [];
</script>

<HeroPlaque />

<Section class="headline">
  <ProjectPreview {allProjects} />
</Section>