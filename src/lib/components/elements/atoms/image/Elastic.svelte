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
    class={`origin-top transition-all hover:scale-105 ${classes}`}
    style:translate="0 {scrollProgress}px"
    bind:this={el}
    src={src}
    alt={alt}
    height={height}
    width={width}
  />
</picture>