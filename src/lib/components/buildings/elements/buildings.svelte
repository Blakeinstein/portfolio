<script lang="ts">
	import { GLTF } from '@threlte/extras'
	import { useFrame } from '@threlte/core';

	let rotation = 0;
	useFrame(({ clock }) => {
		const delta = clock.getElapsedTime();
		rotation = delta * 0.1;
	});
</script>

<GLTF
	castShadow
	receiveShadow
	url={'/models/scene.gltf'}
	position={[10, -10, 0]}
	scale={20}
	rotation={[0, rotation, 0]}
/>