<script lang="ts">
  import type { Snippet } from 'svelte';
  import classNames from "classnames";

	let { head = false, class: classses = "", children }: { head?: boolean; class?: string; children?: Snippet } = $props();
</script>

<section
	class={classNames(
		"wf", 
		{"head": head},
		classses)
	}
	data-lenis-scroll-snap-align="start"
>
	{@render children?.()}
</section>

<style>
	section {
		min-height: 100vh;
		padding: 0.5rem 2rem;
		scroll-snap-align: start;
	}


	section.head {
		min-height: calc(100vh - 5rem);
	}
</style>