<script lang="ts">
	import { useThrelte, useRender } from '@threlte/core'
  import {
    EffectComposer,
    EffectPass,
    RenderPass,
    SMAAEffect,
    SMAAPreset,
    BloomEffect,
    KernelSize
  } from 'postprocessing';
	import type { Camera as ThreeCamera } from 'three';

	import { CITYSCAPE_CONFIG } from '$lib/config/scene';
	import Lights from './elements/lights.svelte';
	import Fog from './elements/fog.svelte';
	import Camera from './elements/camera.svelte';
	import Floor from './elements/floor.svelte';
	import Buildings from './elements/buildings.svelte';
	import { offsetSize } from './context';
	import RainShader from './rain';
	import RainPass from './rain';

	offsetSize.set((CITYSCAPE_CONFIG.dimensions[1] - 1) * CITYSCAPE_CONFIG.boxSize);

	
  const { scene, renderer, camera } = useThrelte();
  // To use the EffectComposer we need to pass arguments to the
  // default WebGLRenderer: https://github.com/pmndrs/postprocessing#usage
  const composer = new EffectComposer(renderer);
  const setupEffectComposer = (camera: ThreeCamera) => {
    composer.removeAllPasses();
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(new RainPass({
      height: renderer?.domElement.height || 1920, 
      width: renderer?.domElement.width || 1080
    }));
  };
  // We need to set up the passes according to the camera in use
  $: setupEffectComposer($camera);
  useRender((_, delta) => {
    composer.render(delta);
  });
</script>

<Camera />
<Lights />
<Fog />
<Floor />
<Buildings />