<script lang="ts">
  import type { Snippet } from 'svelte';
  import classNames from "classnames";

  let { buttonType = "button", invert = false, noBorder = false, class: classes = "", href = undefined, children }: { buttonType?: HTMLButtonElement["type"]; invert?: boolean; noBorder?: boolean; class?: string; href?: string; children?: Snippet } = $props();
</script>

<svelte:element this={href ? 'a' : 'button'}
  type={buttonType}
  class={classNames({"inverted": invert, "no-border": noBorder}, classes)}
  {href}
>
  {@render children?.()}
</svelte:element> 

<style lang="postcss">
  .inverted {
    --content-color: var(--color-bg-primary);
    --background-color: var(--color-main);
  }
  button, a {
    --content-color: var(--color-main);
    --background-color: var(--color-bg-primary);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--content-color);
    background-color: transparent;
    padding: 0.5rem 1rem;
    text-decoration: none;
    border-radius: 0.125rem;
    transition: all var(--transition-duration) var(--transition-timing) ;
    &:hover {
      background-color: var(--content-color);
      color: var(--background-color);
      box-shadow: 0 0 5px var(--content-color), 0 0 25px var(--content-color),
        0 0 50px var(--content-color), 0 0 100px var(--content-color);
    }

    &:active {
      scale: 0.9;
    }
  }

  button:not(.no-border) {
    border: 2px solid var(--content-color);
  }
</style>