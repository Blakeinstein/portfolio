<script lang="ts">
	import Lenis from '@studio-freight/lenis';
	import Blobity from 'blobity';

	import { browser } from '$app/environment';
	import { scrollVelocity } from '$lib/context';
	import '../app.postcss';
	import PartyTown from '$lib/components/SEO/PartyTown.svelte';

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
			opacity: 0.2,
			size: 28,
			dotColor: '#333333',
			font: 'Red Hat Display',
			fontSize: 28,
			focusableElements: 'h1, a, label.checkbox, button, input, textarea, select, .header',
			mode: 'slow',
		});

		blobity['canvas'].style.zIndex = 0;
	}
</script>

<PartyTown />
<slot />
