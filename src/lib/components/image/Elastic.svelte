<script lang="ts">
	import { scrollVelocity } from "$lib/context";
  import { elasticInOut } from "svelte/easing";

  let el: HTMLImageElement;
  export let src: string;
  export let alt: string;

  let classes = "";

  export { classes as class };

  $: scrollProgress = elasticInOut($scrollVelocity) * $scrollVelocity ;
</script>

<img bind:this={el} src={src} alt={alt} class={`origin-top ${classes}`}  style:translate="0 {scrollProgress}px" />