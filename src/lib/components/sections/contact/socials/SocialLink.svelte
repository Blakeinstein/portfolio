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
  <div class="social-icon bg-black text-white">
    {icon}
  </div>
{:else}
  <a
  class="transition-all social-icon p-6 text-white"
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
    <Icon class="fill-current w-1/2 h-1/2" icon={icon} />
  {/if}
  </a>
{/if}

<style lang="postcss">
  .social-icon {
    @apply w-36 h-36 lg:w-80 lg:h-80 text-lg lg:text-5xl grid place-items-center rounded-lg;
    &:is(a):hover {
      scale: 1.1;
      z-index: 10;
    }
  }
</style>