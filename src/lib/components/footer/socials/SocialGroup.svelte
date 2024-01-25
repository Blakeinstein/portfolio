<script lang="ts">
  import type { SocialInfo } from "$lib/data/SocialData";
	import Link from "./SocialLink.svelte";

  export let socials: SocialInfo[];
</script>

{#each socials as social}
  <Link
    tooltipContent={social.name}
    href={social.href}
    icon={social.icon}
    custom={social.custom}
    background={social.background}
  />
{/each}
