<script lang="ts">
  let classes = "";
	export { classes as class };
</script>

<div class={`tracking-[.4em] text-sm scroll-indicator opacity-60 ${classes}`}>
  <span>SCROLL</span>
</div>

<style>
.scroll-indicator {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  align-items: center;
	
	&:after {
    background-color: var(--color-secondary-content);
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