<script lang="ts">
	import Icon from '@iconify/svelte';

  export let tooltipContent: string = "";
  export let href: string = "";
  export let icon: string = "";
  export let custom: string | undefined = undefined;
  export let background: string = "theme('colors.zinc.500')";
</script>


<a
  class="w-32 h-32 transition-all social-icon grid place-items-center rounded-full p-8 text-white"
  data-blobity-tooltip={tooltipContent}
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
    <Icon class="fill-current w-full h-full" icon={icon} />
  {/if}
</a>

<style lang="postcss">
  .social-icon {
    &:hover {
      scale: 1.15;
      z-index: 10;
    }
  }
</style>