<script lang="ts">
	import type { Snippet } from 'svelte';
	import Navbar from "$lib/components/navbar/index.svelte";
	import Backdrop from '$lib/components/elements/backdrop/index.svelte';

	let { background, children }: { background?: Snippet; children?: Snippet } = $props();
</script>

<background>
	{#if background}
		{@render background()}
	{:else}
		<Backdrop />
	{/if}
</background>
<Navbar />
<main>
	{@render children?.()}
</main>

<style>
	background {
		view-transition-name: backdrop;
		position: fixed;
		inset: 0;
		pointer-events: none;
	}
	main {
		position: relative;
		scroll-snap-type: y mandatory;
	}
</style>