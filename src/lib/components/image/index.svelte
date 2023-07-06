<script lang="ts">
	import { browser } from "$app/environment";
  import { Plane } from "curtainsjs";
	import curtains from "./curtains";
	import { onMount } from "svelte";
	import { scrollVelocity } from "$lib/context";

  let el: HTMLImageElement;
  export let src: string;
  export let alt: string;

  let classes = "";

  export { classes as class };

  let plane: Plane;

  onMount(() => {
    plane = new Plane(curtains, el);  

    // .subscribe((v) => {
    //   plane.setRelativeTranslation(0, v * 0.1, 0);
    // })
  })
</script>

<img bind:this={el} src={src} alt={alt} class={` ${classes}`} style={`rotate: ${$scrollVelocity * 20}deg`}/>