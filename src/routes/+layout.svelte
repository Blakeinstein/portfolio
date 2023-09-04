<script lang="ts">
	import Lenis from '@studio-freight/lenis';
	import Blobity from 'blobity';

	import { fly } from 'svelte/transition'
	import { cubicOut, cubicIn } from 'svelte/easing';

	import { browser } from '$app/environment';
	import { scrollVelocity } from '$lib/context';
	import PartyTown from '$lib/components/SEO/PartyTown.svelte';
	import MainLayout from '$lib/layouts/main.svelte';

	import '../app.postcss';

	let lenis: Lenis | null;
	let blobity: Blobity | null;

	if (browser) {
		lenis = new Lenis();
		const fn = (time: number) => {
			lenis?.raf(time);
			requestAnimationFrame(fn);
		};
		requestAnimationFrame(fn);
		lenis.on("scroll", (e: Lenis) => scrollVelocity.set(e.velocity));

		blobity = new Blobity({
			licenseKey: "GPLv3",
			color: '#0c0400',
			opacity: 0.35,
			tooltipPadding: 10,
			size: 28,
			dotColor: '#333333',
			font: 'Red Hat Display',
			fontColor: '#ffffff',
			fontSize: 28,
			focusableElements: 'h1, a, .checkbox, input::before, button, input, textarea, select, .header, .ellipses-orbit',
			mode: 'slow',
		});

		blobity['canvas'].style.zIndex = 0;
	}

  export let data;

	const duration = 300
	const delay = duration + 100
	const x = 300

	const transitionIn = { easing: cubicOut, x, duration, delay }
	const transitionOut = { easing: cubicIn, x: -x, duration }

</script>

<PartyTown />

<MainLayout>
	{#key data.path}
		<container in:fly={transitionIn} out:fly={transitionOut} class="relative min-h-dyn">
			<slot />
		</container>
	{/key}
</MainLayout>