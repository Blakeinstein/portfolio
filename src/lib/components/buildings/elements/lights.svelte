<script lang="ts">
	import { T } from '@threlte/core';
	import { LIGHT_CONFIG } from '$lib/config/scene';
</script>

<T.SpotLight
	castShadow
	color={LIGHT_CONFIG.spotlight.color}
	position={LIGHT_CONFIG.spotlight.position.toArray()}
/>
<T.AmbientLight color={LIGHT_CONFIG.ambient.color} intensity={LIGHT_CONFIG.ambient.intensity} />
{#each LIGHT_CONFIG.pointLights as pointLight}
	<T.PointLight
		color={pointLight.color}
		intensity={pointLight.intensity}
		position={pointLight.position.toArray()}
	/>
{/each}
