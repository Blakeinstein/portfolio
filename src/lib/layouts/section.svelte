<script>
  import classNames from "classnames";

	let classses = "";
	export let head = false;
	export { classses as class }
</script>

<section
	class={classNames(
		"wf", 
		{"head": head},
		classses)
	}
	data-lenis-scroll-snap-align="start"
>
	<slot />
</section>

<style>
	section {
		min-height: 100vh;
		padding: 0.5rem 2rem;
		scroll-snap-align: start;
	}


	section.head {
		min-height: calc(100vh - 5rem);
	}
</style>