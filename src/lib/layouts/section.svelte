<script>
	let classses = "";
	export { classses as class }
</script>

<div class={`w-full min-h-dyn px-8 lg:px-24 py-2 ${classses}`} data-lenis-scroll-snap-align="start">
	<slot />
</div>
