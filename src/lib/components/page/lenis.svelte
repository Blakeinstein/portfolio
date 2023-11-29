<script lang="ts">
  import Lenis from "@studio-freight/lenis";
	import { get } from "svelte/store";
  
	import { browser } from "$app/environment";
	import { lenisInstance } from "$lib/context";
  import ScrollIndicator from "$lib/animations/scrollIndicator.svelte";

	if (browser) {
		lenisInstance.set(new Lenis());
		const fn = (time: number) => {
			get(lenisInstance)?.raf(time);
			requestAnimationFrame(fn);
		}
		requestAnimationFrame(fn);
  }
</script>

<ScrollIndicator class="fixed bottom-10 right-10" />