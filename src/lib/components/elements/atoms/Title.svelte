<script lang="ts">
  import classnames from "classnames";

  let classes = "";
  export let size: "sm" | "md" | "lg" = "md";
  export let noArrow: boolean = false;
  export { classes as class };

  $: baseClasses = classnames("flex gap-2 items-center font-bold mb-4 header", {
    ['text-lg lg:text-4xl']: size === "sm",
    ['text-3xl lg:text-7xl']: size === "md",
    ['text-5xl lg:text-9xl']: size === "lg",
  });

  $: headerClasses = classnames('font-black italic', {
    ['text-2xl lg:text-6xl']: size === "sm",
    ['text-5xl lg:text-9xl ']: size === "md",
    ['text-7xl lg:text-11xl']: size === "lg",
    [classes]: classes,
  });
</script>
<span class={baseClasses}>
  {#if !noArrow}
    △
  {/if}
  <h1 class={headerClasses}>
    <slot />
  </h1>
</span>