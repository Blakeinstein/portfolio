<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Scene from './scene.svelte';
	import { mousePos } from './context';

	const handleMousemove = (e: MouseEvent) => {
		mousePos.set({
			x: e.clientX,
			y: e.clientY
		});
	};
</script>

<div class="h-full w-full scene rotate-180" on:mousemove={handleMousemove}>
	<Canvas >
		<Scene />
	</Canvas>
</div>