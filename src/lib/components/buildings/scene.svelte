<script lang="ts">
	import { Canvas, T, useLoader } from '@threlte/core';
	import { LIGHT_CONFIG, FOG_CONFIG, FLOOR_CONFIG, BACKGROUND_CONFIG, CITYSCAPE_CONFIG } from './config';
	import { LoadingManager, MeshPhysicalMaterial } from 'three';
	import { Suspense } from '@svelte-drama/suspense'
	import { loadBuildingModels, makeCityScape } from './utils';
	import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
	
	const offsetSize = (CITYSCAPE_CONFIG.dimensions[1] - 1) * CITYSCAPE_CONFIG.boxSize;
	const material = new MeshPhysicalMaterial(CITYSCAPE_CONFIG.material);

	const loadingManager = new LoadingManager();
	const objLoader = useLoader(OBJLoader, () => new OBJLoader(loadingManager));
	const groups = loadBuildingModels(objLoader).then(buildings => {
		const group = makeCityScape(material, buildings);
		return [group, group.clone()];
	});
</script>

<Suspense
	let:suspend
  on:error={(e) => console.error(e.detail)}
  on:load={() => console.log('loaded')}
>	
	<p slot="loading">Loading...</p>
	<p slot="error" let:error>Error: {error?.message || error}</p>
	
	<Canvas rendererParameters={{ alpha: true }}>
		<T.PerspectiveCamera makeDefault position={[0, 0, 1]} fov={24} lookat={[0, 0, 0]}>
	
		</T.PerspectiveCamera>
	
		<!-- Lights -->
		<svelte:fragment>
			<T.SpotLight
				castShadow
				color={LIGHT_CONFIG.spotlight.color}
				position={LIGHT_CONFIG.spotlight.position.toArray()}
			/>
			<T.AmbientLight
				color={LIGHT_CONFIG.ambient.color}
			/>
			{#each LIGHT_CONFIG.pointLights as pointLight}
				<T.PointLight
					color={pointLight.color}
					intensity={pointLight.intensity}
					position={pointLight.position.toArray()}
				/>
			{/each}
		</svelte:fragment>
		
		<!-- Fog -->
		<T.Fog
			color={FOG_CONFIG.color}
			near={FOG_CONFIG.near}
			far={FOG_CONFIG.far}
		/>
	
		<!-- Scene objects -->
		<svelte:fragment>
			<!-- Floor -->
			<T.Mesh>
				<T.PlaneGeometry
					args={FLOOR_CONFIG.geometryArgs}
				/>
				<T.MeshPhysicalMaterial
					args={[FLOOR_CONFIG.material]}
				/>
			</T.Mesh>
			<!-- Backdrop -->
			<T.Mesh position={[0, 28, - offsetSize / 3]}>
				<T.PlaneGeometry
					args={BACKGROUND_CONFIG.geometryArgs}
				/>
				<T.MeshPhysicalMaterial
					args={[BACKGROUND_CONFIG.material]}
				/>
			</T.Mesh>

			<!-- Buildings -->
			{#await suspend(groups) then [groupA, groupB]}
			<T.Group  />
			{/await}
		</svelte:fragment>
	
	</Canvas>
</Suspense>
