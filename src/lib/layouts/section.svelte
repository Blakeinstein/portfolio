<script>
	let classses = "";
	export { classses as class }
</script>

<section class={"wf " + classses} data-lenis-scroll-snap-align="start">
	<slot />
</section>

<style>
	section {
		min-height: 100dvh;
		padding: 0.5rem 2rem;
		scroll-snap-align: start;
	}
	section:nth-of-type(1) {
		min-height: calc(100dvh - 5rem);
	}
</style>