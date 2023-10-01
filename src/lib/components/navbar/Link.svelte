<script lang="ts">
	import classNames from "classnames";
  import { page } from '$app/stores';

  export let href: string;
  let classes = "";

  export { classes as class };
  let path = "";

  $: path = $page.url.pathname?.split("/")?.[1];
  $: current = href.split("/")?.[1] === path;
</script>

<a
  href="{href}"
  class={
    classNames(
      "rounded-md relative p-2 py-1",
      classes,
    )
  }
  aria-current={current ? "page" : undefined}
>
  <slot />  
</a>

<style lang="postcss">
  
a[aria-current='page']::before {
  @apply  bg-slate-800 absolute;
  height: 1px;
  bottom: 0.25em;
  width: calc(100% - 1em);
  content: '';
  view-transition-name: active-header-item;
}

</style>