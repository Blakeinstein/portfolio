<script lang="ts">
	import type { ProjectData } from "$lib/data/ProjectData";

  export let projectName: string;
  export let projectData: ProjectData;
</script>

<a
  class="flex lg:grid place-items-center relative project-item rounded-md"
  href="/projects/{projectName}"
  style:grid-column={projectData.col}
  style:grid-row={projectData.row}
  data-no-blobity
>
  <div class="img-wrapper relative overflow-hidden">
    <img src={projectData.thumbnail} alt={projectName} class="absolute object-cover" />
  </div>
  <div class="lg:absolute bottom-0 info lg:p-8 lg:text-white">
    <h2 class="font-semibold text-2xl">{projectName}</h2>
    <p class="italic text-sm">{projectData.description}</p>
    <span>Click to read more</span>
  </div>
</a>

<style lang="postcss">
  .project-item {
    --padding: 0px;
    flex-basis: 45%;
    max-height: 45vh;
  }

  .img-wrapper {
    width: calc(100% - var(--padding) * 2);
    height: calc(100% - var(--padding) * 2);
    > img {
      min-height: 100%;
    }
  }

  @media (min-width: 1024px) {
    .project-item {

      padding: var(--padding);
      * {
        transition: all 300ms ease-in-out;
      }
      
      > .info {
        justify-self: stretch;
        translate: 0 100%;
        scale: 0.8;
        opacity: 0;
      }

      &:hover {
        --padding: 4px;

        > .info {
          translate: 0;
          scale: 1 1;
          opacity: 1;
        }

        .img-wrapper {
          scale: 0.98;
          transition-duration: 1s;
          > img {
            transition-duration: 1s;
            scale: 1.2;
            filter: blur(4px);
          }
        }
      }
    }

    .img-wrapper {
      transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      > img {
        translate: -50% -50%;
        top: 50%;
        left: 50%;
      }
    }
  }

</style>