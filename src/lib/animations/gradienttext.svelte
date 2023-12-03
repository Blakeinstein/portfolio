<script lang="ts">

</script>

<template>
  <span>
    <slot />
  </span>
</template>

<style>
span {
	background: url(/gradient.webp);
	background-position-x: 0%;
	background-position-y: 0%;
	background-clip: border-box;
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-webkit-text-stroke-width: 2px;
	-webkit-text-stroke-color: rgba(40, 33, 81, 0.333);
	background-position: center;
	text-shadow: 0 0 20px #5315bf75;
}
</style>