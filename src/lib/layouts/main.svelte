<script>
	import ScrollIndicator from "$lib/animations/scrollIndicator.svelte";
	import Navbar from "$lib/components/navbar/index.svelte";
	import Backdrop from '$lib/components/elements/backdrop/index.svelte';
</script>

<background class="fixed pointer-events-none inset-0">
	<slot name="background">
		<Backdrop />
	</slot>
</background>
<Navbar />
<main class="section gap-4 relative">
	<slot />
</main>
<ScrollIndicator class="fixed bottom-10 right-10" />
