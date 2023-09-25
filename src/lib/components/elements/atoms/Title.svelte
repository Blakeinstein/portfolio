<script lang="ts">
  import classnames from "classnames";

  let classes = "";
  export let size: "sm" | "md" | "lg" = "md";
  export let noArrow = false;
  export { classes as class };

  $: classes = classnames('font-black flex gap-2 items-center mb-4 header', {
    ['text-2xl lg:text-6xl']: size === "sm",
    ['text-5xl lg:text-9xl ']: size === "md",
    ['text-7xl lg:text-11xl']: size === "lg",
    [classes]: classes,
    'arrow': !noArrow,
  });
</script>

<h1 class={classes}>
  <slot />
</h1>

<style>
.arrow::before {
  content: "△";
  font-size: 0.65em;
}
</style>