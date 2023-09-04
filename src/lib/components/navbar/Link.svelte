<script lang="ts">
	import classNames from "classnames";
  import { page } from '$app/stores';

  export let href: string;
  let classes = "";

  export { classes as class };
  let path: string = "";

  $: path = $page.url.pathname;
</script>

<a
  href="{href}"
  class={
    classNames(
      "px-4 py-1 rounded-md hover:bg-slate-800 hover:text-white",
      classes,
      {
        "px-2 bg-slate-800 text-white bg-opacity-80": path === href,
      }
    )
  }
>
  <slot />  
</a>