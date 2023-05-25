<script lang="ts">
  import { dev } from "$app/environment";
  import { T } from "@threlte/core";
	import { OrbitControls } from "@threlte/extras";
	import { offsetSize } from "../context";
</script>

<T.PerspectiveCamera
  makeDefault
  position={[3, 24, $offsetSize * 1.2]}
  fov={30}
  near={1}
  far={1000}
  on:create={
    ({ ref }) => {
      ref.lookAt(0, 0, 0);
      ref.rotateX(- 0.1);
    }
  }
  {...$$restProps}
>
  {#if dev}
    <OrbitControls />
  {/if}
</T.PerspectiveCamera>