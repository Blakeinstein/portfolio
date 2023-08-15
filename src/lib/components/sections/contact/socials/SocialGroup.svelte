<script lang="ts">
	import classNames from "classnames";
  import type { SocialInfo } from "./SocialData";
	import Link from "./SocialLink.svelte";

  export let socials: SocialInfo[];
  export let groupName: string;
</script>

<div class="flex flex-wrap-reverse justify-center -my-1 ${groupName}">
  {#each socials as social}
    <Link
      tooltipContent={social.name}
      href={social.href}
      icon={social.icon}
      custom={social.custom}
      background={social.background}
    />
  {/each}
</div>
