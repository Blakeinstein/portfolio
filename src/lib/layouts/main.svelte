<script>
	import Navbar from "$lib/components/navbar/index.svelte";
	import Backdrop from '$lib/components/elements/backdrop/index.svelte';
</script>

<background class="">
	<slot name="background">
		<Backdrop />
	</slot>
</background>
<Navbar />
<main>
	<slot />
</main>

<style>
	background {
		position: fixed;
		inset: 0;
		pointer-events: none;
	}
	main {
		position: relative;
		scroll-snap-type: y mandatory;
	}
</style>