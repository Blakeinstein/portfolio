<script lang="ts">
	import { browser } from '$app/environment';
	// import { Project, Sheet } from '@threlte/theatre'
	// import type { ISequence } from '@theatre/core';
	import { Canvas, OrbitControls, T } from '@threlte/core'
	import { ShaderMaterial } from 'three';
	import { degToRad } from 'three/src/math/MathUtils'
	import fragmentShader from './frag.glsl';
	import vertexShader from './vert.glsl';

	const LINE_MATERIAL = new ShaderMaterial({
		uniforms: {
			uTime: { value: 0.0 },
			uColor: { value: [1, 1, 1] }
		},
		vertexShader,
		fragmentShader,
		transparent: true,
	})

	// let sequence: ISequence | undefined = undefined;

  const animate = () => {
    let time = (Date.now() / (2 * 3600)) % 60;
		LINE_MATERIAL.needsUpdate = true;
		LINE_MATERIAL.uniforms.uTime.value = time * 8;

		// const counts = ctx.frequencyBinCount;
		// const heightArray = new Uint8Array(counts);
		// ctx.getByteFrequencyData(heightArray);
		// const textureData = new Uint8Array(counts * 4);
		// for (let i = 1; i <= counts; i++) {
		// 	textureData[4 * i] = heightArray[i - 1];
		// }

		// console.log(textureData);

		requestAnimationFrame(() => animate());
  }

	if (browser) {
		// const audioContext = new window.AudioContext();
		// const analyser = audioContext.createAnalyser();
		// const numPoints = analyser.frequencyBinCount;
		// const spreadArray = new Float32Array(numPoints);
		// const heightArray = new Uint8Array(numPoints);
		// for (let ii = 0; ii < numPoints; ++ii) {
		// 	spreadArray[ii] = ii / numPoints * 2 - 1;  // make clip space positions
		// }

		// console.log(sequence);

		// const streamSource = audioStreamSource.create({
		// 	content: audioContext,
		// 	loop: true
		// })
		// function startMusic() {
		// 	audioContext.resume().then(() => {
		// 		streamSource.play();
		// 		streamSource.getSource().connect(analyser);
		// 		analyser.connect(audioContext.destination);
		// 	});
		// }
		// streamSource.on('error', e => {
		// 	console.error("audio error:", e);  // eslint-disable-line
		// });

		// streamSource.setSource(
		// 	'sounds/DOCTOR VOX - Level Up.mp3'
		// );

    animate();
  }
</script>

<div class="absolute inset-0">
	<!-- <Project>
		<Sheet name="default" bind:sequence> -->
			<Canvas rendererParameters={{ alpha: true }}>
				<T.PerspectiveCamera makeDefault position={[0, 0, 1]} fov={24} lookat={[0, 0, 0]}>
					<OrbitControls maxPolarAngle={degToRad(80)} enableZoom={false} target={{ y: 0 }} />
				</T.PerspectiveCamera>
		
				<T.AmbientLight intensity={1}/>
		
				<T.Mesh material={LINE_MATERIAL}>
					<T.PlaneGeometry args={[1, 1, 1, 100]} />
				</T.Mesh>
			</Canvas>
		<!-- </Sheet>
	</Project> -->
</div>