<script>
	let classses = "";
	export { classses as class }
</script>

<div class={`w-full min-h-dyn min-h-max  px-8 py-2 ${classses}`} data-lenis-scroll-snap-align="start">
	<slot />
</div>
