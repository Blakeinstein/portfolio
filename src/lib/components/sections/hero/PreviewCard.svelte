<script lang="ts">
  import type { ProjectMetaData } from "$lib/data/ProjectData";

  export let project: ProjectMetaData;
</script>

<a class="card" style:background-image={`url(${project.thumbnail})`} href="/projects/{project.slug}">
  <div class="card-body" data-blobity-magnetic="false">
    <h3>{project.name}</h3>
    <p>{project.description}</p>
  </div>
</a>

<style lang="postcss">
.card {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 40vh;
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