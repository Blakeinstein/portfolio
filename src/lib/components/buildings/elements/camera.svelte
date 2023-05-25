<script lang="ts">
  import { dev } from "$app/environment";
  import { T, useThrelte } from "@threlte/core";
	import { OrbitControls } from "@threlte/extras";
	import { offsetSize, mousePos } from "../context";
	import { lerp, lineEq } from "../utils";

  const { size } = useThrelte();

  let lastPos: [number, number, number] = [1, 30, $offsetSize * 1.2];

  mousePos.subscribe((pos) => {
    lastPos[0] = lerp(lastPos[0], lineEq(0, 6, $size.width, 0, pos.x), 0.05);
    lastPos[1] = lerp(lastPos[1], lineEq(22, 38, $size.height, 0, pos.y), 0.05);
  })
</script>

<T.PerspectiveCamera
  makeDefault
  bind:position={lastPos}
  fov={30}
  near={1}
  far={1000}
  on:create={
    ({ ref }) => {
      ref.lookAt(0, 0, 0);
      ref.rotateX(- 0.25);
    }
  }
  {...$$restProps}
>
  <!-- {#if dev}
    <OrbitControls />
  {/if} -->
</T.PerspectiveCamera>