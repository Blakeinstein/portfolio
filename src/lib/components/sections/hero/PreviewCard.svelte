<script lang="ts">
  const MAX_VISIBILITY = 2;
  import type { ProjectMetaData } from "$lib/data/ProjectData";

  export let project: ProjectMetaData;
  export let index = 0;
  export let activeIdx = 0;


  $: visible = Math.abs(activeIdx - index) <= MAX_VISIBILITY;
</script>

<a 
  class="card wf" 
  href="/projects/{project.slug}"
  aria-hidden={!visible}
  aria-disabled={index !== activeIdx}
  data-no-blobity={index == activeIdx ? true : false}
  data-blobity-tooltip={project.name}
  style:--active={ index === activeIdx ? 1 : 0 }
  style:--offset={ (activeIdx - index) / 3 }
  style:--direction={ Math.sign(activeIdx - index) }
  style:--abs-offset={ Math.abs(activeIdx - index) / 3 }
>
  <picture>
    <img
      class="wf"
      style={`view-transition-name: project-${project.slug}-img`}
      src={project.thumbnail} alt={project.name} 
    />
  </picture>
</a>

<style lang="postcss">
.card {
  position: absolute;
  rotate: x calc(var(--offset) * -10deg);
  scale: calc(1 + var(--abs-offset) * -0.6);
  translate: 50% calc(var(--direction) * -50vmin) calc(var(--abs-offset) * -50rem);
  filter: blur(calc(var(--abs-offset) * 1rem)) saturate(calc(1 + var(--abs-offset) * -0.6));
  z-index: calc(10 - var(--abs-offset) * 10);
  transition: all 0.3s ease-out;
  height: fit-content;
  transform-origin: center center;
  img {
    object-fit: contain;
    width: auto;
    height: 80vmin;
    translate: -50% 0;
  }

  &[aria-hidden="true"]{
    display: none;
    opacity: 0;
  }

  &[aria-disabled="true"] {
    pointer-events: none;
  }
}

@media (min-width: 1024px) {
  .card {
    translate: calc(var(--direction) * -60vmin + 50%) 0 calc(var(--abs-offset) * -50rem);
    rotate: y calc(var(--offset) * 10deg);
  }
}
</style>