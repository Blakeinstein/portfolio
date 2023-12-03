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

<style global>


html.lenis {
  height: auto;
	width: 100dvw;
	overflow-x: hidden;
	scrollbar-gutter: stable;
	scrollbar-color: #6969dd #e5e5e5;
}

.lenis.lenis-smooth {
  scroll-behavior: auto;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}

.lenis-scrolling .scroll-indicator {
	animation: none;

	&:after {
		transition-delay: 0;
		height: 1em;
	}
}
</style>