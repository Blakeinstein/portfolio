<script>
	import { browser } from '$app/environment';
	import { Canvas, OrbitControls, T } from '@threlte/core'
	import { spring } from 'svelte/motion'
	import { degToRad } from 'three/src/math/MathUtils'

	const scale = spring(1, {
    stiffness: 0.2,
    damping: 1,
  })

  const animate = () => {
    let time = Date.now() / 1000;
    scale.set(1 + Math.sin(Math.PI * time) * 0.5);
    requestAnimationFrame(animate);
  }

  if (browser) {
    animate();
  }
</script>

<div class="absolute inset-0">
	<Canvas>
		<T.PerspectiveCamera makeDefault position={[10, 10, 10]} fov={24}>
      <OrbitControls maxPolarAngle={degToRad(80)} enableZoom={false} target={{ y: 0.5 }} />
    </T.PerspectiveCamera>

		<T.DirectionalLight castShadow position={[3, 10, 10]} />
		<T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
		<T.AmbientLight intensity={0.2} />

		<!-- Cube -->
		<T.Group scale={$scale}>
			<T.Mesh position.y={0.5} castShadow>
				<T.BoxGeometry />
				<T.MeshStandardMaterial color="#333333" />
			</T.Mesh>
		</T.Group>

		<!-- Floor -->
		<T.Mesh receiveShadow rotation.x={degToRad(-90)}>
			<T.CircleGeometry args={[3, 72]} />
			<T.MeshStandardMaterial color="white" />
		</T.Mesh>
	</Canvas>
</div>