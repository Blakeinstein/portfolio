<script lang="ts">
	import Icon from '@iconify/svelte';
  import classNames from 'classnames';


  export let tooltipContent: string = "";
  export let href: string = "";
  export let icon: string = "";
  export let custom: string | undefined = undefined;
  export let background: string = "theme('colors.zinc.500')";
</script>


<a
  class="w-32 h-32 transition-all leading-10 hover:scale-125 inline-block"
  data-blobity-tooltip={tooltipContent}
  href={href}
  target="_blank"
  rel="noopener noreferrer"
>
  <span
    class={
      classNames(
        "w-full h-full grid place-items-center rounded-full p-8 text-white", 
        custom
      )
    }
    style={`
      background: ${background};
    `}
  >
    {#if custom}
      {@html icon}
    {:else}
      <Icon class="fill-current w-full h-full" icon={icon} />
    {/if}
  </span>
</a>
