<script lang="ts">
	import { fade } from 'svelte/transition';
	import { inview, type Options } from 'svelte-inview';

	let isInView: boolean;
	export let options: Options = { unobserveOnEnter: true, rootMargin: '-20%' };
</script>

<div
	use:inview={options}
	on:inview_change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	{#if isInView}
		<div in:fade class="box">
			<slot />
		</div>
	{/if}
</div>
