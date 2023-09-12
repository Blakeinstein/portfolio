<script>
	import Title from "$lib/components/elements/atoms/Title.svelte";
	import ProjectGrid from "$lib/components/sections/projects/ProjectGrid.svelte";
  import Section from "$lib/layouts/section.svelte";

</script>
<div>
  <Section class="flex flex-col">
    <Title noArrow>Projects</Title>
    <ProjectGrid />
  </Section>
</div>