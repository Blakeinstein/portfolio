<script lang="ts">
	import { onNavigate } from '$app/navigation'

	import PartyTown from '$lib/components/SEO/PartyTown.svelte';
	import MainLayout from '$lib/layouts/main.svelte';
	import Blobity from '$lib/components/page/blobity.svelte';
	// import Lenis from '$lib/components/page/lenis.svelte';

	import '../app.postcss';

	onNavigate((navigation) => {
		// @ts-expect-error - Typescript doesn't know about startViewTransition
		if (!document.startViewTransition) return

		return new Promise((resolve) => {
			// @ts-expect-error - Typescript doesn't know about startViewTransition
			document.startViewTransition(async () => {
				resolve()
				await navigation.complete
			})
		})
	})
</script>

<Blobity />
<!-- <Lenis /> -->
<PartyTown />

<MainLayout>
		<slot />
</MainLayout>