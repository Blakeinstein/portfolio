<script lang="ts">
  import { onMount } from 'svelte';
  import { partytownSnippet } from '@builder.io/partytown/integration';

  let scriptTag: HTMLScriptElement;
  let amplitudeTag: HTMLScriptElement;
  onMount(() => {
    scriptTag.textContent = partytownSnippet();
    amplitudeTag.setAttribute("type", "text/partytown");
    amplitudeTag.setAttribute("src", "https://plausible.blaine.vip/js/script.js");
  });
</script>

<svelte:head>
  <script bind:this={scriptTag}></script>
  <script bind:this={amplitudeTag} defer data-domain="blaine.vip"></script>
</svelte:head>