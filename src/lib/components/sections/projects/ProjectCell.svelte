<script lang="ts">
	import type { ProjectMetaData } from "$lib/data/ProjectData";

  export let projectData: ProjectMetaData;
</script>

<a
  class="project-item"
  href="/projects/{projectData.slug}"
  style:grid-column={projectData.col}
  style:grid-row={projectData.row}
  data-no-blobity
>
  <div
    class="img-wrapper"
    style={`view-transition-name: project-${projectData.slug}-img`}
  >
    <picture>
      <img src={projectData.thumbnail} alt={projectData.slug} />
    </picture>
  </div>
  <div class="info wf">
    <h2>{projectData.name}</h2>
    <p>{projectData.description}</p>
    <span>Click to read more</span>
  </div>
</a>

<style lang="postcss">
  .project-item {
    --padding: 0px;
    display: flex;
    position: relative;
    border-radius: 0.375rem;
    gap: 0.5rem;
  }

  .img-wrapper {
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    flex-grow: 0;
    border-radius: 0.375rem;
    width: 45vw;
    img {
      position: absolute;
      object-fit: cover;
      min-height: 100%;
      max-width: 100%;
      height: auto;
    }
  }

  h2 {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2rem;
  }

  p {
    font-style: italic;
    font-size: 0.875rem;
    line-height: 1.25rem;
    max-height: 2.5rem;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
  }

  @media (min-width: 1024px) {
    .project-item {
      display: grid;
      place-items: center;

      .img-wrapper {
        width: calc(100% - var(--padding) * 2);
        height: calc(100% - var(--padding) * 2);
      }

      padding: var(--padding);
      * {
        transition: all 300ms ease-in-out;
      }
      
      > .info {
        justify-self: stretch;
        translate: 0 100%;
        scale: 0.8;
        opacity: 0;
        position: absolute;
        bottom: 0;
        color: var(--color-main);
      }

      &:hover {
        --padding: 4px;

        > .info {
          translate: 0 -10%;
          scale: 0.9;
          opacity: 1;
        }

        .img-wrapper {
          scale: 0.98;
          transition-duration: 1s;
          img {
            transition-duration: 1s;
            scale: 1.2;
            filter: blur(4px);
          }
        }
      }
    }

    .img-wrapper {
      transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      img {
        translate: -50% -50%;
        top: 50%;
        left: 50%;
      }
    }
  }

</style>