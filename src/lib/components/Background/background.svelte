<script lang="ts">
	import { browser, dev } from '$app/environment';
	import { Editable, Project, Sheet, Studio } from '@threlte/theatre';
	import { types, type ISequence } from '@theatre/core';
	import { Canvas, OrbitControls, T, Three } from '@threlte/core';
	import { AudioContext, ShaderMaterial } from 'three';
	import { degToRad } from 'three/src/math/MathUtils'
	import { Clock } from 'three';
	import fragmentShader from './frag.glsl';
	import vertexShader from './vert.glsl';

	const nudgableNumber = (defaultValue: number) => types.number(defaultValue, { nudgeMultiplier: 0.01 });

	const LINE_MATERIAL = new ShaderMaterial({
		uniforms: {
			uTime: { value: 0.0 },
			uHeight: { value: 0.0 },
			uColor: { value: [1, 1, 1] }
		},
		vertexShader,
		fragmentShader,
		transparent: true,
	})

	let sequence: ISequence | undefined = undefined;
	// let theatre: ITheatre;


	const startMusic = async () => {
		const audioCtx = new window.AudioContext();
		await sequence?.attachAudio({
			source: "/music.mp3", // DOCTOR VOX
			audioContext: audioCtx,
			destinationNode: audioCtx.destination,
		});

		const obj = sequence.object("Shader", {
  uniforms: {
    uFrequency: nudgableNumber(0),
    uAmplitude: nudgableNumber(4),
    uDensity: nudgableNumber(1),
    uStrength: nudgableNumber(0),
    uDeepPurple: nudgableNumber(1),
    uOpacity: nudgableNumber(0.1),
    uBrightness: {
      x: nudgableNumber(0.1),
      y: nudgableNumber(0.1),
      z: nudgableNumber(0.9)
    },
    uContrast: {
      x: nudgableNumber(0.3),
      y: nudgableNumber(0.3),
      z: nudgableNumber(0.3)
    },
    uOscilation: {
      x: nudgableNumber(0.5),
      y: nudgableNumber(0.5),
      z: nudgableNumber(0.9)
    },
    uPhase: {
      x: nudgableNumber(0.9),
      y: nudgableNumber(0.1),
      z: nudgableNumber(0.8)
    }
  },

  transforms: {
    position: vector3D,
    rotation: vector3D
  }
});

		const analyser = audioCtx.createAnalyser();
		const numPoints = analyser.frequencyBinCount;
		const spreadArray = new Float32Array(numPoints);
		const heightArray = new Uint8Array(numPoints);
		for (let ii = 0; ii < numPoints; ++ii) {
			spreadArray[ii] = ii / numPoints * 2 - 1;  // make clip space positions
		}

		if (analyser) {
			analyser.connect(audioCtx.destination);
			sequence?.play();
			
			let time = new Clock();

			const animate = () => {
				LINE_MATERIAL.needsUpdate = true;
				LINE_MATERIAL.uniforms.uTime.value = time.getElapsedTime();

				
				analyser.getByteFrequencyData(heightArray);
				const textureData = new Uint8Array(numPoints * 4);
				for (let i = 1; i <= numPoints; i++) {
					textureData[4 * i] = heightArray[i - 1];
				}

				console.log(textureData);
				requestAnimationFrame(() => animate());
			}
			animate();
		}
	}
</script>

<div class="absolute inset-0">
	<button
		class="absolute right-10 bottom-10 rounded-xl bg-slate-900 shadow-lg px-5 py-2 border-2 border-black"
		on:click={startMusic}
	>
		Start
	</button>
	<Canvas rendererParameters={{ alpha: true }}>
			<Studio enabled={dev}	/>
			<Project name="main">
				<Sheet bind:sequence={sequence} on:load={startMusic} autoReset="onMount">
					<T.PerspectiveCamera makeDefault position={[0, 0, 1]} fov={24} lookat={[0, 0, 0]}>
						<OrbitControls maxPolarAngle={degToRad(80)} enableZoom={false} target={{ y: 0 }} />
					</T.PerspectiveCamera>
			
					<T.AmbientLight intensity={1}/>
			
					<T.Mesh material={LINE_MATERIAL}>
						<T.PlaneGeometry args={[1, 1, 1, 100]} />
					</T.Mesh>
					</Sheet>
				</Project>
	</Canvas>
</div>