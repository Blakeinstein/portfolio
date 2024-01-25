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
    --color: ${background};
  `}
  >
  {#if custom}
    {@html icon}
  {:else}
    <Icon class="half gradient" icon={icon} />
  {/if}
  </a>
{/if}

<style lang="postcss">
  .social-icon {
    --size: 3rem;
    width: var(--size);
    height: var(--size);
    font-size: 1.125rem;
    line-height: 1.75rem;
    border-radius: 0.5rem;
    transition: all var(--transition-duration) var(--transition-timing);

    &:hover {
      scale: 1.4;
      transform-origin: center;
    }
  }

  :global(.half) {
    width: 50%;
    height: 50%;
    color: var(--color);
  }
</style>