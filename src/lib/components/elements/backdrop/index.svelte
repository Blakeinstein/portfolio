<script>
	import Line from "./Line.svelte";
  
	const top = "4.25rem";
	const left = "4rem";
</script>


<Line top={top} />
<Line top="40%" />
<Line top="85%" />

<Line top={top} left={left} vertical />
<Line top={top} left={`calc(100% - ${left})`} vertical />

