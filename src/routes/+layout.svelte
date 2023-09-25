<script lang="ts">
	import { fly } from 'svelte/transition'
	import { cubicOut, cubicIn } from 'svelte/easing';

	import PartyTown from '$lib/components/SEO/PartyTown.svelte';
	import MainLayout from '$lib/layouts/main.svelte';
	import Blobity from '$lib/components/page/blobity.svelte';
	import Lenis from '$lib/components/page/lenis.svelte';

	import '../app.postcss';

  export let data;

	const duration = 300
	const delay = duration + 100
	const x = 300

	const transitionIn = { easing: cubicOut, x, duration, delay }
	const transitionOut = { easing: cubicIn, x: -x, duration }

</script>

<Blobity />
<Lenis />
<PartyTown />

<MainLayout>
	{#key data.path}
		<container in:fly={transitionIn} out:fly={transitionOut} class="relative min-h-dyn">
			<slot />
		</container>
	{/key}
</MainLayout>