<script lang="ts">
  import { T } from "@threlte/core";
	import { offsetSize } from "../context";
</script>

<T.Fog
	color="#000000"
	near={$offsetSize / 2}
	far={$offsetSize * 1.5}
/>
