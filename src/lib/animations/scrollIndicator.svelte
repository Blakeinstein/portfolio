<script lang="ts">
  let classes = "";
	export { classes as class };
</script>

<div class={`scroll-indicator ${classes}`}>
  <span>SCROLL</span>
</div>

<style>
.scroll-indicator {
  letter-spacing: .4em;
  opacity: .6;
  font-size: small;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  align-items: center;
  position: fixed;
  bottom: 2.5em;
  right: 2.5em;
	
	&:after {
    background-color: var(--color-accent);
    transition: all var(--transition-duration) var(--transition-timing);
    transition-delay: 300ms;
		content: "";
		height: 3em;
		width: 2%;
	}
}

@keyframes pulse {
  50% {
    opacity: .5;
  }
}
</style>