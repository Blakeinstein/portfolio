<script lang="ts">
  import Icon from "@iconify/svelte";
import type { ImageType } from "./types";
  import { browser } from "$app/environment";

  export let images: ImageType[];
  export let activeImage: number = -1;

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

<div class="flex gap-2 overflow-x-scroll">
  {#each images as image, index}
    <button
      class="h-24 shrink-0"
      on:click={() => activeImage = index}
      aria-haspopup="dialog"
      data-blobity-magnetic="false"
    >
      <img class="h-full" src={image.link} alt={image.desc}>
    </button>
  {/each}
  <dialog bind:this={dialog}>
    <form method="dialog" class="lightbox-form flex flex-col items-center gap-2 text-white">
      <div class="flex justify-around w-full">
        <span>{ activeImage + 1} of { images.length }</span>
        {#if activeImage >= 0}
          <span>{images[activeImage].desc}</span>
        {/if}
        <button
          type="submit"
          on:click={() => activeImage = -1}
        >
          <Icon class="w-6 h-6" icon="material-symbols:close" />
        </button>
      </div>
      {#if activeImage >= 0}
        <div class="lightbox">
          <button
            type="button"
            disabled={activeImage <= 0}
            on:click={() => activeImage--}
            class="disabled:opacity-30 disabled:pointer-events-none"
          >
            <Icon class="w-6 h-6" icon="akar-icons:arrow-left" />
          </button>
          <div class="max-h-[85dvh] overflow-y-auto" aria-label="scrollable">
            <img src={images[activeImage].link} alt={images[activeImage].desc} />
          </div>
          <button
            type="button"
            disabled={activeImage >= (images.length - 1)}
            on:click={() => activeImage++}
            class="disabled:opacity-30 disabled:pointer-events-none"
          >
            <Icon class="w-6 h-6" icon="akar-icons:arrow-right" />
          </button>
        </div>
      {/if}
    </form>
  </dialog>
</div>

<style lang="postcss">
  dialog {
    @apply bg-transparent;

    &::backdrop {
      @apply bg-black;
      opacity: 0.5;
    }
  }

  .lightbox-form {
    height: 90dvh;
    width: 95dvw;
  }

  .lightbox {
    @apply grid place-items-center h-full;
    grid-template-columns: 2.5rem auto 2.5rem;
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