<script lang="ts">
	import Lenis from '@studio-freight/lenis';

	import { browser } from '$app/environment';
	import SEO from '$lib/components/SEO/index.svelte';
	import MainLayout from '$lib/layouts/main.svelte';
	import Section from '$lib/layouts/section.svelte';
	import Fade from '$lib/animations/fade.svelte';

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
		}
		requestAnimationFrame(fn);
	}
</script>

<SEO {...seoProps} />

{#await import('$lib/components/buildings/index.svelte').then(i => i.default)}
	<MainLayout>
		<p>Loading..</p>
	</MainLayout>
{:then BuildingScene}
	<MainLayout>
		<BuildingScene slot="background"/>
		<Section>
			<Fade>
				<h1 class="text-2xl">This is some overlay text</h1>
			</Fade>
		</Section>
		<Section>
			<Fade>
				<h1 class="text-2xl">This is some overlay text 2</h1>
			</Fade>
		</Section>
		<Section>
			<Fade>
				<h1 class="text-2xl">This is some overlay text 3</h1>
			</Fade>
		</Section>
	</MainLayout>

{/await}
