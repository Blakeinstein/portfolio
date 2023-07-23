<script lang="ts">
  import classnames from "classnames";

  let classes = "";
  export let size: "sm" | "md" | "lg" = "md";
  export let noArrow: boolean = false;
  export { classes as class };

  $: baseClasses = classnames("flex gap-2 items-center font-bold italic mb-4", {
    ['text-xl lg:text-5xl']: size === "sm",
    ['text-4xl lg:text-8xl']: size === "md",
    ['text-6xl lg:text-10xl']: size === "lg",
  });

  $: headerClasses = classnames('font-black', {
    ['text-2xl lg:text-6xl']: size === "sm",
    ['text-5xl lg:text-9xl ']: size === "md",
    ['text-7xl lg:text-11xl']: size === "lg",
    [classes]: classes,
  });
</script>
<span class={baseClasses}>
  {#if !noArrow}
    >
  {/if}
  <h1 class={headerClasses}>
    <slot />
  </h1>
</span>