<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fade } from 'svelte/transition';
	import { inview, type Options } from 'svelte-inview';

	let { options = { unobserveOnEnter: true, rootMargin: '-20%' }, children }: { options?: Options; children?: Snippet } = $props();

	let isInView: boolean = $state(false);
</script>

<div
	use:inview={options}
	oninview_change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	{#if isInView}
		<div in:fade class="box">
			{@render children?.()}
		</div>
	{/if}
</div>
