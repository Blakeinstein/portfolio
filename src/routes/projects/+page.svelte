<script lang="ts">
	import ProjectGrid from "$lib/components/sections/projects/ProjectGrid.svelte";
  import Section from "$lib/layouts/section.svelte";
  import type { ProjectMetaData } from "$lib/data/ProjectData";

  export let data: {
    allProjects: ProjectMetaData[];
  }
</script>

<Section class="col">
  <ProjectGrid allProjects={data.allProjects}/>
</Section>
