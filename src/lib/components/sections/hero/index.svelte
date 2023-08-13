<script>
	import Title from "$lib/components/elements/atoms/Title.svelte";
import Ellipsis from "./Ellipsis.svelte";

</script>

<div class="h-[60vh] grid place-items-center">
  <h1 class="text-8xl lg:text-9xl font-black italic hero-title p-2">Hi I am Blaine!</h1>
</div>
<Ellipsis />

<style lang="postcss">
  .hero-title {
    word-spacing: 0.5rem;
  }
</style>