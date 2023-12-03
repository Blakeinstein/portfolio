<script lang="ts">
	import Icon from '@iconify/svelte';

  export let tooltipContent = "";
  export let href = "";
  export let icon = "";
  export let custom: string | undefined = undefined;
  export let background = "theme('colors.zinc.500')";
  export let dummy = false;
</script>

{#if dummy}
  <div class="social-icon grid-center">
    {icon}
  </div>
{:else}
  <a
  class="social-icon grid-center"
  data-blobity-tooltip={tooltipContent}
  data-blobity-radius="16"
  href={href}
  target="_blank"
  rel="noopener noreferrer"
  style={`
    background: ${background};
  `}
  >
  {#if custom}
    {@html icon}
  {:else}
    <Icon class="fill half" icon={icon} />
  {/if}
  </a>
{/if}

<style lang="postcss">
  .social-icon {
    background-color: black;
    color: white;
    width: 9rem;
    height: 9rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
    border-radius: 0.5rem;
    transition: all var(--transition-duration) var(--transition-timing);

    &:is(a):hover {
      padding: 1.5rem;
      scale: 1.1;
      z-index: 10;
    }
  }

  :global(.half) {
    width: 50%;
    height: 50%;
  }

  @media (min-width: 1024px) { 
    .social-icon {
      width: 20rem;
      height: 20rem;
      font-size: 3rem;
      line-height: 1;
    }
   }
</style>