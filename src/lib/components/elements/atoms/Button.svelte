<script lang="ts">
  import classNames from "classnames";

  export let buttonType: HTMLButtonElement["type"] = "button";
  let classes = "";
  export let invert = false;
  export { classes as class };
  export let href: string | undefined = undefined;
</script>

<svelte:element this={href ? 'a' : 'button'}
  type={buttonType}
  class={classNames({"inverted": invert}, classes)}
  {href}
>
  <slot/>
</svelte:element> 

<style lang="postcss">
  .inverted {
    --content-color: var(--color-bg-primary);
    --background-color: var(--color-primary);
  }
  button, a {
    --content-color: var(--color-bg-primary);
    --background-color: var(--color-primary);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 2px solid var(--content-color);
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
</style>