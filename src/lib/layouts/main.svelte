<script>
	import ScrollIndicator from "$lib/animations/scrollIndicator.svelte";
	import Navbar from "$lib/components/navbar/index.svelte";
</script>

<Navbar />
<main class="section gap-4 relative">
	<background class="fixed h-screen inset-0">
		<slot name="background" />
	</background>
	<container class="relative min-h-dyn">
		<slot />
	</container>
</main>
<ScrollIndicator class="fixed bottom-10 right-10" />
