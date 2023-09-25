<script lang="ts">
import { ProjectData } from "$lib/data/ProjectData";
	import ProjectCell from "./ProjectCell.svelte";
</script>

<div class="flex flex-col lg:grid grid-cols-4 auto-rows-[32vmin] lg:p-4 gap-6 grow justify-around">
  {#each Object.entries(ProjectData) as [projectKey, projectData]}
    <ProjectCell projectKey={projectKey} projectData={projectData} />
  {/each}
</div>
