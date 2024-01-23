<script lang="ts">
  export let href: string;
  export let current: string;
  let classes = "";

  export { classes as class };

  $: active = href.split("/")?.[1] === current;
</script>

<a
  href="{href}"
  class={classes}
  aria-current={active? "page" : undefined}
>
  <slot />  
</a>

<style lang="postcss">

  a {
    position: relative;
    padding: 0.25rem 0.5rem;
    border-radius: 0.375rem;
    text-decoration: none;
    color: var(--color-white);
  }

  a[aria-current='page'] {
    color: var(--color-main);
  }
  
  a[aria-current='page']::before {
    position: absolute;
    background-color: var(--color-secondary);
    height: 1px;
    bottom: 0.25em;
    width: calc(100% - 1em);
    content: '';
    view-transition-name: active-header-item;
  }

</style>