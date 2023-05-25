<script lang="ts">
	import { CITYSCAPE_CONFIG } from '$lib/config/scene';

	import Lights from './elements/lights.svelte';
	import Fog from './elements/fog.svelte';
	import Camera from './elements/camera.svelte';
	import Floor from './elements/floor.svelte';
	import Buildings from './elements/buildings.svelte';
	import { offsetSize } from './context';

	offsetSize.set((CITYSCAPE_CONFIG.dimensions[1] - 1) * CITYSCAPE_CONFIG.boxSize);
</script>

<Camera />
<Lights />
<Fog />
<Floor />
<Buildings />
