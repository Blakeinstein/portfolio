<script lang="ts">
	import Lenis from '@studio-freight/lenis';

	import { browser } from '$app/environment';
	import SEO from '$lib/components/SEO/index.svelte';
	import MainLayout from '$lib/layouts/main.svelte';
	import Backdrop from '$lib/components/elements/backdrop/index.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import { scrollVelocity } from '$lib/context';
	import Experience from '$lib/components/sections/experience/index.svelte';

	let seoProps = {
		breadcrumbs: [
			{
				name: 'home',
				slug: ''
			}
		],
		title: 'Home',
		slug: ''
	};

	let lenis: Lenis | null;

	if (browser) {
		lenis = new Lenis();
		const fn = (time: number) => {
			lenis?.raf(time);
			requestAnimationFrame(fn);
		};
		requestAnimationFrame(fn);
		lenis.on("scroll", (e: Lenis) => scrollVelocity.set(e.velocity));
	}
</script>

<SEO {...seoProps} />
<MainLayout>
	<Hero />
	<Experience />
</MainLayout>

