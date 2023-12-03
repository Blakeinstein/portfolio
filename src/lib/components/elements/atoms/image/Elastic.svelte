<script lang="ts">
	import { scrollVelocity } from "$lib/context";
  import { elasticInOut } from "svelte/easing";

  let el: HTMLImageElement;
  export let src: string;
  export let alt: string;

  export let height: string | undefined = undefined;
  export let width: string | undefined = undefined;

  let classes = "";

  export { classes as class };

  $: scrollProgress = elasticInOut($scrollVelocity) * $scrollVelocity * 4 ;
</script>

<picture>
  <img 
    class={classes}
    style:translate="0 {scrollProgress}px"
    bind:this={el}
    src={src}
    alt={alt}
    height={height}
    width={width}
  />
</picture>

<style>
  img {
    transform-origin: top;
    transition: all var(--transition-duration) var(--transition-timing);
  }

  img:hover {
    scale: 1.05;
  }
</style>