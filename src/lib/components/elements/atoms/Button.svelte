<script lang="ts">
  export let buttonType: HTMLButtonElement["type"] = "button";
  let classes = "";
  export { classes as class };
  export let href: string | undefined = undefined;
</script>

<svelte:element this={href ? 'a' : 'button'}
  type={buttonType}
  class={classes}
  {href}
>
  <slot/>
</svelte:element> 

<style lang="postcss">
  button, a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 2px solid var(--color-primary-content);
    color: var(--color-primary-content);
    background-color: transparent;
    padding: 0.5rem 1rem;
    text-decoration: none;
    border-radius: 0.125rem;
    transition: all var(--transition-duration) var(--transition-timing) ;
    &:hover {
      background-color: var(--color-primary-content);
      color: var(--color-primary);
      box-shadow: 0 0 5px var(--color-primary-content), 0 0 25px var(--color-primary-content),
        0 0 50px var(--color-primary-content), 0 0 100px var(--color-primary-content);
    }

    &:active {
      scale: 0.9;
    }
  }
</style>