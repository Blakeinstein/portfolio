<script lang="ts">
	import Section from "$lib/layouts/section.svelte";
	import Title from "../../../elements/atoms/Title.svelte";
	import Goo from "./Goo.svelte";
  import { SocialData } from "./SocialData";
	import SocialGroup from "./SocialGroup.svelte";

</script>
<Section>
  <Title noArrow size="sm" class="mb-4">Find me on:</Title>
  <div class="w-full h-full rounded-lg bg-slate-600 bg-opacity-10 py-12 px-4">
    <div class="flex flex-col items-center w-full h-full goo">
      {#each Object.entries(SocialData) as [groupName, socials], i}
        <SocialGroup groupName={groupName} socials={socials} idx={i} />
      {/each}
    </div>
  </div>
</Section>
<Goo />

<style>
  .goo {
    filter: url(#goo);
  }
</style>