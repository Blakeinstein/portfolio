<script lang="ts">
	import { GLTF } from '@threlte/extras'
	import { T, useFrame, useLoader } from '@threlte/core';
	import { Text } from '@threlte/extras';
	import { makeCityScape } from '../utils';
	import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
	import { MeshPhysicalMaterial } from 'three';
	import { CITYSCAPE_CONFIG } from '$lib/config/scene';
	import { offsetSize } from '../context';

	// let posA: [number, number, number] = [0, 1, 0];
	// let posB: [number, number, number] = [0, 1, $offsetSize];

	// const material = new MeshPhysicalMaterial(CITYSCAPE_CONFIG.material);

	// const objLoader = useLoader(OBJLoader);

	// const models = objLoader.load('/models/buildings.obj');

	// const groups = models.then((buildings) => {
	// 	const group = makeCityScape(material, buildings.children);
	// 	return [group, group.clone()];
	// });

	// useFrame(({ clock }) => {
	// 	const delta = clock.getElapsedTime();
	// 	posA[2] = (delta * 5) % $offsetSize;
	// 	posB[2] = posA[2] - $offsetSize;
	// });

	let rotation = 0;
	useFrame(({ clock }) => {
		const delta = clock.getElapsedTime();
		rotation = delta * 0.1;
	});
</script>

<!-- {#await groups then [groupA, groupB]}
	<T is={groupA} bind:position={posA} />
	<T is={groupB} bind:position={posB} />
{:catch error}
	<Text text={error.message} fontSize={0.01} />
{/await} -->
<GLTF
	castShadow
	receiveShadow
	url={'/models/scene.gltf'}
	position={[0, 0, 0]}
	scale={20}
	rotation={[0, rotation, 0]}
/>