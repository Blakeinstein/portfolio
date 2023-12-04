<script lang="ts">
  import Icon from "@iconify/svelte";
  import type { ImageType } from "./types";
  import { browser } from "$app/environment";

  export let images: ImageType[];
  export let activeImage = -1;

  let dialog: HTMLDialogElement;

  const toggleDialog = (idx: number) => {
    if (idx >= 0) {
      dialog?.showModal();
    } else {
      dialog?.close();
    }
  }

  const eventListener = (e: KeyboardEvent) => {
      if (activeImage === -1) return;
      if (e.key === "Escape") {
        activeImage = -1;
        return;
      }
      if (e.key === "ArrowLeft" && activeImage > 0) {
        activeImage--;
        return;
      }
      if (e.key === "ArrowRight" && activeImage < (images.length - 1)) {
        activeImage++;
        return;
      }
    }

  if (browser) {
    document.addEventListener("keydown", eventListener);
  }

  $: toggleDialog(activeImage);
</script>

<div class="lightbox-container">
  {#each images as image, index}
    <button
      class="lightbox-image"
      on:click={() => activeImage = index}
      aria-haspopup="dialog"
      data-blobity-magnetic="false"
    >
      <picture>
        <img src={image.link} alt={image.desc}>
      </picture>
    </button>
  {/each}
  <dialog bind:this={dialog}>
    <form method="col">
      <div class="lightbox-head wf">
        <span>{ activeImage + 1} of { images.length }</span>
        {#if activeImage >= 0}
          <span>{images[activeImage].desc}</span>
        {/if}
        <button
          type="submit"
          on:click={() => activeImage = -1}
        >
          <Icon class="icon" icon="material-symbols:close" />
        </button>
      </div>
      {#if activeImage >= 0}
        <div class="lightbox grid-center">
          <button
            type="button"
            disabled={activeImage <= 0}
            on:click={() => activeImage--}
            class="seek"
          >
            <Icon class="icon" icon="akar-icons:arrow-left" />
          </button>
          <div class="image-container" aria-label="scrollable">
            <picture>
              <img src={images[activeImage].link} alt={images[activeImage].desc} />
            </picture>
          </div>
          <button
            type="button"
            disabled={activeImage >= (images.length - 1)}
            on:click={() => activeImage++}
            class="seek"
          >
            <Icon class="icon" icon="akar-icons:arrow-right" />
          </button>
        </div>
      {/if}
    </form>
  </dialog>
</div>

<style lang="postcss">

  button {
    background: transparent;
    outline: 0;
    border: 0;
    color: var(--color-primary);
  }

  .lightbox {
    height: 100%;
    grid-template-columns: 2.5rem auto 2.5rem;
  }

  .lightbox-container {
    display: flex;
    gap: 0.5rem;
    overflow-x: scroll;
    padding: 0.25rem 0;;
  }

  .lightbox-image {
    height: 6rem;
    flex-shrink: 0;
  }

  .lightbox-image img {
    height: 100%;
  }

  .lightbox-head {
    display: flex;
    justify-content: space-around;
    user-select: none;
    margin-bottom: 0.5rem;
    color: var(--color-primary);
  }

  .seek:disabled {
    opacity: 0.3;
    pointer-events: none;
  }

  form {
    color: var(----color-primary);
    max-height: 90dvh;
    max-width: 95dvw;
  }

  dialog {
    background-color: transparent;
    margin: auto;
    overflow: clip;
    border: 0;

    &::backdrop {
      background-color: #333;
      opacity: 1;
    }
  }

  .image-container {
    max-height: 85dvh;
    overflow-y: auto;

    img {
      max-width: 100%;
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    dialog[open] {
      animation: show 0.25s ease-in-out normal;
    }

    @keyframes show {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
</style>