<script lang="ts">
  import Button from "$lib/components/elements/atoms/Button.svelte";
  import type { ProjectMetaData } from "$lib/data/ProjectData";

  export let project: ProjectMetaData;
</script>

<div class="card" style:background-image={`url(${project.thumbnail})`}>
  <a class="card-body" href="/projects/{project.slug}" data-blobity-magnetic="false">
    <h3>{project.name}</h3>
    <p>{project.description}</p>
  </a>
</div>

<style lang="postcss">
.card {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 80vmin;
  padding: 1rem;
  background-position: center;
  background-size: cover;
  border-radius: 0.325rem;
  transform-style: preserve-3d;
  perspective: 500px;
}

.card-body {
  min-height: 10vmin;
  padding: 0.5rem 1rem;
  border-radius: 0.275rem;
  background-color: var(--color-white);
  color: var(--color-bg-primary);
  text-decoration: none;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 20px 25px -5px rgb(0 0 0 / 0.1);
  transform-style: flat;
  transition: all var(--transition-duration) var(--transition-timing);
  &:hover {
    scale: 1.03;
  }
}
</style>