<script lang="ts">
  const MAX_VISIBILITY = 2;
  import type { ProjectMetaData } from "$lib/data/ProjectData";
  import classNames from "classnames";

  export let project: ProjectMetaData;
  export let index = 0;
  export let activeIdx = 0;

  let classes = "";

  export { classes as class };

  $: visible = Math.abs(activeIdx - index) <= MAX_VISIBILITY;
</script>

<a 
  class={classNames("card", {
    "display-none opacity-0": !visible,
    "pointer-events-none": index !== activeIdx,
  } , classes)} 
  href="/projects/{project.slug}"
  data-no-blobity={index == activeIdx ? true : false}
  style:--active={ index === activeIdx ? 1 : 0 }
  style:--offset={ (activeIdx - index) / 3 }
  style:--direction={ Math.sign(activeIdx - index) }
  style:--abs-offset={ Math.abs(activeIdx - index) / 3 }
>
  <picture>
    <img
      class="object-contain w-full h-full"
      style={`view-transition-name: project-${project.slug}-img`}
      src={project.thumbnail} alt={project.name} 
    />
  </picture>
</a>

<style lang="postcss">

.card {
  position: absolute;
  transform: 
    rotateY(calc(var(--offset) * 50deg)) 
    scaleY(calc(1 + var(--abs-offset) * -0.4))
    translateZ(calc(var(--abs-offset) * -30rem))
    translateX(calc(var(--direction) * -5rem));
  filter: blur(calc(var(--abs-offset) * 1rem)) saturate(calc(1 + var(--abs-offset) * -0.6));
  z-index: calc(10 - var(--abs-offset) * 10);
  transition: all 0.3s ease-out;
  height: fit-content;
  width: 100%;
  img {
    width: auto;
    height: 80vh;
  }
}

.prev, .next {
  scale: 0.7;
  filter: blur(10px);
  z-index: 5;
}

.prev {
  translate: -15rem 0 -30rem;
}

.next {
  translate: 15rem 0 -30rem;
}

.active {
  z-index: 10;
}
</style>