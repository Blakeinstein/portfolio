<script lang="ts">
	import Title from "$lib/components/elements/atoms/Title.svelte";
	import ProjectGrid from "$lib/components/sections/projects/ProjectGrid.svelte";
  import Section from "$lib/layouts/section.svelte";
  import type { ProjectMetaData } from "$lib/data/ProjectData";

  export let data: {
    allProjects: ProjectMetaData[];
  }
</script>
<div>
  <Section class="flex flex-col">
    <Title noArrow>Projects</Title>
    <ProjectGrid allProjects={data.allProjects}/>
  </Section>
</div>