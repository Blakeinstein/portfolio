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

<div class="h-full w-full" on:mousemove={handleMousemove}>
	<Canvas rendererParameters={{ alpha: true }}>
		<Scene />
	</Canvas>
</div>
