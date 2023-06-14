<script lang="ts">
	import { useThrelte, useRender } from '@threlte/core';
	import { EffectComposer, RenderPass } from 'postprocessing';
	import type { Camera as ThreeCamera } from 'three';
	import { tweened } from 'svelte/motion';
	import { quintOut } from 'svelte/easing'; 

	import { CITYSCAPE_CONFIG } from '$lib/config/scene';
	import Lights from './elements/lights.svelte';
	import Fog from './elements/fog.svelte';
	import Camera from './elements/camera.svelte';
	import Floor from './elements/floor.svelte';
	import Buildings from './elements/buildings.svelte';
	import { mousePos, offsetSize } from './context';
	import RainPass from './rain';

	offsetSize.set((CITYSCAPE_CONFIG.dimensions[1] - 1) * CITYSCAPE_CONFIG.boxSize);

	const { scene, renderer, camera } = useThrelte();

	const px = tweened(0, {
		duration: 400,
		easing: quintOut
	});
	const py = tweened(0, {
		duration: 400,
		easing: quintOut
	});

	let pass: RainPass | null = null;
	const composer = new EffectComposer(renderer);
	const setupEffectComposer = (camera: ThreeCamera) => {
		if (!pass) {
			pass = new RainPass({
				height: renderer?.domElement.height || 1920,
				width: renderer?.domElement.width || 1080
			});
		}
		composer.removeAllPasses();
		composer.addPass(new RenderPass(scene, camera));
		composer.addPass(pass);
	};
	// We need to set up the passes according to the camera in use
	$: setupEffectComposer($camera);
	useRender((_, delta) => {
		if (pass) {
			pass.uniforms['parallax'].value.x = $px;
			pass.uniforms['parallax'].value.y = $py;
		}
		composer.render(delta);
	});

	mousePos.subscribe((pos) => {
		if (renderer) {
			px.set(((pos.x/renderer.domElement.width)*6)-1);
      py.set(((pos.y/renderer.domElement.width)*6)-1);
		}
	});
</script>

<Camera />
<Lights />
<Fog />
<Floor />
<Buildings />
