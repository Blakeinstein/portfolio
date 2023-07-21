<script lang="ts">
	import { scrollVelocity } from "$lib/context";

  let el: HTMLImageElement;
  export let src: string;
  export let alt: string;

  let classes = "";

  export { classes as class };

</script>

<img bind:this={el} src={src} alt={alt} class={`origin-top ${classes}`}  style:translate="0 {$scrollVelocity * 5}px" />