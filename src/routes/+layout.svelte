<script>
	import '../app.postcss';
	import Background from '../lib/components/background.svelte';
</script>

<Background />
<main class="absolute inset-0 flex flex-col items-center justify-center gap-4">
	<slot />
</main>
