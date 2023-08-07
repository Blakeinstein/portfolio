<script lang="ts">
	import classNames from "classnames";
  import type { SocialInfo } from "./SocialData";
	import Link from "./SocialLink.svelte";

  export let socials: SocialInfo[];
  export let groupName: string;
  export let idx = 0;
</script>

<div class="flex -my-1 relative">
  <div
    class={
      classNames(
        "absolute top-1/2 -z-10 p-6 -translate-y-1/2",
        "bg-slate-300 bg-opacity-60 text-black font-black text-lg rounded-full",
        idx & 1 ? "left-full" : "right-full"
      )
    }
  >
    <h1>{groupName}</h1>
  </div>
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
