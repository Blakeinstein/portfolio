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
      "px-2 py-1",
      classes,
      {
        "underline": path === href,
      }
    )
  }
>
  <slot />  
</a>